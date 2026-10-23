(()=>{
const oA=window.setupA;
const nz=(now,live)=>[['Outside news window',live?!newsNear(now):true],['Not a Sunday session',!(cfg.sun&&new Date(now*1000).getUTCDay()===0)]];
const fz=(a,e)=>a.fvg.find(z=>z.d>0&&z.i>=e.ll.i&&z.i<=e.i&&z.s!=='filled');
/* inducement: last internal (minor) low formed before the displacement; 'taken' if price wicked below it before the shift */
function induce(c,e){if(!e||!e.ll)return null;let lv=null,li=-1;for(let j=e.ll.i+1;j<e.i-1;j++)if(c[j].l<c[j-1].l&&c[j].l<c[j+1].l){lv=c[j].l;li=j}if(lv===null)return null;let t=false;for(let j=li+1;j<=e.i;j++)if(c[j].l<lv){t=true;break}return{lv,i:li,taken:t}}
function patchA(s,a){if(!s)return s;const e=a.ev.find(x=>x.d>0&&x.i===s.i),ind=induce(a.c,e);if(ind&&ind.taken&&!s.checks[2][1]){s.checks[2]=['Inducement (internal low) swept before the shift',true];s.ok=s.checks.every(x=>x[1])}return s}
/* Setup B: triple tap (3 sell-side sweeps) then a bullish shift, target = Fib 1.618 extension, needs bullish HTF */
function setupB(a,hb,now,fresh,live){const c=a.c,n=c.length,e=[...a.ev].reverse().find(x=>x.d>0&&x.disp&&x.ll&&n-1-x.i<=fresh);if(!e)return null;
 const pv=[...a.ev].reverse().find(x=>x.d>0&&x.i<e.i),lb=pv?pv.i:0,taps=a.sweeps.filter(s=>s.k==='ssl'&&s.i>lb&&s.i<=e.i);if(taps.length<3)return null;
 const ob=obBull(c,e),zone=ob||fz(a,e);if(!zone)return null;let lo=Infinity;for(let j=taps[0].i;j<=e.i;j++)lo=Math.min(lo,c[j].l);
 const L=Math.min(e.ll.p,lo);let H=L;for(let j=e.ll.i;j<n;j++)H=Math.max(H,c[j].h);
 const entry=zone.top,sl=Math.min(lo,zone.bot)*0.999;if(entry<=sl)return null;const risk=entry-sl,tp1=L+(H-L)*1.618,tp2=L+(H-L)*2.618,rr=(tp1-entry)/risk;
 const checks=[['HTF bias confirms bullish ('+hb+')',hb==='bullish'],['Triple tap: '+taps.length+' sell-side sweeps before the shift',true],['LTF market structure shift with displacement',true],['Entry at '+(ob?'order block':'FVG'),true],['Target at Fib 1.618 extension is above entry',tp1>entry*1.002],['Risk-reward at least 1:'+cfg.minRR,rr>=cfg.minRR],...nz(now,live)];
 return{setup:'B: Triple tap + shift',entry,sl,tp1,tp2,rr,checks,ok:checks.every(x=>x[1]),i:e.i,t:c[e.i].t,bias:hb}}
/* Setup C: range deviation: sweep of the range low, close back inside, long toward midpoint then range high */
function setupC(a,hb,now,fresh,live){const c=a.c,n=c.length,sw=[...a.sweeps].reverse().find(s=>s.k==='ssl'&&n-1-s.i<=fresh);if(!sw)return null;
 const sws=a.sw.filter(s=>s.conf<sw.i),hs=sws.filter(s=>s.k==='h').slice(-3),ls=sws.filter(s=>s.k==='l').slice(-3);if(hs.length<2||ls.length<2)return null;
 const lo=sw.lvl,hi=Math.max(...hs.map(s=>s.p));if(lo>Math.min(...ls.map(s=>s.p))*1.003)return null;
 const mid=(hi+lo)/2,sl=c[sw.i].l*0.999,entry=lo;if(entry<=sl)return null;const risk=entry-sl,rr=(mid-entry)/risk,wd=(hi-lo)/lo;
 const checks=[['HTF bias is bullish or neutral ('+hb+')',hb!=='bearish'],['Ranging structure before the sweep',trend(sws)==='range'],['Range at least 1.5% wide ('+(wd*100).toFixed(1)+'%)',wd>=0.015],['Range low swept and price closed back inside',true],['Targets: midpoint '+fp(mid)+', then range high '+fp(hi),mid>entry*1.002],['Risk-reward at least 1:'+cfg.minRR,rr>=cfg.minRR],...nz(now,live)];
 return{setup:'C: Range deviation',entry,sl,tp1:mid,tp2:hi,rr,checks,ok:checks.every(x=>x[1]),i:sw.i,t:c[sw.i].t,bias:hb}}
/* every caller (radar, auto trades, backtest) now gets the best of A, B, C */
window.setupA=function(a,hb,now,fresh,live){const L=[patchA(oA(a,hb,now,fresh,live),a),setupB(a,hb,now,fresh,live),setupC(a,hb,now,fresh,live)].filter(Boolean);if(!L.length)return null;const ok=L.filter(s=>s.ok);if(ok.length)return ok.sort((x,y)=>y.t-x.t||y.rr-x.rr)[0];const p=s=>s.checks.filter(c=>c[1]).length;return L.sort((x,y)=>p(y)-p(x))[0]};
/* time cycles: gaps between daily bottoms, projected next window +-3 days (context only) */
function cyc(sym){if(!sym)return'';const e=cache[sym+'1d200']||cache[sym+'1d300']||cache[sym+'1d500'];if(!e)return'';const lo=swings(closedC(e.d,'1d'),5).filter(s=>s.k==='l');if(lo.length<3)return'Time cycle: not enough daily bottoms to estimate.';
 const g=[];for(let i=1;i<lo.length;i++)g.push((lo[i].t-lo[i-1].t)/86400);const r=g.slice(-4),av=r.reduce((x,y)=>x+y,0)/r.length,nx=lo[lo.length-1].t+av*86400,dd=(nx-Date.now()/1000)/86400,dt=new Date(nx*1000).toISOString().slice(0,10);
 const st=Math.abs(dd)<=3?'INSIDE the window now':dd>0?'in '+Math.round(dd)+' days':'passed '+Math.abs(Math.round(dd))+' days ago';
 return'Time cycle: daily bottoms about every '+av.toFixed(0)+' days, next window '+dt+' (±3 days): '+st+'. '+(r.length<3?'Few data points, weak. ':'')+'Context only, not a trigger.'}
const oc=window.sigCard;window.sigCard=function(s,i){const h=oc(s,i),t=cyc(s.sym);return t?h.replace(/<div style=.margin-top:8px.>/,`<div class='mu' style='margin-top:8px'>${t}</div><div style='margin-top:8px'>`):h};
})();
