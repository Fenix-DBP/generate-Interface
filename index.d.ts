// Adicione definições de tipo para o módulo 'commander'
declare module 'commander' {
    export interface Command {
      option(flags: string, description?: string, fn?: Function | RegExp, defaultValue?: any): Command;
      parse(argv?: string[]): void;
    }
  }
  
  // Adicione definições de tipo para o módulo 'fs-extra'
  declare module 'fs-extra' {
    export function readFileSync(file: string, options?: { encoding?: string; flag?: string }): string;
    export function writeFileSync(file: string, data: any, options?: { encoding?: string; flag?: string }): void;
    // Adicione outras definições de tipo conforme necessário
  }
  
  // Adicione definições de tipo para o seu script 'index.ts'
  declare module './index' {
    export function generateInterfaceCode(jsonObject: any, interfaceName: string): string;
    export function generateType(value: any): string;
    export function saveInterfacesToFile(interfacesContent: string, outputFile: string): void;
    export function generateInterfaces(): void;
  }
  
  // Adicione definições de tipo globais conforme necessário
  declare const process: {
    argv: string[];
  };
  
  declare const console: {
    error(...data: any[]): void;
    log(...data: any[]): void;
  };
  