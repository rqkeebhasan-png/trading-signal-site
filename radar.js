(()=>{
const css=`
:root{--bg:#0a0a0a;--cd:#141414;--bd:#2b2b2b;--tx:#f2efe9;--mu:#8e8e8e;--g:#2fce8c;--r:#ff4d4d;--y:#f5c542;--ac:#f5a623}
body{background:radial-gradient(900px 520px at 0% 0%,rgba(130,20,20,.3),transparent 60%),#0a0a0a;font-family:Inter,system-ui,sans-serif;padding-bottom:30px}
#hdr,#bnav,.ft,#nav{display:none!important}
main{max-width:1240px;padding:8px 22px 30px}
.sy,.pr,.hd h2,.wo h3,.stv{font-family:'Source Serif 4',Georgia,serif}
#rh{max-width:1240px;margin:auto;padding:18px 22px 6px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px}
.lg{display:flex;align-items:center;gap:12px;flex-wrap:wrap}.lgb{width:58px;height:58px;border-radius:12px;background:#150a0a;border:1px solid #3a1818;display:grid;place-items:center}
.lgt b{font:700 22px 'Source Serif 4',serif;letter-spacing:.06em;display:block}.lgt small{letter-spacing:.2em;color:#8e8e8e;font-size:12px}
.pill{display:inline-flex;align-items:center;gap:8px;border:1px solid #333;border-radius:999px;padding:8px 14px;font-size:12px;letter-spacing:.08em;text-transform:uppercase}
.dot{display:inline-block;width:10px;height:10px;border-radius:50%;background:#2fce8c;box-shadow:0 0 0 3px rgba(47,206,140,.25)}.dot.off{background:#ff4d4d;box-shadow:0 0 0 3px rgba(255,77,77,.25)}
.tgp{display:flex;gap:2px;background:#131313;border:1px solid #232323;border-radius:14px;padding:5px;overflow-x:auto;max-width:100%}
.tb{background:none;border:1px solid transparent;color:#aaa;padding:9px 15px;border-radius:10px;min-height:0;margin:0;white-space:nowrap}.tb.on{background:#3a1010;border-color:#6b2222;color:#fff}
.st5{display:grid;grid-template-columns:repeat(5,1fr);border:1px solid var(--bd);border-radius:16px;overflow:hidden;background:#0e0e0e;margin:14px 0}
.st5>div{padding:20px 22px;border-right:1px solid #1d1d1d}.st5 small{display:block;color:#8e8e8e;letter-spacing:.14em;font-size:11px;text-transform:uppercase;margin-bottom:12px}
.stv{font-size:22px;font-weight:700}.stv i{font:600 12px Inter;margin-left:6px}
.ses{border:1px solid var(--bd);border-radius:16px;background:#0e0e0e;padding:16px 18px;margin:14px 0}
.ck{font:600 22px 'Source Serif 4',serif}.ck small{color:#8e8e8e;font-size:14px}.ck em{font:700 12px Inter;color:#f5c542;margin-left:10px;letter-spacing:.1em;font-style:normal}
.br{position:relative;height:24px;background:#161616;border-radius:6px;margin:14px 0 10px;overflow:hidden}
.sg{position:absolute;top:0;bottom:0;border:1px solid;border-radius:5px;display:grid;place-items:center;font-size:10px;letter-spacing:.14em;text-transform:uppercase;font-weight:700;opacity:.9}.sg span{white-space:nowrap}
.sg.ny{background:#2b2250;border-color:#4a3d8f;color:#c9bff5}.sg.as{background:#10253f;border-color:#2d5a96;color:#a8c8f0}.sg.lo{background:#0e3b36;border-color:#2a8a74;color:#a6e6d4}.sg.pk{background:#5e4700;border-color:#f5c542;color:#f5c542}
#mk{position:absolute;top:0;bottom:0;width:2px;background:#fff;z-index:3}
.hd{margin:34px 0 4px;display:flex;align-items:baseline;gap:14px;flex-wrap:wrap}.hd h2{margin:0;font-size:22px;font-weight:700}.hd span{color:#8e8e8e;font-size:14px}
.sub{color:#8e8e8e;font-size:14px;margin:6px 0 14px}
.wo{border:1px dashed #5a4410;background:rgba(245,166,35,.04);border-radius:14px;padding:30px 20px;text-align:center;margin-top:12px}.wo h3{margin:0 0 10px;color:#f5c542;font-size:20px}.wo p{color:#a8a8a8;max-width:560px;margin:0 auto 18px}
.cta{background:linear-gradient(90deg,#ff2d2d,#c01818);border:0;border-radius:10px;color:#fff;padding:14px 32px;font-weight:700;min-height:0}
.gr{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px}
.cn{background:linear-gradient(180deg,#181818,#101010);border:1.5px solid #f5a623;border-radius:16px;padding:16px;box-shadow:0 0 20px rgba(245,166,35,.07)}.cn.Quiet{border-color:#3a3a3a;box-shadow:none}.cn.High{border-color:#f5c542}
.ch{display:flex;justify-content:space-between;align-items:flex-start}.sy{font-size:20px;font-weight:700}.sy small{font:400 13px Inter;color:#888;margin-left:2px}.pr{font-size:27px;font-weight:700;margin:8px 0 4px}
.rg{position:relative;width:62px;height:62px;flex:none}.rg svg{width:62px;height:62px}.rg span{position:absolute;inset:0;display:grid;place-items:center;font:700 11px 'Source Serif 4',serif}
.tg{display:flex;flex-wrap:wrap;gap:6px;margin:12px 0}.tg span{background:#262626;border-radius:8px;padding:4px 9px;font-size:12px;color:#c8c8c8}.tg span.hot{background:#3a2e08;color:#f5c542}
.ob{width:100%;background:#262626;border:1px solid #333;border-radius:10px;min-height:46px;color:#fff;font-weight:600;margin:4px 0 0}
.nt{color:#9a9a9a;font-size:13px;margin:0 0 8px}
.fo{border-top:1px solid #1f1f1f;margin-top:40px;padding:16px 0;color:#8e8e8e;font-size:13px}
#mdl{position:fixed;inset:0;background:rgba(0,0,0,.78);z-index:50;overflow:auto;padding:14px}.mp{max-width:560px;margin:0 auto;background:#0f0f0f;border:1px solid #333;border-radius:16px;padding:16px}
.card{background:#141414;border-color:#2b2b2b;border-radius:14px}
button{border-radius:10px}button.on{background:#3a1010;border-color:#6b2222}button[onclick^=doBT],button[onclick^=saveSet]{background:#c01818;border-color:#c01818}
@media(max-width:760px){.st5{grid-template-columns:repeat(2,1fr)}.st5>div{padding:14px}main,#rh{padding-left:14px;padding-right:14px}.tgp{width:100%}}
`;
const f=document.createElement('link');f.rel='stylesheet';f.href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:wght@600;700&display=swap';document.head.appendChild(f);
const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
const STABLE=new Set(['USDC','FDUSD','TUSD','USDP','DAI','BUSD','EUR','EURI','USD1','AEUR','XUSD','USDE','PYUSD','GBP','TRY','BRL','UST','RLUSD']);
let RES={},LIST=[],TK={},RADY=0,OK=null,busy=null;
const pad=n=>String(n).padStart(2,'0'),mean=a=>a.reduce((x,y)=>x+y,0)/(a.length||1);
const pf=n=>n>=100?n.toFixed(2):n>=1?n.toFixed(3):n>=0.01?n.toFixed(5):n.toFixed(8);
const dh=()=>{const x=new Date(Date.now()+216e5);return{h:x.getUTCHours(),m:x.getUTCMinutes(),s:x.getUTCSeconds()}};
/* header */
const rh=document.createElement('div');rh.id='rh';
rh.innerHTML=`<div class='lg'><div class='lgb'><svg width='34' height='34' viewBox='0 0 34 34'><rect x='4' y='16' width='5' height='14' fill='#f5c542'/><rect x='14' y='8' width='5' height='22' fill='#f5a623'/><rect x='24' y='3' width='5' height='27' fill='#ff4d4d'/></svg></div><div class='lgt'><b>SIGNAL DESK</b><small>SCANNER</small></div><span class='pill'><i class='dot' id='cdot'></i><span id='ctx'>Connecting</span></span></div><div class='tgp'>${[['dash','Radar'],['bt','Backtest'],['jr','Journal'],['set','Risk Management']].map(([k,l])=>`<button class='tb' data-t='${k}'>${l}</button>`).join('')}</div>`;
document.body.insertBefore(rh,document.getElementById('v'));
const mk=t=>rh.querySelectorAll('.tb').forEach(b=>b.classList.toggle('on',b.dataset.t===t));
/* data */
async function pick(){let tk=null;for(const u of ['https://data-api.binance.vision/api/v3/ticker/24hr','https://api.binance.com/api/v3/ticker/24hr']){try{tk=await gj(u);break}catch(e){}}
 if(!tk)return{coins:ASSETS.slice(),tk:{}};const m={};tk.forEach(x=>m[x.symbol]=x);
 const L=tk.filter(x=>x.symbol.endsWith('USDT')&&!STABLE.has(x.symbol.slice(0,-4))&&+x.quoteVolume>3e6).sort((a,b)=>+b.quoteVolume-+a.quoteVolume).slice(0,24).map(x=>x.symbol);
 if(m.PAXGUSDT&&!L.includes('PAXGUSDT'))L.push('PAXGUSDT');return{coins:L,tk:m}}
function why2(a,hb,ev,s){if(!ev)return'No bullish market-structure shift in the last 40 candles (trend: '+a.tr+'). Nothing to act on yet.';if(!s)return'Structure shifted bullish, but there is no order block or FVG to enter from.';const x=s.checks.filter(c=>!c[1]).map(c=>c[0]);return x.length?'Close, but these rules fail: '+x.join('; ')+'.':'Every rule passes.'}
async function work(sym,tk){const[l,h]=await Promise.all([klines(sym,S.tf,300),klines(sym,'1d',200)]);
 const c=closedC(l,S.tf),a=analyze(c),hb=bias(analyze(closedC(h,'1d'))),n=c.length,px=l[l.length-1].c,t=tk[sym];
 const chg=t?+t.priceChangePercent:(px/(h.length>1?h[h.length-2].c:h[0].o)-1)*100,qv=t?+t.quoteVolume:h[h.length-1].v*px;
 const vr=mean(c.slice(-3).map(x=>x.v))/(mean(c.slice(-51,-3).map(x=>x.v))||1),rg=x=>(x.h-x.l)/x.c,cr=mean(c.slice(-12).map(rg))/(mean(c.slice(-60,-12).map(rg))||1);
 const tags=[[vr<1.3?'vol normal':vr<2?'vol elevated':vr<3?'vol high':'vol extreme',vr>=2],[cr<0.7?'Coiled':cr<0.9?'Tight':'Wide',cr<0.9],[hb==='bullish'?'Strong':hb==='bearish'?'Weak':'Mixed',hb==='bullish'],[qv<5e6?'Low liq':qv<5e7?'Mid liq':'High liq',false]];
 const s=setupA(a,hb,Date.now()/1000,40,true);let np=0;if(s){s.sym=sym;s.tf=S.tf;s.st=sim(a.c,s,s.i).st;np=s.checks.filter(x=>x[1]).length}
 const ev=[...a.ev].reverse().find(x=>x.d>0&&x.disp&&x.ll&&n-1-x.i<=40);
 return{sym,px,chg,qv,hb,s,ev:!!ev,tags,np,why:why2(a,hb,ev,s)}}
async function load(){if(busy)return busy;busy=(async()=>{try{const{coins,tk}=await pick();TK=tk;const q=coins.filter(x=>!excluded(x)),out=[];
 for(let i=0;i<q.length;i+=8){const p=await Promise.all(q.slice(i,i+8).map(x=>work(x,tk).catch(()=>null)));p.forEach(r=>r&&out.push(r))}
 RES={};out.forEach(r=>RES[r.sym]=r);LIST=out;S.sigs=out.filter(r=>r.s).map(r=>r.s);OK=out.length>0;RADY=OK?Date.now():0}catch(e){OK=false;RADY=0}finally{busy=null}})();return busy}
/* session bar */
const SEG=[['New York',12,9,'ny'],['Asia',0,9,'as'],['London',7,9,'lo'],['PEAK',12,4,'pk']];
const segs=()=>SEG.flatMap(([n,u,len,c])=>{const s=(u+6)%24;return s+len>24?[[n,s,24-s,c],[n,0,s+len-24,c]]:[[n,s,len,c]]}).map(([n,s,l,c])=>`<div class='sg ${c}' style='left:${s/24*100}%;width:${l/24*100}%'>${l>=3?`<span>${n}</span>`:''}</div>`).join('');
const sessHTML=()=>`<div style='display:flex;justify-content:space-between;align-items:center;gap:8px'><div class='ck'><span id='ckt'></span><em>BDT</em></div><span class='pill'><i class='dot'></i><span id='sct'></span></span></div><div class='br'>${segs()}<div id='mk'></div></div><div class='nt'>🔥 Golden zone ${pad(18)}:00–${pad(22)}:00 Dhaka time: London and New York are open together, with the highest volume and the biggest moves.</div>`;
function tick(){const t=document.getElementById('ckt');if(!t)return;const d=dh();t.innerHTML=`${pad(d.h)}:${pad(d.m)}<small>:${pad(d.s)}</small>`;document.getElementById('mk').style.left=((d.h*3600+d.m*60+d.s)/864)+'%';const u=new Date().getUTCHours(),on=[['Asia',0,9],['London',7,16],['New York',12,21]].filter(x=>u>=x[1]&&u<x[2]).map(x=>x[0]);document.getElementById('sct').textContent=on.join(' + ')||'Off-hours'}
setInterval(tick,1000);
/* paint */
const ring=(c,f)=>{const col=c==='Quiet'?'#666':c==='High'?'#f5c542':'#f59e0b',C=2*Math.PI*26;return`<div class='rg'><svg viewBox='0 0 64 64'><circle cx='32' cy='32' r='26' fill='none' stroke='#2a2a2a' stroke-width='5'/><circle cx='32' cy='32' r='26' fill='none' stroke='${col}' stroke-width='5' stroke-linecap='round' stroke-dasharray='${(C*f).toFixed(1)} ${C.toFixed(1)}' transform='rotate(-90 32 32)'/></svg><span>${c}</span></div>`};
const card=r=>`<div class='cn ${r.cls}'><div class='ch'><div><div class='sy'>${r.sym.replace('USDT','')}<small>/USDT</small></div><div class='pr'>$${pf(r.px)}</div><div class='${r.chg>=0?'g':'r'}' style='font-size:13px'>${r.chg>=0?'+':''}${r.chg.toFixed(1)}% <span class='mu'>· 24h</span></div></div>${ring(r.cls,r.f)}</div><div class='tg'>${r.tags.map(t=>`<span class='${t[1]?'hot':''}'>${t[0]}</span>`).join('')}</div>${r.note?`<div class='nt'>${r.note}</div>`:''}<button class='ob' data-s='${r.sym}'>Open briefing</button></div>`;
function strip(){const pv=s=>{const t=TK[s],r=RES[s];return t&&t.lastPrice?{p:+t.lastPrice,c:+t.priceChangePercent}:r?{p:r.px,c:r.chg}:null};
 const cell=(l,s)=>{const v=pv(s);return`<div><small>${l}</small><div class='stv ${v&&v.c<0?'r':'g'}'>${v?'$'+v.p.toLocaleString('en-US',{maximumFractionDigits:v.p>=100?0:2}):'–'}${v?`<i>${v.c>=0?'+':''}${v.c.toFixed(1)}%</i>`:''}</div></div>`};
 const all=Object.values(TK).filter(x=>x.symbol.endsWith('USDT')&&!STABLE.has(x.symbol.slice(0,-4))&&+x.quoteVolume>3e6).sort((a,b)=>+b.quoteVolume-+a.quoteVolume).slice(0,100).map(x=>+x.priceChangePercent);
 const arr=all.length?all:LIST.map(r=>r.chg),br=arr.length?Math.round(arr.filter(x=>x>0).length/arr.length*100):0,cd=br<40?['CAUTIOUS','y']:br<60?['NEUTRAL','']:['FAVOURABLE','g'];
 $('#st5').innerHTML=cell('BTC','BTCUSDT')+cell('ETH','ETHUSDT')+cell('SOL','SOLUSDT')+`<div><small>Market breadth</small><div class='stv'>${br}%<i style='color:#8e8e8e'> participating</i></div></div><div><small>Condition</small><div class='stv ${cd[1]}'>${cd[0]}</div></div>`}
function paint(){if(S.tab!=='dash'||!$('#rad'))return;const d=$('#cdot'),x=$('#ctx');if(d){d.className='dot'+(OK?'':' off');x.textContent=OK?'Updates connected':'Data offline'}
 if(!OK){$('#rad').innerHTML=`<div class='wo'><h3>Could not load market data</h3><p>All data sources failed or are blocked on this network. Try again, or switch Wi-Fi/mobile data.</p><button class='cta' data-go='dash'>Retry</button></div>`;return}
 const worth=[],bld=[],mov=[];
 for(const r of LIST){const s=r.s,ok=s&&s.ok,done=ok&&['TP hit','SL hit','Expired','Invalidated','Timeout'].includes(s.st);r.cls=ok?'High':(r.ev||s)?'Building':'Quiet';r.f=r.cls==='High'?1:r.cls==='Building'?Math.max(.3,r.np/8):.2;r.note=done?'Signal '+s.st+'.':r.chg>=15?'This already ran.':'';(done||r.chg>=15?mov:r.cls==='High'?worth:bld).push(r)}
 bld.sort((a,b)=>(b.cls==='Building')-(a.cls==='Building')||b.np-a.np);strip();
 const nb=bld.filter(r=>r.cls==='Building').length,t=dh();$('#upd').textContent='What is worth a look right now · updated '+pad(t.h)+':'+pad(t.m);
 $('#rad').innerHTML=`<div class='hd'><h2>Worth opening</h2><span>Every rule the scanner checks is met right now.</span></div>${worth.length?`<div class='gr'>${worth.map(card).join('')}</div>`:`<div class='wo'><h3>No coin meets every rule right now</h3><p>${nb} coin${nb===1?'':'s'} building toward a setup. Waiting is part of the method. Run the Backtest to see how often this setup really appears.</p><button class='cta' data-go='bt'>Open Backtest</button></div>`}<div class='hd'><h2>Building</h2><span>Structure forming, not triggered. This is the early-warning tier.</span></div><div class='sub'>Mark your levels early.</div><div class='gr'>${bld.map(card).join('')||`<div class='mu'>Nothing building.</div>`}</div>${mov.length?`<div class='hd'><h2>Already moved</h2><span>Ran, or the signal already finished.</span></div><div class='sub'>Shown so you know why these are not on the list above.</div><div class='gr'>${mov.map(card).join('')}</div>`:''}<div class='fo'>A shortlist, not a forecast. The scanner says a coin is worth a look; what happens next is your own analysis. Signals are rule-based hypotheses, not financial advice, and losses are possible.</div>`}
async function tRadar(){V(`<div class='st5' id='st5'></div><div class='ses' id='sess'></div><div class='hd'><h2>Market Radar</h2><span id='upd'>What is worth a look right now</span><span style='margin-left:auto'>${['15m','1h','4h'].map(t=>`<button class='tb tf ${t===S.tf?'on':''}' data-tf='${t}'>${t}</button>`).join('')}</span></div><div id='rad'><div class='sub'>Scanning the market…</div></div>`);
 $('#sess').innerHTML=sessHTML();tick();if(RES&&LIST.length)strip();
 if(!RADY||Date.now()-RADY>90000)await load();paint()}
window.brief=sym=>{const r=RES[sym];if(!r)return;const m=document.createElement('div');m.id='mdl';m.onclick=e=>{if(e.target===m)m.remove()};
 m.innerHTML=`<div class='mp'><div style='display:flex;justify-content:space-between;align-items:center'><div class='sy'>${sym.replace('USDT','')}<small>/USDT</small></div><button onclick='document.getElementById(\'mdl\').remove()'>Close</button></div><div class='pr'>$${pf(r.px)}</div><div class='${r.chg>=0?'g':'r'}'>${r.chg>=0?'+':''}${r.chg.toFixed(1)}% <span class='mu'>· 24h</span></div><div class='tg'>${r.tags.map(t=>`<span class='${t[1]?'hot':''}'>${t[0]}</span>`).join('')}</div><div class='card'><b>1D bias:</b> ${r.hb}<div class='mu' style='margin-top:6px'>${r.why}</div></div>${r.s?sigCard(r.s,S.sigs.indexOf(r.s)):''}</div>`;document.body.appendChild(m)};
document.addEventListener('click',e=>{const b=e.target.closest('.ob'),g=e.target.closest('[data-go]'),t=e.target.closest('.tf');if(b)brief(b.dataset.s);else if(g)go(g.dataset.go);else if(t){S.tf=t.dataset.tf;RADY=0;tRadar()}});
/* routing */
const og=window.go;window.go=t=>{const m=document.getElementById('mdl');if(m)m.remove();t=t==='sigs'?'dash':t;og(t);mk(t)};
rh.querySelectorAll('.tb').forEach(b=>b.onclick=()=>go(b.dataset.t));
TABS.find(x=>x[0]==='dash')[2]=tRadar;window.tDash=tRadar;go('dash');
})();
