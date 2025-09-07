// Common UI helpers used on all pages
(function(){
  // Year
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();

  // Mobile drawer
  const drawer = document.getElementById('drawer');
  const menuBtn = document.getElementById('menuBtn');
  function toggleDrawer(open){ drawer && drawer.classList.toggle('open', open); }
  if(menuBtn) menuBtn.addEventListener('click', () => toggleDrawer(true));
  window.toggleDrawer = toggleDrawer;

  // Copy buttons (address etc.)
  document.querySelectorAll('[data-copy]').forEach(btn=>{
    btn.addEventListener('click', async ()=>{
      const target = btn.getAttribute('data-copy');
      const el = document.querySelector(target);
      if(!el) return;
      try{
        await navigator.clipboard.writeText(el.textContent.trim());
        btn.textContent = 'Copied!';
        btn.classList.add('ok');
        setTimeout(()=>{btn.textContent='Copy'; btn.classList.remove('ok')}, 1400);
      }catch(e){ btn.textContent = 'Select & copy'; }
    });
  });

  // TON rain (only if host exists)
  const host = document.getElementById('tonRain');
  if(host){
    const drops = 26; const vw = Math.max(document.documentElement.clientWidth||0, window.innerWidth||0);
    for(let i=0;i<drops;i++){
      const d = document.createElement('div'); d.className='drop';
      const left = Math.random()*vw; const delay = Math.random()*6; const duration = 6 + Math.random()*10; const size = 12 + Math.random()*18;
      d.style.left = left + 'px'; d.style.animationDuration = duration + 's'; d.style.animationDelay = delay + 's'; d.style.width = size + 'px'; d.style.height = size + 'px';
      host.appendChild(d);
    }
  }
})();
