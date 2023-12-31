const fs = require('fs-extra');
const program = require('commander');

program
  .option('-p, --path <filePath>', 'Path to the JSON file')
  .option('-o, --output [outputFile]', 'Path to the output TypeScript file (default: outputInterfaces.ts)')
  .option('-n, --name [interfaceName]', 'Name of the root TypeScript interface (default: GeneratedInterface)')
  .parse(process.argv);

function generateInterfaceCode(jsonObject, interfaceName) {
  const interfaceProperties = Object.entries(jsonObject).map(([key, value]) => {
    const propertyType = generateType(value);
    return `  ${key}: ${propertyType};`;
  });

  return `interface ${interfaceName} {
${interfaceProperties.join('\n')}
}`;
}

function generateType(value) {
  if (typeof value === 'object') {
    if (Array.isArray(value)) {
      const arrayType = generateType(value[0]);
      return `${arrayType}[]`;
    } else {
      return generateInterfaceCode(value, 'InnerType');
    }
  } else {
    return typeof value;
  }
}

function saveInterfacesToFile(interfacesContent, outputFile) {
  try {
    fs.writeFileSync(outputFile, interfacesContent);
    console.log(`Interfaces saved to ${outputFile}`);
  } catch (error) {
    console.error(`Error saving interfaces to file: ${error}`);
  }
}

function generateInterfaces() {
  const { path, name, output } = program._optionValues;

  if (!path) {
    console.error('Error: Path to the JSON file is required. Use -p or --path option.');
    program.help(); // Display help message
    process.exit(1); // Exit with error code
  }

  try {
    const jsonString = fs.readFileSync(path, 'utf8');
    const jsonObject = JSON.parse(jsonString);

    const rootInterfaceName = name || 'GeneratedInterface';
    const outputFile = output || 'outputInterfaces.ts';

    const interfaceCode = generateInterfaceCode(jsonObject, rootInterfaceName);
    saveInterfacesToFile(interfaceCode, outputFile);
  } catch (error) {
    console.error(`Error reading or parsing the JSON file: ${error}`);
  }
}

generateInterfaces();
