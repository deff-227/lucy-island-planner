// Preserve normalized gameplay values; convert all player-facing resources together.
// Remaining-balance differences avoid cumulative rounding and off-by-one charges.
const RESOURCE_UNITS = Object.freeze({budget:{base:110,total:2021},time:{base:125,total:508}});
function resourceAmount(key,value){const u=RESOURCE_UNITS[key];return Math.round(value*u.total/u.base)}
function resourceCost(key,cost,state){const current=state?.[key]??RESOURCE_UNITS[key].base;return resourceAmount(key,current)-resourceAmount(key,current-cost)}
function resourceText(text,state){return String(text).replace(/(예산|(?:준비 )?시간) ([−-])(\d+)(?![\d]|분)/g,(_,label,sign,n)=>{const key=label==='예산'?'budget':'time';return `${key==='time'?'준비 시간':label} −${resourceCost(key,Number(n),state)}`})}
