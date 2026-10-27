const fs=require('fs'),vm=require('vm'),assert=require('assert');const c={};vm.createContext(c);for(const n of ['data','engine','editorial','hints'])vm.runInContext(fs.readFileSync('dist/'+n+'.js','utf8'),c);const run=x=>vm.runInContext(x,c);
run(`this.s=Game.fresh('hint',7);this.options=DECISIONS.concept.options.map((o,i)=>({action:"act('choose','concept',"+i+")",title:EDITORIAL.concept.options[i][0]}))`);
const before=run('JSON.stringify(s)');const choices=[];
for(let i=0;i<4;i++){const r=run(`MemberHints.request(s,${i},options)`);assert(r);choices.push(r.title);assert.equal(run(`MemberHints.request(s,${i},options)`),null)}
assert.equal(new Set(choices).size,4);const after=JSON.parse(run('JSON.stringify(s)')),base=JSON.parse(before);after.hints=base.hints;assert.deepEqual(after,base);
assert(run('Game.choose(s,"concept",0)'));assert.equal(run('s.hints.filter(h=>h.step===s.step).length'),0);assert.equal(run('MemberHints.request(s,0,options)'),null);
run(`this.low=Game.fresh('low',1);low.time=0;low.budget=0;this.fallback=[...options,{action:"act('basic')",title:'기본 구성'}]`);assert.equal(run('MemberHints.request(low,3,fallback).action'),"act('basic')");
run(`this.empty=Game.fresh('empty',1)`);assert.equal(run('MemberHints.request(empty,0,[])'),null);assert.equal(run('empty.hints[0]'),null);assert.equal(run('MemberHints.request(empty,4,options)'),null);run("empty.phase='live'");assert.equal(run('MemberHints.request(empty,0,options)'),null);
for(const k of ['costume','arrange','session','stage','solo','letter']){run(`this.state=Game.fresh('qa',1);state.step=FLOW.findIndex(x=>x.type==='decision'&&x.key==='${k}');this.opts=DECISIONS['${k}'].options.map((o,i)=>({action:"act('choose','${k}',"+i+")",title:o[0]}))`);for(let i=0;i<4;i++)assert(run(`MemberHints.request(state,${i},opts)`));}
assert(!fs.readFileSync('dist/app.js','utf8').includes('예상'));assert(!fs.readFileSync('dist/data.js','utf8').includes('예상'));
console.log('PASS: 4 distinct concept preferences, once per member, no gameplay mutation, stale-step clearing, unaffordable exclusion, no-option nonconsumption, all production decisions');console.log(choices);
