import fs from 'node:fs';
import vm from 'node:vm';
const source=fs.readFileSync(new URL('../js/data.js',import.meta.url),'utf8');
const data=vm.runInNewContext(source+'\n({cases,details,sections})');
process.stdout.write(JSON.stringify(data));
