(()=>{
const css=`
:root{--bg:#0b0e14;--cd:#141922;--bd:#232b3a;--tx:#e8ecf3;--mu:#8793a6;--g:#22c58b;--r:#ff5370;--y:#ffc857;--ac:#5b8cff}
body{font-family:Inter,system-ui,sans-serif;font-size:15px;line-height:1.45;padding-bottom:calc(76px + env(safe-area-inset-bottom));-webkit-tap-highlight-color:transparent;background:var(--bg)}
#nav{display:none!important}
#hdr{position:sticky;top:0;z-index:6;background:rgba(11,14,20,.92);backdrop-filter:blur(10px);padding:calc(12px + env(safe-area-inset-top)) 16px 12px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--bd)}
#hdr b{font-size:18px;letter-spacing:.2px}
#bnav{position:fixed;left:0;right:0;bottom:0;z-index:8;display:flex;background:#10151d;border-top:1px solid var(--bd);padding-bottom:env(safe-area-inset-bottom)}
#bnav button{flex:1;background:none;border:0;border-radius:0;color:var(--mu);padding:8px 2px 7px;font-size:11px;font-weight:500;display:flex;flex-direction:column;align-items:center;gap:3px;min-height:58px}
#bnav button i{font-style:normal;font-size:21px;line-height:1}
#bnav button.on{color:var(--ac);background:none}
main{padding:12px;max-width:760px}
.card{background:var(--cd);border:1px solid var(--bd);border-radius:16px;padding:14px;margin:12px 0}
button,select,input,textarea{font:inherit;color:var(--tx);background:#1b2230;border:1px solid var(--bd);border-radius:999px;min-height:42px;padding:8px 15px}
textarea{border-radius:12px;min-height:80px}
button{font-weight:600;margin:3px 2px}button:active{transform:scale(.96)}
button.on{background:var(--ac);border-color:var(--ac);color:#fff}
button[onclick^=taken]{background:var(--g);border-color:var(--g);color:#04130d}
button[onclick^=doBT],button[onclick^=saveSet]{background:var(--ac);border-color:var(--ac);color:#fff}
button:disabled{opacity:.35}
select{padding-right:12px}
input[type=checkbox]{min-height:0;width:19px;height:19px;padding:0;accent-color:var(--ac);vertical-align:middle;border-radius:5px}
label{display:inline-block;margin:4px 12px 4px 0}
input[type=number]{width:120px;border-radius:12px}
.tag{border-radius:999px;padding:2px 10px;font-size:12px;font-weight:600;margin:0 0 0 6px}
.grid{grid-template-columns:repeat(3,1fr);gap:8px;margin:10px 0}.grid div{background:#0f141c;border-radius:12px;padding:10px;font-size:13px;color:var(--mu)}.grid div b{font-size:15px;color:var(--tx)}
td,th{padding:11px 6px;font-size:14px}th{color:var(--mu);font-weight:500}
.mu{color:var(--mu)}
.ft{font-size:11px;padding:10px 18px 20px}
#toast{bottom:calc(84px + env(safe-area-inset-bottom));border-radius:999px;background:#222b3b;border:1px solid var(--bd)}
#chart{height:max(380px,64vh)!important;border-radius:14px;overflow:hidden}
#cwrap{position:relative}
#fsb{position:absolute;left:8px;top:8px;z-index:3;min-height:36px;width:40px;padding:0;background:rgba(27,34,48,.85)}
body.fs #cwrap{position:fixed;inset:0;z-index:20;background:var(--bg);padding-top:env(safe-area-inset-top)}
body.fs #chart{height:100vh!important;border-radius:0}
body.fs #hdr,body.fs #bnav{display:none}
`;
const f=document.createElement('link');f.rel='stylesheet';f.href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';document.head.appendChild(f);
const s=document.createElement('style');s.textContent=css;document.head.appendChild(s);
const mt=document.createElement('meta');mt.name='theme-color';mt.content='#0b0e14';document.head.appendChild(mt);
const h=document.createElement('div');h.id='hdr';h.innerHTML='<b>Signal Desk</b><span class="mu">SMC · Spot only</span>';document.body.prepend(h);
const IC={dash:['🏠','Home'],chart:['📈','Chart'],sigs:['⚡','Signals'],bt:['🧪','Backtest'],jr:['📒','Journal'],set:['⚙️','Settings']};
const bn=document.createElement('div');bn.id='bnav';bn.innerHTML=TABS.map(t=>`<button data-t="${t[0]}" onclick="go('${t[0]}')"><i>${IC[t[0]][0]}</i>${IC[t[0]][1]}</button>`).join('');document.body.appendChild(bn);
const mark=t=>bn.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.t===t));
const og=window.go;window.go=t=>{document.body.classList.remove('fs');og(t);mark(t);scrollTo(0,0)};mark(S.tab);
const lc=window.LightweightCharts;if(lc){const oc=lc.createChart;window.LightweightCharts=Object.assign({},lc,{createChart:(el,o)=>oc.call(lc,el,Object.assign({},o,{width:el.clientWidth,height:el.clientHeight||440,layout:{background:{color:'#0b0e14'},textColor:'#8793a6',fontFamily:'Inter,system-ui,sans-serif'},grid:{vertLines:{color:'#151b26'},horzLines:{color:'#151b26'}}}))})}
const ot=window.tChart;const nt=function(){const r=ot.apply(this,arguments);const el=document.getElementById('chart');if(el){const w=el.parentElement;w.id='cwrap';const b=document.createElement('button');b.id='fsb';b.textContent='⛶';b.onclick=()=>{document.body.classList.toggle('fs');setTimeout(()=>{if(CH){const e=document.getElementById('chart');CH.chart.applyOptions({width:e.clientWidth,height:e.clientHeight});drawOv()}},60)};w.appendChild(b)}return r};
window.tChart=nt;TABS.find(x=>x[0]==='chart')[2]=nt;
window.addEventListener('resize',()=>{if(CH){const e=document.getElementById('chart');if(e){CH.chart.applyOptions({width:e.clientWidth,height:e.clientHeight});drawOv()}}});
})();
