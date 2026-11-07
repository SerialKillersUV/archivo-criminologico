import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
const root=new URL('../',import.meta.url);
const read=name=>fs.readFileSync(new URL(name,root),'utf8');
const d=vm.runInNewContext(read('js/data.js')+'\n'+read('js/questions.js')+'\n({cases,sections,details,sourceDocument,questions})');
const text=d.cases.map(c=>d.sections.map(([key])=>d.details[c.id][key].join(' ')).join(' ')).join(' ').replace(/\s+/g,' ').trim();
assert.equal(crypto.createHash('sha256').update(text).digest('hex'),d.sourceDocument.bodySha256,'El cuerpo de los casos ha cambiado respecto del documento transcrito.');
for(const c of d.cases)for(const extract of Object.values(d.details[c.id].comparison))assert(d.sections.some(([key])=>d.details[c.id][key].includes(extract)));
assert.equal(d.questions.length,25);
for(const q of d.questions){assert(d.details[q.caseId][q.section].includes(q.explanation));assert.equal(q.options.length,3);for(const option of q.options)assert(text.toLowerCase().includes(option.toLowerCase()));}
console.log('PASS: texto documental íntegro, comparativa literal y 25 preguntas respaldadas.');
