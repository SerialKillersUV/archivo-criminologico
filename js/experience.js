/* Interacciones decorativas: sin alterar el contenido ni el comportamiento de estudio. */
(() => {
 const header=document.querySelector('.site-header');
 let queued=false;
 const updateHeader=()=>{header?.classList.toggle('is-scrolled',scrollY>24);queued=false;};
 addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(updateHeader);}},{passive:true});
 updateHeader();
 const motion=matchMedia('(prefers-reduced-motion: reduce)');
 const finePointer=matchMedia('(hover: hover) and (pointer: fine)');
 const cards=[...document.querySelectorAll('.case-card,.concept-card')];
 for(const card of cards){
  card.addEventListener('pointermove',event=>{
   if(motion.matches||!finePointer.matches)return;
   const rect=card.getBoundingClientRect();
   card.style.setProperty('--pointer-x',`${event.clientX-rect.left}px`);
   card.style.setProperty('--pointer-y',`${event.clientY-rect.top}px`);
  },{passive:true});
 }
 const art=document.querySelector('.hero-art');
 if(art){
  let frame=0,x=0,y=0;
  const reset=()=>{if(frame)cancelAnimationFrame(frame);frame=0;art.style.removeProperty('transform');};
  art.addEventListener('pointermove',event=>{
   if(motion.matches||!finePointer.matches)return;
   const rect=art.getBoundingClientRect();
   x=(event.clientX-rect.left)/rect.width-.5;y=(event.clientY-rect.top)/rect.height-.5;
   if(!frame)frame=requestAnimationFrame(()=>{art.style.transform=`perspective(1300px) rotateX(${-y*3}deg) rotateY(${x*3}deg)`;frame=0;});
  },{passive:true});
  art.addEventListener('pointerleave',reset);motion.addEventListener('change',reset);finePointer.addEventListener('change',reset);
 }
})();
