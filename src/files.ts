import { FileSystemTree } from "@webcontainer/api";

export const files: FileSystemTree = {
  'package.json': {
    file: {
      contents: `
{
  "name": "terre",
  "type": "commonjs",
  "dependencies": {
    "extract-zip": "^2.0.1"
  },
  "scripts": {
    "start": "curl -o terre.zip https://gh-proxy.com/https://github.com/nini22P/WebGAL_Terre/releases/download/demo/webgal-terre-demo.zip && npx extract-zip terre.zip && rm -rf terre.zip && node main.js"
  }
}`,
    },
  },
};
