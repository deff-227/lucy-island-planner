/* Member opinions are fictional, once per member/run, and never execute a choice. */
const MemberHints=(()=>{
const allowed=new Set(['choose','basic','select','personal','domino','meeting','event','special','practice','hiddenChoice','rehearse','noRehearsal','correct','begin']);
function parse(action){let m=action.match(/^act\('([A-Za-z]+)'(?:,(.*))?\)$/);if(m&&allowed.has(m[1])){const parts=m[2]?m[2].match(/'[^']*'|-?\d+/g)||[]:[];return {fn:m[1],args:parts.map(x=>x[0]==="'"?x.slice(1,-1):Number(x))}}m=action.match(/^confirmChallenge\((\d)\)$/);return m?{fn:'challenge',args:[Number(m[1])]}:null}
const reasons=[
 {base:'나는 무대에 남을 장면을 먼저 보고 골랐어.',song:'이 곡은 내 파트의 선율과 무대 장면을 살리기 좋아.',rehearsal:'보여주고 싶은 장면도 합이 맞아야 살아나. 이 연습부터 하자.'},
 {base:'나는 관객과 주고받을 순간이 있는 쪽이 좋아.',song:'내 파트와 객석의 호흡을 생각하면 이 곡을 하고 싶어.',rehearsal:'끝까지 노래하고 관객을 보려면 호흡부터 맞추자.'},
 {base:'나는 곡과 곡이 이어지는 소리를 먼저 챙기고 싶어.',song:'내 파트의 역할과 곡의 흐름을 보면 이 곡이 끌려.',rehearsal:'곡의 연결과 합주를 단단하게 만들자.'},
 {base:'나는 끝까지 안정적으로 연주할 준비가 되는 쪽을 골랐어.',song:'지금 준비도에서 내 파트를 감당하기 좋은 곡을 골랐어.',rehearsal:'미점검 항목과 합주 준비도를 보고 이 연습을 골랐어.'}
];
function rank(s,who,options){const f=Game.step(s);return options.map((o,index)=>{
 let score=0,reason=reasons[who].base;const p=parse(o.action||'');
 if(o.id){if(s.time<8||s.budget<3)return {...o,score:-Infinity,index};const t=track(o.id);score=t?([t.diff[0]*1.4,t.diff[1]*1.4,t.diff[2]*1.4,12-t.diff[3]][who]):0;reason=reasons[who].song}
 else if(p){const c=JSON.parse(JSON.stringify(s));let ok=false;
 if(p.fn==='challenge'){ok=Game.challenge(c,CHALLENGES.slice(0,4).map(x=>x.id),p.args[0]);score=[7,9,0,3][p.args[0]]+(who===1&&p.args[0]===0?5:0)}
 else ok=Game[p.fn](c,...p.args);
 if(!ok)return {...o,score:-Infinity,index};
 score+=(c.sat[who]-s.sat[who])*4+(c.ready[who]-s.ready[who])*(who===3?1.8:.65)+(c.cohesion-s.cohesion)*.25;
 const expense=(s.time-c.time)*(s.time<25?1.8:.08)+(s.budget-c.budget)*(s.budget<15?1.5:.04);score-=expense;
 if(['select','personal'].includes(p.fn)){const t=Game.itemTrack({kind:'track',id:p.args[0]},c);score+=who===3?15-t.diff[3]-.8*t.cost[3]:t.diff[who]*1.3+(t.soloMember===who?5:0);score-=Math.max(0,t.diff[who]*4+8-s.ready[who])*.3;reason=reasons[who].song;}
 if(f.type==='decision'&&f.key==='concept'&&p.fn==='choose'){score+=[[0,9,15,5],[16,0,3,6],[0,5,8,16],[0,16,8,2]][who][p.args[1]];reason=[['떼창의 순간을 하나의 장면으로 묶고 싶어.','목소리에 빛을 모으는 장면이 좋아.','첫 섬의 장면을 지금의 우리로 다시 보여주자.','악기마다 주인공이 되는 장면을 만들자.'],['객석이 같이 노래하고 뛰는 공연을 하고 싶어.','가까이서 목소리와 호흡을 들려주자.','팬들이 기억하는 장면을 같이 꺼내보자.','새 편곡에 맞춰 움직이는 무대가 재미있겠어.'],['곡 사이를 떼창으로 이어보자.','반주를 덜어내고 소리를 자세히 들려주자.','처음과 끝이 같은 선율로 이어지면 좋겠어.','익숙한 곡도 새 연결과 악기 솔로로 바꿔보자.'],['뛰는 구간 사이에 숨 돌릴 자리는 꼭 남기자.','편곡과 전환을 차분히 정리하면서 합을 맞추고 싶어.','이미 익숙한 장면을 다시 맞추는 쪽이 좋아.','새로운 연결은 전환 Cue부터 확실하게 맞추자.']][who][p.args[1]];}
 if(f.type==='rehearsal'){reason=reasons[who].rehearsal;const pending=s.unresolved.filter(x=>!s.fixed.includes(x));if(p.fn==='rehearse'&&p.args[0]===2&&who===3)score+=pending.filter(x=>x!=='신곡 합주').length*16;if(p.fn==='rehearse'&&p.args[0]===0&&pending.includes('신곡 합주'))score+=8;}
 if(p.fn==='basic'||p.fn==='noRehearsal')score-=14;
 if(p.fn==='begin'&&Game.problems(s).some(x=>x.level==='critical'))score-=80;
 }
 if(s.time<25)reason+=' 남은 준비 시간도 함께 봤어.';
 return {...o,score,reason,index};
 }).filter(x=>Number.isFinite(x.score)).sort((a,b)=>b.score-a.score||a.index-b.index)[0]||null}
function request(s,who,options){if(s.phase!=='prep'||!Number.isInteger(who)||who<0||who>3)return null;s.hints??=[null,null,null,null];if(s.hints[who])return null;const r=rank(s,who,options);if(!r)return null;return s.hints[who]={...r,who,step:s.step}}
return {parse,rank,request};})();
function memberHintOptions(){const root=document.querySelector('.workspace');if(!root||!S||S.phase!=='prep')return [];
 if(Game.step(S).type==='release'&&(S.time<8||S.budget<3))return [];
 if(Game.step(S).type==='release')return [...root.querySelectorAll('input[name="newtracks"]')].map(el=>({id:el.value,action:'release:'+el.value,title:el.closest('label').querySelector('b').textContent}));
 return [...root.querySelectorAll('button[onclick]')].filter(el=>!el.disabled&&MemberHints.parse(el.getAttribute('onclick'))).filter(el=>!(Game.step(S).type==='song'&&el.getAttribute('onclick').startsWith("act('domino'"))).map(el=>({action:el.getAttribute('onclick'),title:(el.querySelector('h3,b')?.textContent||el.textContent).trim().split('↗')[0].trim()}));
}
function attachMemberHints(){if(!S||S.phase!=='prep')return;const root=document.querySelector('.workspace');if(!root)return;S.hints??=[null,null,null,null];root.querySelector('.memberhintbar')?.remove();const opts=memberHintOptions();const bar=document.createElement('section');bar.className='memberhintbar';bar.setAttribute('aria-label','멤버 추천');bar.innerHTML=`<div class="hintcontrols"><b>Hint!</b>${MEMBERS.map((m,i)=>`<button onclick="askMemberHint(${i})" ${S.hints[i]||!opts.length?'disabled':''} aria-label="${m.short} 추천 ${S.hints[i]?'사용 완료':'1회 남음'}">${m.short}<small>${S.hints[i]?'✓':'1'}</small></button>`).join('')}<span>멤버별 1회</span></div><div class="hintmessages" aria-live="polite"></div>`;root.prepend(bar);paintMemberHints()}
function paintMemberHints(){const root=document.querySelector('.workspace');if(!root)return;root.querySelectorAll('.member-hint-tag').forEach(el=>el.remove());root.querySelectorAll('.member-recommended').forEach(el=>el.classList.remove('member-recommended'));const box=root.querySelector('.hintmessages');if(!box)return;const active=(S.hints||[]).filter(h=>h&&h.step===S.step);box.innerHTML=active.map(h=>`<p><b>${MEMBERS[h.who].short}의 추천 · ${esc(h.title)}</b><span>${esc(h.reason)}</span></p>`).join('')+(active.length?'<small>게임 속 멤버의 취향을 반영한 추천 · 최종 선택은 기획자의 몫</small>':'');for(const h of active){let target=h.id?[...root.querySelectorAll('input[name="newtracks"]')].find(el=>el.value===h.id)?.closest('label'):[...root.querySelectorAll('button[onclick]')].find(el=>el.getAttribute('onclick')===h.action);if(!target)continue;target=target.closest('.songcard')||target;target.classList.add('member-recommended');const badge=document.createElement('span');badge.className='member-hint-tag';badge.textContent=MEMBERS[h.who].short+' 추천';target.append(badge)}}
function askMemberHint(who){if(!S)return;const r=MemberHints.request(S,who,memberHintOptions());if(r)attachMemberHints()}
