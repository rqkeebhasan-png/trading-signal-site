(()=>{
const COINS=['BTCUSDT','ETHUSDT','BNBUSDT','SOLUSDT','XRPUSDT','ADAUSDT','DOGEUSDT','AVAXUSDT','LINKUSDT','DOTUSDT','LTCUSDT','TRXUSDT'];
let run=false;
const ot=window.tBT,nt=function(){ot.apply(this,arguments);const o=document.getElementById('bo');if(o)o.insertAdjacentHTML('beforebegin',`<div class='card'><b>Prove the rules</b><div class='mu' style='margin:6px 0 10px'>Replays Setups A, B and C on 12 big coins (about 3000 candles each), then checks the newest 30% of time separately. Uses the timeframe chosen above. Takes about a minute.</div><button class='cta' data-all='1'>Test all 12 coins</button></div>`)};
window.tBT=nt;TABS.find(x=>x[0]==='bt')[2]=nt;
async function runAll(){if(run)return;run=true;const sel=document.getElementById('bt'),tf=sel?sel.value:'1h',htf=tf==='1d'?'1w':'1d',o=document.getElementById('bo');let all=[];const rows=[];
 try{for(let i=0;i<COINS.length;i++){const sym=COINS[i];o.innerHTML=`<div class='card'>Testing ${sym.replace('USDT','')} (${i+1} of ${COINS.length})… please keep this page open.</div>`;await new Promise(r=>setTimeout(r,30));
 try{const[c,h]=await Promise.all([hist(sym,tf,3000),hist(sym,htf,1000)]),tr=runBT(closedC(c,tf),closedC(h,htf),tf,htf);tr.forEach(x=>x.sym=sym);all=all.concat(tr);rows.push([sym,stats(tr)])}catch(e){rows.push([sym,null])}}
 all.sort((a,b)=>a.t-b.t);const A=stats(all);
 if(!all.length){o.innerHTML=`<div class='card warn'>No trades were produced (or data failed to load). The rules found nothing to test on this timeframe.</div>`;return}
 const cut=all[0].t+(all[all.length-1].t-all[0].t)*.7,I=stats(all.filter(x=>x.t<=cut)),O=stats(all.filter(x=>x.t>cut)),W=all.filter(x=>x.R>0),aw=W.reduce((s,x)=>s+x.R,0)/(W.length||1),be=1/(1+aw),bs={};
 all.forEach(x=>{const k=x.setup[0];(bs[k]=bs[k]||[]).push(x)});
 let v,w=true;
 if(A.n<100)v='Not enough trades ('+A.n+') to judge. At least 100 are needed before the numbers mean anything. Try the 1h timeframe, which produces more trades.';
 else if(A.ex<=0)v='No edge found: the average trade loses money after fees. Do not trade these rules with real money as they are.';
 else if(O.n<20||O.ex<=0)v='Profitable on the older data but not on the newest 30%. That usually means the rules only fit the past, or the market changed. Not proven.';
 else{v='Positive on both the older data and the newest 30%. Promising, but still not proof: keep paper trading for several weeks before any real money.';w=false}
 o.innerHTML=`<div class='card ${w?'warn':''}'><b>Verdict</b><div style='margin-top:6px'>${v}</div></div><div class='card'><table><tr><th></th><th>Trades</th><th>Win</th><th>Expectancy</th><th>Max DD</th><th>Return</th></tr>${sRow('All 12 coins',A)}${sRow('Older 70%',I)}${sRow('Newest 30%',O)}</table><div class='mu' style='margin-top:8px'>Average winning trade ${aw.toFixed(2)}R, so you need to win about ${(be*100).toFixed(0)}% of trades just to break even (before fees). Expectancy is average R per trade after ${cfg.fee}% fee per side.</div></div><div class='card'><b>By setup</b> <span class='mu'>(A discount entry, B triple tap, C range deviation)</span><table><tr><th></th><th>Trades</th><th>Win</th><th>Expectancy</th><th>Max DD</th><th>Return</th></tr>${Object.keys(bs).sort().map(k=>sRow('Setup '+k,stats(bs[k]))).join('')}</table><div class='mu' style='margin-top:8px'>A setup with fewer than 30 trades is not enough to judge.</div></div><div class='card'><b>Per coin</b><table><tr><th>Coin</th><th>Trades</th><th>Win</th><th>Expectancy</th></tr>${rows.map(([s,x])=>x?`<tr><td>${s.replace('USDT','')}</td><td>${x.n}</td><td>${(x.wr*100).toFixed(0)}%</td><td class='${x.ex>0?'g':'r'}'>${x.ex.toFixed(2)}R</td></tr>`:`<tr><td>${s.replace('USDT','')}</td><td colspan='3' class='mu'>data failed</td></tr>`).join('')}</table></div><div class='mu'>Caveats: these 12 coins move together, so 12 coins is not 12 independent tests. Coins are today's big names, which flatters the past. Real fills can be worse than candle-based fills.</div>`}
 catch(e){o.innerHTML=`<div class='card warn'>${e.message}</div>`}finally{run=false}}
document.addEventListener('click',e=>{if(e.target.closest('[data-all]'))runAll()});
})();
