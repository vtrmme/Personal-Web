const btn=document.querySelector('.menu-btn'),nav=document.querySelector('.nav-links');
btn.addEventListener('click',()=>{const o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
const top=document.querySelector('.to-top');
addEventListener('scroll',()=>top.classList.toggle('show',scrollY>400),{passive:true});
top.addEventListener('click',()=>scrollTo({top:0}));
// terminal tipo máquina de escribir (solo en inicio)
const t=document.getElementById('typed');
if(t&&!matchMedia('(prefers-reduced-motion:reduce)').matches){
 const txt=t.innerHTML;t.innerHTML='';let i=0,tag=false,out='';
 (function tick(){if(i>=txt.length){t.innerHTML=out+'<span class="cursor"></span>';return}
  const ch=txt[i++];out+=ch;if(ch=='<')tag=true;if(ch=='>')tag=false;
  t.innerHTML=out+'<span class="cursor"></span>';
  tag?tick():setTimeout(tick,18)})();
}
// filtros de proyectos
document.querySelectorAll('.filter').forEach(f=>f.addEventListener('click',()=>{
 document.querySelectorAll('.filter').forEach(x=>x.setAttribute('aria-pressed',x===f));
 const k=f.dataset.f;document.querySelectorAll('.project-card').forEach(c=>c.hidden=k!=='all'&&!c.dataset.tags.includes(k));
}));
