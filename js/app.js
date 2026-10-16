'use strict';
(() => {
 const $ = s => document.querySelector(s);
 const $$ = s => [...document.querySelectorAll(s)];
 const e = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const motion = matchMedia('(prefers-reduced-motion: reduce)');
 let noMotion=motion.matches, revealObserver;
 const number=c=>String(cases.indexOf(c)+1).padStart(2,'0');
 const caseURL=(id,section='')=>`caso.html?id=${encodeURIComponent(id)}${section?'#'+section:''}`;
 const cleanText=value=>String(value).replace(/\s*\[\d+(?:, \d+)*\]/g,'');
 const paragraphs=values=>values.map(v=>`<p>${e(cleanText(v))}</p>`).join('');
 const sourceLink=s=>s.url?`<a href="${e(s.url)}" target="_blank" rel="noopener noreferrer">${e(s.label)} ↗</a>`:e(s.label);
 const portrait=c=>`<div class="portrait-row"><img src="${e(c.image)}" alt="${e(c.name)} · retrato de archivo con fondo editado" loading="lazy" decoding="async"></div>`;
 const card=c=>`<a class="case-card reveal" href="${caseURL(c.id)}"><div class="case-photo-wrap"><span class="case-number" aria-hidden="true">${number(c)}</span>${portrait(c)}<div class="photo-gradient"></div><div class="case-meta"><span>EXPEDIENTE ${number(c)}</span><span>${e(c.period)}</span></div></div><div class="card-content"><div class="case-title"><h3>${e(c.name)}</h3><span class="arrow" aria-hidden="true">↗</span></div><p class="case-alias">${e(c.alias)}</p><p class="case-focus">${e(c.place)}</p></div></a>`;
 function reveal(){
  if(noMotion||!('IntersectionObserver' in window)){$$('.reveal').forEach(el=>el.classList.add('visible'));return;}
  if(!revealObserver){
   revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target);}}),{threshold:0.03});
   document.body.classList.add('motion-ready');
  }
  $$('.reveal:not(.visible)').forEach((el,i)=>{el.style.setProperty('--reveal-order',i%3);revealObserver.observe(el);});
 }
 motion.addEventListener('change',event=>{noMotion=event.matches;if(noMotion){revealObserver?.disconnect();$$('.reveal').forEach(el=>el.classList.add('visible'));}reveal();});
 const menu=$('.menu-toggle'),nav=$('#siteNav');
 function closeMenu(){nav?.classList.remove('open');menu?.setAttribute('aria-expanded','false');menu?.setAttribute('aria-label','Abrir menú');}
 menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';nav.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');});
 nav?.addEventListener('click',ev=>{if(ev.target.closest('a'))closeMenu();});
 document.addEventListener('keydown',ev=>{if(ev.key==='Escape'&&menu?.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();}});
 matchMedia('(min-width:981px)').addEventListener('change',ev=>{if(ev.matches)closeMenu();});
 if($('#featuredCases'))$('#featuredCases').innerHTML=cases.map(card).join('');
 if($('#allCases'))$('#allCases').innerHTML=cases.map(card).join('');
 if($('#casePage')){
  const id=new URLSearchParams(location.search).get('id')||cases[0].id,c=cases.find(x=>x.id===id);
  if(!c){document.title='Expediente no encontrado — Archivo Criminológico';$('#casePage').innerHTML='<section class="page-hero"><div class="eyebrow">ARCHIVO / CINCO CASOS</div><h1>Expediente <em>no disponible.</em></h1><p>El archivo reúne ahora los cinco casos del material de clase.</p><a class="btn btn-red" href="casos.html">Ver los cinco casos ↗</a></section>';}
  else{
   const d=details[c.id],index=cases.indexOf(c),prev=cases[(index+4)%5],next=cases[(index+1)%5];
   document.title=`${c.name} — Archivo Criminológico`;
   $('#casePage').innerHTML=`<section class="case-hero"><div class="case-breadcrumb"><a href="casos.html">← Todos los expedientes</a><span>/</span><span>ARCHIVO ${number(c)} / 05</span></div><div class="case-hero-grid"><div><div class="case-portrait"><span class="case-number" aria-hidden="true">${number(c)}</span>${portrait(c)}<div class="portrait-labels"><span>${e(c.name)}</span></div></div><p class="photo-credit">Fotografía de archivo · fondo editado.<br><a href="bibliografia.html#retrato-${e(c.id)}">Procedencia del retrato ↗</a></p></div><div class="case-heading"><div class="eyebrow">EXPEDIENTE CRIMINOLÓGICO / ${number(c)}</div><h1>${e(c.name)}</h1><p class="alias">${e(c.alias)}</p><p class="location">${e(c.place)} · ${e(c.period)}</p><div class="case-facts"><div><span>VÍCTIMAS / ALCANCE DE LA CIFRA</span><strong>${e(c.victims)}</strong></div><div><span>RESOLUCIÓN JUDICIAL</span><strong>${e(c.sentence)}</strong></div></div><p class="case-summary">${e(d.summary)}</p><a class="text-link" href="preguntas.html?caso=${e(c.id)}">Practicar este caso ↗</a></div></div></section>
   <div class="case-layout"><aside class="case-sidebar"><div class="eyebrow">OCHO APARTADOS / UN MÉTODO</div><nav aria-label="Apartados del expediente">${sections.map(([key,label],i)=>`<a href="#${key}"><span>${String(i+1).padStart(2,'0')}</span> ${e(label)}</a>`).join('')}<a href="#cronologia">Cronología</a><a href="bibliografia.html">Bibliografía ↗</a></nav><button class="small-button" id="toggleSections" type="button" aria-controls="profileSections" aria-expanded="false">Desplegar apartados</button><a class="small-button download-case" id="downloadCase" href="assets/pdf/expediente-${e(c.id)}.pdf" download="expediente-${e(c.id)}.pdf">Descargar PDF ↓</a></aside>
   <div class="case-content"><div id="profileSections">${sections.map(([key,label],i)=>`<section class="analysis-section reveal" id="${key}"><details class="analysis-detail"><summary><span class="analysis-title"><span>${String(i+1).padStart(2,'0')}</span><h2>${e(label)}</h2></span><span class="detail-toggle" aria-hidden="true">+</span></summary><div class="analysis-body">${paragraphs(d[key])}</div></details></section>`).join('')}</div>
   <section class="timeline-section" id="cronologia"><h2>La secuencia de los hechos</h2><ol class="timeline">${d.timeline.map(([date,text])=>`<li><time>${e(date)}</time><p>${e(text)}</p></li>`).join('')}</ol></section>
   <section class="recall"><div class="eyebrow">LLEVA EL ANÁLISIS A LA PRÁCTICA</div><h2>Comprueba lo que has entendido.</h2><a class="btn btn-red" href="preguntas.html?caso=${e(c.id)}">Cinco preguntas del caso ↗</a><a class="text-link" href="comparativa.html">Comparar los cinco expedientes ↗</a></section>

   <nav class="case-navigation" aria-label="Otros expedientes"><a href="${caseURL(prev.id)}"><span>← EXPEDIENTE ANTERIOR</span>${e(prev.name)}</a><a href="${caseURL(next.id)}"><span>SIGUIENTE EXPEDIENTE →</span>${e(next.name)}</a></nav></div></div>`;
   const controls=$('#toggleSections'),panels=$$('.analysis-detail');
   const syncToggle=()=>{const open=panels.some(el=>el.open);controls.textContent=open?'Plegar apartados':'Desplegar apartados';controls.setAttribute('aria-expanded',String(open));};
   controls.addEventListener('click',()=>{const open=!panels.some(el=>el.open);panels.forEach(el=>el.open=open);syncToggle();});panels.forEach(el=>el.addEventListener('toggle',syncToggle));
   const openHash=()=>{const key=location.hash.slice(1),target=document.getElementById(key),panel=target?.querySelector('details');if(panel)panel.open=true;$$('.case-sidebar a').forEach(a=>{const active=a.hash===location.hash;a.classList.toggle('current',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});};
   addEventListener('hashchange',openHash);openHash();
   $$('.case-sidebar a').forEach(a=>a.addEventListener('click',()=>{const target=document.getElementById(a.hash.slice(1));if(target?.querySelector('details'))target.querySelector('details').open=true;}));
   if('IntersectionObserver' in window){const toc=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)$$('.case-sidebar a').forEach(a=>{const active=a.hash==='#'+entry.target.id;a.classList.toggle('current',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}),{rootMargin:'-120px 0px -55% 0px'});$$('.case-content section[id]').forEach(s=>toc.observe(s));}
  }
 }
 if($('#comparisonTable')){
  $('#compareSelection').innerHTML=cases.map(c=>`<label><input type="checkbox" value="${e(c.id)}" checked> ${e(c.name)}</label>`).join('');
  const render=()=>{const ids=$$('#compareSelection input:checked').map(x=>x.value),selected=cases.filter(c=>ids.includes(c.id));$('#compareCount').textContent=`${selected.length} de 5 casos seleccionados`;$('#comparisonTable').innerHTML=`<caption>${selected.length} expedientes · M.O., victimología y perfil criminológico</caption><thead><tr><th scope="col">Caso</th><th scope="col">Modus operandi</th><th scope="col">Victimología</th><th scope="col">Perfil / personalidad</th></tr></thead><tbody>${selected.length?selected.map(c=>`<tr><th scope="row"><a href="${caseURL(c.id)}">${e(c.name)} ↗</a><span class="compare-period">${e(c.place)}<br>${e(c.period)}</span></th>${[['mo','Modus operandi','mo'],['victimology','Victimología','victimology'],['profile','Perfil','presentation']].map(([key,label,anchor])=>`<td data-label="${label}">${e(details[c.id].comparison[key])}<a class="compare-source" href="${caseURL(c.id,anchor)}" aria-label="Ver ${label.toLowerCase()} de ${e(c.name)}">Ver apartado ↗</a></td>`).join('')}</tr>`).join(''):'<tr><td colspan="4">Selecciona al menos un caso para ver la comparativa.</td></tr>'}</tbody>`;};
  $('#compareSelection').addEventListener('change',render);$('#selectAll').addEventListener('click',()=>{$$('#compareSelection input').forEach(x=>x.checked=true);render();});$('#clearSelection').addEventListener('click',()=>{$$('#compareSelection input').forEach(x=>x.checked=false);render();});render();
 }
 if($('#conceptGrid')){
  $('#conceptGrid').innerHTML=concepts.map(([title,definition,example],i)=>`<article class="concept-card reveal"><span class="concept-index">${String(i+1).padStart(2,'0')} / CONCEPTO</span><h2>${e(title)}</h2><p>${e(definition)}</p><p class="concept-example">${e(example)}</p></article>`).join('');
 }
 if($('#bibliographyList')){
  $('#bibliographyList').innerHTML=bibliography.map(s=>`<li id="${e(s.id)}"><span class="reference-kind">${e(s.kind)}</span><p>${sourceLink(s)}</p></li>`).join('');
 }
 if($('#quizQuestions')){
  const filter=$('#quizCase'),answers=new Map();
  filter.innerHTML='<option value="all">Los cinco casos · 25 preguntas</option>'+cases.map(c=>`<option value="${e(c.id)}">${e(c.name)} · 5 preguntas</option>`).join('');
  const requested=new URLSearchParams(location.search).get('caso');if(cases.some(c=>c.id===requested))filter.value=requested;
  const current=()=>questions.filter(q=>filter.value==='all'||q.caseId===filter.value);
  function updateScore(){
   const list=current(),done=list.filter(q=>answers.has(q.id)),correct=done.filter(q=>answers.get(q.id)===q.correct).length;
   $('#quizStatus').textContent=`${done.length} de ${list.length} corregidas · ${correct} ${correct===1?'acierto':'aciertos'}`;
   $('#quizProgress').max=list.length;$('#quizProgress').value=done.length;
   const finished=done.length===list.length,result=$('#quizResult');result.hidden=!finished;
   if(finished){const review=[...new Set(done.filter(q=>answers.get(q.id)!==q.correct).map(q=>q.caseId))];result.innerHTML=`<div class="eyebrow">TEST COMPLETADO</div><h2>${correct} / ${list.length} respuestas correctas</h2><p>${review.length?'Repasa los casos en los que has fallado y vuelve a intentarlo.':'Has resuelto correctamente este bloque. Puedes ampliar el repaso con la comparativa.'}</p><div class="result-links">${review.map(id=>`<a class="text-link" href="${caseURL(id)}">Repasar ${e(cases.find(c=>c.id===id).name)} ↗</a>`).join('')}<a class="text-link" href="comparativa.html">Ir a Comparativa ↗</a></div>`;}
  }
  function markAnswer(q){
   const article=document.getElementById('question-'+q.id),answer=answers.get(q.id),correct=answer===q.correct;
   article.classList.add('is-answered');article.classList.toggle('is-correct',correct);
   article.querySelectorAll('input').forEach(input=>{input.disabled=true;input.checked=Number(input.value)===answer;const label=input.closest('label');label.classList.toggle('correct-option',Number(input.value)===q.correct);label.classList.toggle('wrong-option',Number(input.value)===answer&&!correct);});
   article.querySelector('button').hidden=true;const feedback=article.querySelector('.quiz-feedback');feedback.hidden=false;feedback.innerHTML=`<strong>${correct?'Correcto.':'Respuesta incorrecta.'} ${!correct?'La correcta es '+String.fromCharCode(65+q.correct)+'.':''}</strong><p>${e(q.explanation)}</p><a class="text-link" href="${caseURL(q.caseId,q.section)}">Revisar el apartado ↗</a>`;
  }
  function render(){
   $('#quizQuestions').innerHTML=current().map((q,i)=>`<article class="quiz-card reveal" id="question-${q.id}"><div class="quiz-meta"><span>${String(i+1).padStart(2,'0')} / ${String(current().length).padStart(2,'0')}</span><a href="${caseURL(q.caseId)}">${e(cases.find(c=>c.id===q.caseId).name)} ↗</a></div><form data-question="${q.id}"><fieldset><legend>${e(q.text)}</legend><div class="quiz-options">${q.options.map((option,n)=>`<label><input type="radio" name="answer-${q.id}" value="${n}" required><span class="option-letter" aria-hidden="true">${String.fromCharCode(65+n)}</span><span>${e(option)}</span></label>`).join('')}</div></fieldset><button class="small-button" type="submit">Comprobar respuesta ↗</button></form><div class="quiz-feedback" role="status" hidden></div></article>`).join('');current().filter(q=>answers.has(q.id)).forEach(markAnswer);updateScore();reveal();
  }
  $('#quizQuestions').addEventListener('submit',ev=>{ev.preventDefault();const q=questions.find(q=>q.id===ev.target.dataset.question),input=ev.target.querySelector('input:checked');if(!q||!input||answers.has(q.id))return;answers.set(q.id,Number(input.value));markAnswer(q);updateScore();const feedback=document.querySelector('#question-'+q.id+' .quiz-feedback');feedback.tabIndex=-1;feedback.focus({preventScroll:true});});
  filter.addEventListener('change',()=>{const url=new URL(location.href);if(filter.value==='all')url.searchParams.delete('caso');else url.searchParams.set('caso',filter.value);history.replaceState(null,'',url);render();});
  $('#resetQuiz').addEventListener('click',()=>{answers.clear();render();$('#quizStatus').textContent='Test reiniciado. '+$('#quizStatus').textContent;filter.focus();});render();
 }
 let frame=false;
 function updateProgress(){const height=document.documentElement.scrollHeight-innerHeight;$('.reading-progress').style.transform=`scaleX(${height>0?Math.min(1,Math.max(0,scrollY/height)):0})`;frame=false;}
 addEventListener('scroll',()=>{if(!frame){frame=true;requestAnimationFrame(updateProgress);}},{passive:true});addEventListener('resize',updateProgress);updateProgress();
 if('ResizeObserver' in window)new ResizeObserver(updateProgress).observe(document.body);
 let printDetails=[];addEventListener('beforeprint',()=>{printDetails=$$('details').map(el=>({el,open:el.open}));printDetails.forEach(({el})=>el.open=true);$$('.reveal').forEach(el=>el.classList.add('visible'));});addEventListener('afterprint',()=>printDetails.forEach(({el,open})=>el.open=open));
 const gallery=$('#heroGallery');
 if(gallery){
  gallery.innerHTML=cases.map((c,i)=>`<div class="hero-portraits gallery-group single-portrait ${i===0?'is-active':''}" role="group" aria-roledescription="diapositiva" aria-label="${i+1} de ${cases.length}: ${e(c.name)}" aria-hidden="${i!==0}"><img src="${e(c.image)}" alt="${e(c.name)} · retrato de archivo" decoding="async"><span class="gallery-person">${e(c.name)}</span></div>`).join('');
  const groups=[...gallery.children],art=$('.hero-art');let current=0,hover=false,focused=false,timer;
  const show=i=>{current=(i+groups.length)%groups.length;groups.forEach((g,n)=>{g.classList.toggle('is-active',n===current);g.setAttribute('aria-hidden',String(n!==current));});$('#galleryCount').textContent=String(current+1).padStart(2,'0')+' / '+String(groups.length).padStart(2,'0');};
  const schedule=()=>{clearInterval(timer);if(!noMotion&&!hover&&!focused&&!document.hidden)timer=setInterval(()=>show(current+1),6500);};
  $('#galleryPrev').addEventListener('click',()=>{show(current-1);schedule();});$('#galleryNext').addEventListener('click',()=>{show(current+1);schedule();});
  art.addEventListener('mouseenter',()=>{hover=true;schedule();});art.addEventListener('mouseleave',()=>{hover=false;schedule();});art.addEventListener('focusin',()=>{focused=true;schedule();});art.addEventListener('focusout',ev=>{if(!art.contains(ev.relatedTarget)){focused=false;schedule();}});document.addEventListener('visibilitychange',schedule);motion.addEventListener('change',schedule);show(0);schedule();
 }
 $$('img').forEach(img=>img.addEventListener('error',()=>{const note=document.createElement('span');note.className='photo-credit';note.textContent='Retrato no disponible: '+img.alt;img.replaceWith(note);},{once:true}));
 reveal();
})();

