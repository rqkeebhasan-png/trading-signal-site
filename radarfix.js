document.addEventListener('click',e=>{const b=e.target.closest('#mdl button');if(b&&b.textContent.trim()==='Close'){const m=document.getElementById('mdl');if(m)m.remove()}});
