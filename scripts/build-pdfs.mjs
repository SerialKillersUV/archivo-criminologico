import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {spawnSync} from 'node:child_process';
const root=path.resolve(import.meta.dirname,'..');
const source=fs.readFileSync(path.join(root,'js/data.js'),'utf8');
const data=vm.runInNewContext(source+'\n({cases,details,sections})');
const result=spawnSync(process.env.ARCHIVO_PYTHON_BIN||'python',[path.join(root,'scripts/build-pdfs.py')],{input:JSON.stringify(data),encoding:'utf8',maxBuffer:20*1024*1024});
if(result.error)throw result.error;
if(result.status!==0)throw new Error(result.stderr);
const documents=JSON.parse(result.stdout),target=path.join(root,'assets/pdf');
fs.mkdirSync(target,{recursive:true});
for(const doc of documents){
 if(!/^expediente-[a-z]+\.pdf$/.test(doc.file))throw new Error('Nombre de archivo inesperado');
 const bytes=Buffer.from(doc.base64,'base64');
 fs.writeFileSync(path.join(target,doc.file),bytes);
 console.log(`${doc.file}: ${bytes.length} bytes`);
}
