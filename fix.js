(()=>{
/* Fix 1: order block = lowest bearish candle at the START of the move (old code picked one near the top, so 'discount' almost always failed) */
window.obBull=function(c,e){const from=e.ll?e.ll.i:Math.max(0,e.i-10);let b=null;for(let j=from;j<e.i;j++)if(c[j].c<c[j].o&&(!b||c[j].l<b.bot))b={top:c[j].h,bot:c[j].l,i:j,t:c[j].t};return b};
/* Fix 2: explain, per coin, exactly why a signal is missing */
const why=(a,hb)=>{const n=a.c.length,e=[...a.ev].reverse().find(x=>x.d>0&&x.disp&&x.ll&&n-1-x.i<=40);
 if(!e)return'No bullish structure shift in the last 40 candles (trend now: '+a.tr+')';
 const s=setupA(a,hb,Date.now()/1000,40,true);if(!s)return'Shift found, but no order block/FVG entry zone';
 const f=s.checks.filter(x=>!x[1]).map(x=>x[0]);return f.length?'Almost: failed -> '+f.join('; '):'All rules pass'};
async function diag(){const o={};await Promise.all(ASSETS.map(async sym=>{try{const[l,h]=await Promise.all([klines(sym,S.tf,500),klines(sym,'1d',300)]);const a=analyze(closedC(l,S.tf)),hb=bias(analyze(closedC(h,'1d')));o[sym]=why(a,hb)+' (1D bias: '+hb+')'}catch(e){o[sym]='Data failed: '+e.message}}));return o}
const dcard=async()=>{const d=await diag();return`<div class="card"><b>Why signals appear or not (${S.tf})</b>${ASSETS.map(a=>`<div style="margin:9px 0"><b>${nm(a)}</b><div class="mu">${d[a]}</div></div>`).join('')}</div>`};
const guide=`<details class="card"><summary><b>এই সাইট কীভাবে পড়বেন</b></summary><div class="mu" style="margin-top:8px;line-height:1.7">• সিগন্যাল মানে শুধু <b>কেনার</b> সুযোগ (স্পট)। বিক্রির সিগন্যাল নেই।<br>• <b>Entry</b> = এই দামে কিনবেন (লিমিট অর্ডার)। <b>Stop</b> = এর নিচে গেলে বের হবেন। <b>TP</b> = লক্ষ্য।<br>• <b>Quantity/Amount</b> = আপনার রিস্ক % অনুযায়ী কতটা কিনবেন। <b>Loss if SL</b> = স্টপ লাগলে সর্বোচ্চ ক্ষতি।<br>• <b>Watching</b> = এখনো entry-তে আসেনি, অপেক্ষা করুন। <b>Triggered/Active</b> = দাম entry ছুঁয়েছে।<br>• সবুজ ✓ = নিয়ম মিলেছে, লাল ✗ = মেলেনি। ৮টা নিয়মের সবকটা সবুজ হলে তবেই সিগন্যাল।<br>• সিগন্যাল না আসাই স্বাভাবিক। নিচের “Why signals” কার্ডে প্রতিটা কয়েনের কারণ দেখায়।<br>• আগে <b>Backtest</b> চালিয়ে দেখুন, তারপর খুব ছোট সাইজে শুরু করুন।</div></details>`;
const od=window.tDash,nd=async function(){const p=od.apply(this,arguments),w=document.getElementById('wl');if(w)w.insertAdjacentHTML('beforebegin',guide);await p;if(S.tab==='dash'){const t=document.getElementById('top');if(t)t.insertAdjacentHTML('afterend',await dcard())}};
const os=window.tSigs,ns=async function(){await os.apply(this,arguments);if(S.tab==='sigs'){const t=document.getElementById('sl');if(t)t.insertAdjacentHTML('afterend',await dcard())}};
window.tDash=nd;window.tSigs=ns;TABS.find(x=>x[0]==='dash')[2]=nd;TABS.find(x=>x[0]==='sigs')[2]=ns;
if(S.tab==='dash')nd();
})();
