(function(){
  // theme toggle, skill animations, and smooth scrolling
  const toggle = document.getElementById('theme-toggle');
  const root = document.documentElement;

  function setTheme(theme){
    if(theme === 'light') root.setAttribute('data-theme','light');
    else root.removeAttribute('data-theme');
    try{ localStorage.setItem('theme', theme || 'dark'); } catch(e){}
  }
  // initial
  try{
    const saved = localStorage.getItem('theme');
    if(saved === 'light') setTheme('light');
    else setTheme('dark');
  }catch(e){ setTheme('dark'); }

  toggle.addEventListener('click', ()=>{
    const cur = root.getAttribute('data-theme');
    if(cur === 'light') setTheme('dark');
    else setTheme('light');
  });

  // set year
  const yEl = document.getElementById('year');
  if(yEl) yEl.textContent = new Date().getFullYear();

  // animate bars when visible
  const bars = document.querySelectorAll('.bar');
  const animate = function(){
    bars.forEach(b => {
      const v = parseInt(b.getAttribute('data-value') || 0, 10);
      const fill = b.querySelector('.fill');
      if(fill) fill.style.width = v + '%';
    });
  };

  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        animate();
        observer.disconnect();
      }
    });
  }, {threshold: 0.25});
  if(bars.length) obs.observe(bars[0]);

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const href = a.getAttribute('href');
      if(href === '#' || href === '') return;
      const target = document.querySelector(href);
      if(!target) return;
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

})();