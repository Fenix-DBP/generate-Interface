import {
    readFileSync,
    writeFileSync
} from "fs";
import {
    basename,
    extname,
    resolve
} from "path";
import {
    program
} from "commander";
import prettier from "prettier";

program
    .option('-p, --path <filePath>', 'Path to the JSON file')
    .option('-o, --output [outputFile]', 'Path to the output TypeScript file (default: outputInterfaces.ts)')
    .parse(process.argv);

const {
    path,
    output = "outputInterfaces.ts"
} = program.opts();

if (!path) {
    console.error('Error: Path to the JSON file is required. Use -p or --path option.');
    program.help();
}

(async () => {
    try {
        const JSON_FILE = JSON.parse(readFileSync(path, "utf-8"));
        const interfacesContent = await generateInterface(JSON_FILE);
        saveInterfaces(interfacesContent, output);
    } catch (error) {
        console.error(error);
    }
})();

async function generateInterface(JSON_FILE: any): Promise < string > {
    try {
        const interfacesArray: string[] = [];

        for (const [key, value] of Object.entries(JSON_FILE)) {
            const type = shouldUseType(value) ? `type ${key} =` : `interface ${key}`;
            const interfaceContent = `${type} ${await generateInterfaceType(value)};`;

            interfacesArray.push(interfaceContent);
        }

        interfacesArray.push(`interface ${basename(path, extname(path))} {\n${Object.entries(JSON_FILE).map(([i, _]) => `${quoteIfNeeded(i)}: ${quoteIfNeeded(i)}`).join("\n")}\n}`);
        const interfacesContent = interfacesArray.join('\n\n');
        return prettier.format(interfacesContent, {
            parser: "typescript"
        });
    } catch (error) {
        throw new Error("Failed to generate interfaces");
    }
}

async function generateInterfaceType(obj: any, indentation: number = 2): Promise < string > {
    if (Array.isArray(obj)) {
        if (obj.length === 0) {
            return "any[]";
        } else {
            const arrayType = await generateInterfaceType(obj[0]);
            return `${arrayType}[]`;
        }
    } else if (typeof obj === "object") {
        const properties = await Promise.all(Object.entries(obj).map(async ([prop, value]) => {
            if (Array.isArray(value) && !value.length) return `${quoteIfNeeded(prop)}: any[]`;

            const valueType = Array.isArray(value) ?
                `${await generateInterfaceType((value as any[])[0])}[]` :
                await generateInterfaceType(value, indentation + 2);

            return `${quoteIfNeeded(prop)}: ${valueType}`;
        }));
        return `{\n${properties.join(`,\n`)}\n}`;
    } else {
        return typeof obj;
    }
}

function quoteIfNeeded(value: string): string {
    return /^[a-zA-Z_]\w*$/.test(value) ? value : `"${value}"`;
}

function shouldUseType(value: any): boolean {
    return (typeof value === "object" && Object.keys(value).length === 0) || (Array.isArray(value));
}

function saveInterfaces(interfaces: string, output: string) {
    try {
        writeFileSync(output, interfaces);
        console.log(`Interfaces saved to: `, resolve(process.cwd(), output));
    } catch (error) {
        console.error(`Error saving interfaces to file: `, error);
    }
}
