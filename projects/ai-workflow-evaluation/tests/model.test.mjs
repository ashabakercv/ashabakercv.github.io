import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import * as M from '../src/model.mjs';
const data=JSON.parse(readFileSync(new URL('../data/fixtures.json',import.meta.url),'utf8'));
test('unsupported approval is caught',()=>{const r=M.evaluate(data[1],data[1].v1);assert.equal(r.pass,false);assert.ok(r.unsupported.includes('launch approved'));});test('missing source fact is caught',()=>assert.ok(M.evaluate(data[0],data[0].v1).missing.includes('duplicate')));test('structured fixtures exercise passing paths',()=>assert.equal(M.summarize(data,'v2').passed,data.length));test('initial fixtures exercise failing paths',()=>assert.equal(M.summarize(data,'v1').passed,0));test('paraphrase limitation remains visible in method',()=>assert.equal(M.evaluate({required:['pending'],forbidden:[]},'awaiting approval').pass,false));
