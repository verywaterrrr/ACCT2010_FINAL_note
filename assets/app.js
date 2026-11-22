const boxes=[...document.querySelectorAll('input[data-id]')];
function update(){const done=boxes.filter(x=>x.checked).length;document.querySelector('[data-count]').textContent=done;document.querySelector('[data-bar]').style.width=(done/boxes.length*100)+'%'}
for(const box of boxes){try{box.checked=localStorage.getItem('acct-final-'+box.dataset.id)==='1'}catch{}box.addEventListener('change',()=>{try{localStorage.setItem('acct-final-'+box.dataset.id,box.checked?'1':'0')}catch{}update()})}update();
