(()=>{const i=TABS.findIndex(x=>x[0]==='chart');if(i>-1)TABS.splice(i,1);
const b=document.querySelector('#bnav button[data-t=chart]');if(b)b.remove();
const og=window.go;window.go=t=>og(t==='chart'?'dash':t);
const s=document.createElement('style');s.textContent='button[onclick*="go(\'chart\')"]{display:none}';document.head.appendChild(s);
})();
