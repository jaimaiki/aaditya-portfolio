gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray('.animate').forEach(sec=>{
gsap.from(sec,{opacity:0,y:80,duration:1,scrollTrigger:{trigger:sec,start:'top 80%'}})
});
const r=document.querySelector('input[type=range]');
const a=document.querySelector('.after');
r.addEventListener('input',e=>a.style.clipPath=`inset(0 ${100-e.target.value}% 0 0)`);
