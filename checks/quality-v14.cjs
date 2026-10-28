const fs=require('fs'),vm=require('vm'),assert=require('assert');
const nodes={'#app':{innerHTML:''},'#modalbody':{innerHTML:''},'#modal':{open:false,showModal(){this.open=true}}};
const ctx={document:{querySelector:q=>nodes[q]||null},window:{scrollTo(){}},localStorage:{getItem:()=>null,setItem(){}},setTimeout};vm.createContext(ctx);
for(const name of ['data','engine','editorial','resources','hints','app','quality'])vm.runInContext(fs.readFileSync('dist/'+name+'.js','utf8'),ctx);
vm.runInContext('this.api={Game,LIVE_INCIDENTS,HIDDEN_EVENTS,concertSummary};',ctx);
const {Game:G,LIVE_INCIDENTS:E,HIDDEN_EVENTS:H,concertSummary}=ctx.api;
assert.equal(Object.keys(E).length,9);
for(const key of Object.keys(E)){let s=G.fresh('검증',1);s.phase='incident';s.incident=key;s.energy=[0,0,0,0];s.elapsed=s.limit;assert(E[key].options.some(o=>G.incidentPossible(s,o)),key+' safe fallback');}
for(const [variant,base]of Object.entries({confetti:'mic',lightstick:'vcr',encoredance:'dancecue',camera:'ears'})){E[variant].options.forEach((o,i)=>{for(const k of ['energy','sat','audience','minutes'])assert.deepEqual(o[k],E[base].options[i][k]);assert.notEqual(o.result,E[base].options[i].result)})}
const seen=new Set;for(let seed=0;seed<300;seed++){let s=G.fresh('검증',seed);s.phase='live';s.cursor=2;s.queue=Array(12).fill({kind:'track',id:'new-again'});G.triggerIncident(s);seen.add(s.incident);s.phase='live';s.incident=null;s.cursor=5;s.queue[4]={kind:'challenge'};G.triggerIncident(s);seen.add(s.incident)}assert.equal(seen.size,8);
vm.runInContext("S=Game.fresh('검증',1);act('choose','concept',0)",ctx);assert(nodes['#app'].innerHTML.includes('방금의 선택'));assert(!nodes['#app'].innerHTML.includes('게임 속 반응'));assert(nodes['#app'].innerHTML.includes('progressbar'));
vm.runInContext("foundEvents=[];readMemory('map')",ctx);assert(!nodes['#modalbody'].innerHTML.includes(H.map.story));
vm.runInContext("foundEvents=['map'];readMemory('map')",ctx);assert(nodes['#modalbody'].innerHTML.includes(H.map.story));
vm.runInContext("collection=['good'];album()",ctx);assert(nodes['#modalbody'].innerHTML.includes('엔딩 1/8'));assert(nodes['#modalbody'].innerHTML.includes('다음에 또, 이 섬에서'));
for(const key of Object.keys(G.ENDINGS)){ctx.key=key;vm.runInContext("S=Game.fresh('<script>test</script>',1);Game.finish(S,key);render();openConcertNote()",ctx);assert(nodes['#app'].innerHTML.includes('다음 공연의 나에게'));assert(nodes['#modalbody'].innerHTML.includes('공연 일지 .txt 저장'));assert(!nodes['#modalbody'].innerHTML.includes('<script>test</script>'))}
console.log('PASS: nine incidents, all safe fallbacks, balanced variants, all variants reachable, choice feedback, masked/unlocked memory replay, collection counts, eight result notes and escaping');
