// scripts.js


(function(){
// theme toggle (simple toggle using data-theme attribute)
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', ()=>{
const cur = document.documentElement.getAttribute('data-theme');
if(cur === 'light') document.documentElement.removeAttribute('data-theme');
else document.documentElement.setAttribute('data-theme','light');
});


// set current year
document.getElementById('year').textContent = new Date().getFullYear();


// animate skill bars when visible
const bars = document.querySelectorAll('.bar');
const animateBars = ()=>{
bars.forEach(b=>{
const v = b.getAttribute('data-value') || 0;
if(!b.querySelector('.fill')){
const fill = document.createElement('div');
fill.className = 'fill';
fill.style.height = '100%';
fill.style.width = '0%';
fill.style.transition = 'width 900ms cubic-bezier(.2,.9,.2,1)';
fill.style.background = 'linear-gradient(90deg,var(--accent),var(--accent-2))';
b.appendChild(fill);
setTimeout(()=> fill.style.width = v+'%');
}
})
};
// simple intersection observer
const obs = new IntersectionObserver((entries, o)=>{
})();
