import fs from 'fs';

export interface AbiInput {
  name: string;
  type: string;
}

export interface AbiFunction {
  type: 'function' | 'constructor';
  name?: string;
  index?: number;
  params: AbiInput[];
}

export interface Artifact {
  version: number;
  compilerVersion: string;
  contract: string;
  abi: AbiFunction[];
  asm: string;
  hex?: string;
}

export function importArtifact(artifactFile: string): Artifact {
  return JSON.parse(fs.readFileSync(artifactFile, { encoding: 'utf-8' }));
}

export function exportArtifact(artifact: Artifact, targetFile: string): void {
  const jsonString = JSON.stringify(artifact, null, 2);
  fs.writeFileSync(targetFile, jsonString);
}
