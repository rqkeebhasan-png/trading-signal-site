(()=>{const i=TABS.findIndex(x=>x[0]==='set');if(i>-1)TABS.splice(i,1);
const b=document.querySelector('#rh .tb[data-t=set]');if(b)b.remove();
window.locks=()=>({used:0,sk:0,tpd:false,block:false,why:[]});
const og=window.go;window.go=t=>og(t==='set'?'dash':t);
})();
