// theme toggle, skill animations, smooth scroll, year
(function(){
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const yearEl = document.getElementById('year');

  // persist theme
  function setTheme(theme){
    if(theme === 'light') root.setAttribute('data-theme', 'light');
    else root.removeAttribute('data-theme');
    try{ localStorage.setItem('theme', theme || 'dark'); } catch(e){}
  }
  try {
    const saved = localStorage.getItem('theme');
    if(saved === 'light') setTheme('light');
    else setTheme('dark');
  } catch(e) { setTheme('dark'); }

  if(toggle) toggle.addEventListener('click', ()=>{
    const cur = root.getAttribute('data-theme');
    if(cur === 'light') setTheme('dark');
    else setTheme('light');
  });

  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // animate skill bars when scrolled into view
  const bars = document.querySelectorAll('.bar');
  function animateBars(){
    bars.forEach(b => {
      const v = parseInt(b.getAttribute('data-value') || 0, 10);
      const fill = b.querySelector('.fill');
      if(fill) fill.style.width = v + '%';
    });
  }
  if(bars.length){
    const obs = new IntersectionObserver((entries, obsr) => {
      entries.forEach(e => {
        if(e.isIntersecting){
          animateBars();
          obsr.disconnect();
        }
      });
    }, {threshold: 0.25});
    obs.observe(bars[0]);
  }

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const href = a.getAttribute('href');
      if(!href || href === '#') return;
      const target = document.querySelector(href);
      if(!target) return;
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
})();
