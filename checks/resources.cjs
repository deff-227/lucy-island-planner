const fs=require('fs'),vm=require('vm'),assert=require('assert');
const ctx={localStorage:{getItem:()=>null},document:{querySelector:()=>({innerHTML:''})}};vm.createContext(ctx);
for(const name of ['data','engine','editorial','resources','hints','app'])vm.runInContext(fs.readFileSync(`dist/${name}.js`,'utf8'),ctx);
const run=s=>vm.runInContext(s,ctx);
assert.equal(run('resourceAmount("budget",110)'),2021);assert.equal(run('resourceAmount("time",125)'),508);
for(const [key,base] of [['budget',110],['time',125]])for(let remaining=0;remaining<=base;remaining++)for(let cost=0;cost<=16;cost++){
const a=run(`resourceAmount('${key}',${remaining})`),b=run(`resourceAmount('${key}',${remaining-cost})`),c=run(`resourceCost('${key}',${cost},{${key}:${remaining}})`);
assert.equal(a-c,b);assert.equal(a>=c,remaining>=cost);
}
run('S=Game.fresh("QA",1)');assert(run('status()').includes('2,021'));assert(run('status()').includes('508'));
assert.equal(run('resourceText("공연 +3분 · 체력 −8 · 시간 −10",S)'),'공연 +3분 · 체력 −8 · 준비 시간 −41');
assert.equal(run('resourceText("시간 −3분",S)'),'시간 −3분');
assert(run('prep()').includes('예산 −37'));assert(run('prep()').includes('준비 시간 −12'));
run('Game.choose(S,"concept",0)');assert.equal(run('resourceAmount("budget",S.budget)'),1984);assert.equal(run('resourceAmount("time",S.time)'),496);
assert(run('releaseView()').includes('2곡 선택 시 총 예산 −'));assert(!run('reviewView()').includes('시간 −6 /'));
console.log('PASS: resource totals, all affordable/unaffordable integer boundaries, exact displayed deductions, UI costs, minutes and stamina unchanged');
