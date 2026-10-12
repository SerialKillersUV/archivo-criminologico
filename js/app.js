'use strict';
(() => {
 const $ = s => document.querySelector(s);
 const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const e = escapeHTML;
 const noMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
 const imageSources = {
  kemper:['Kemper · ficha policial de 1973','https://commons.wikimedia.org/wiki/File:Kempermugshot.jpg'],
  dahmer:['Dahmer · ficha policial de 1991','https://en.wikipedia.org/wiki/File:Jeffrey_Dahmer_Milwaukee_Police_1991_mugshot.jpg'],
  holmes:['Holmes · retrato histórico','https://commons.wikimedia.org/wiki/File:H._H._Holmes.jpg'],
  desalvo:['DeSalvo · fotografía de archivo','https://commons.wikimedia.org/wiki/File:Albert_deSalvo2.jpg'],
  onoprienko:['Onoprienko · retrato de archivo','https://en.wikipedia.org/wiki/File:Anatoly_Onoprienko_mugshot.jpg'],
  ridgway:['Ridgway · ficha policial de 1982','https://commons.wikimedia.org/wiki/File:Gary_Ridgway_1982_Mugshot.jpg'],
  gacy:['Gacy · ficha policial de 1978','https://commons.wikimedia.org/wiki/File:John_Wayne_Gacy_1978_mugshot.jpg'],
  bpb:['Bianchi · ficha policial de 1979 / Buono · ficha policial','https://commons.wikimedia.org/wiki/File:KennethBianchi_1979.jpg'],
  little:['Little · fotografía de archivo','https://commons.wikimedia.org/wiki/File:Samuel_Little.webp']
 };
 const number = c => String(cases.indexOf(c) + 1).padStart(2,'0');
 const portraits = c => (c.images || [{src:c.image,name:c.name}]);
 const portraitMarkup = c => `<div class="portrait-row ${c.images ? 'duo' : ''}">${portraits(c).map(p=>`<img src="${e(p.src)}" alt="${e(p.name)} · fotografía de archivo con fondo eliminado" loading="lazy" decoding="async">`).join('')}</div>`;
 const card = c => `<a class="case-card reveal" href="caso.html?id=${encodeURIComponent(c.id)}"><div class="case-photo-wrap"><span class="case-number" aria-hidden="true">${number(c)}</span>${portraitMarkup(c)}<div class="photo-gradient"></div><div class="case-meta"><span>EXPEDIENTE ${number(c)}</span><span>${e(c.period)}</span></div></div><div class="card-content"><div class="case-title"><h3>${e(c.name)}</h3><span class="arrow" aria-hidden="true">↗</span></div><p class="case-alias">${e(c.alias)}</p></div></a>`;
 let revealObserver;
 function reveal() {
  if(noMotion || !('IntersectionObserver' in window)) return;
  if(!revealObserver) {
   document.body.classList.add('motion-ready');
   revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target);}
   }),{threshold:0.04});
  }
  document.querySelectorAll('.reveal:not(.visible)').forEach((el,i)=>{el.style.setProperty('--reveal-order',i%3);revealObserver.observe(el);});
 }
 const menu=$('.menu-toggle'), nav=$('#siteNav');
 function closeMenu(){nav?.classList.remove('open');menu?.setAttribute('aria-expanded','false');menu?.setAttribute('aria-label','Abrir menú');}
 menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';nav.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');});
 document.addEventListener('keydown',ev=>{if(ev.key==='Escape'){closeMenu();menu?.focus();} if(ev.key==='/' && $('#searchCases') && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName)){ev.preventDefault();$('#searchCases').focus();}});
 nav?.addEventListener('click',ev=>{if(ev.target.closest('a'))closeMenu();});
 window.matchMedia('(min-width:761px)').addEventListener('change',ev=>{if(ev.matches)closeMenu();});
 if($('#featuredCases')) $('#featuredCases').innerHTML=cases.slice(0,3).map(card).join('');
 const search=$('#searchCases'), all=$('#allCases');
 const normalize = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 if(all){
  const render=()=>{
   const q=normalize(search.value.trim());
   const filtered=cases.filter(c=>normalize([c.name,c.alias,c.place].join(' ')).includes(q));
   revealObserver?.disconnect();all.innerHTML=filtered.map(card).join('');
   $('#caseCount').textContent=`${filtered.length} de ${cases.length} expedientes`;
   $('#emptyState').hidden=filtered.length!==0;reveal();
  };
  search.addEventListener('input',render);
  $('#clearFilters').addEventListener('click',()=>{search.value='';render();search.focus();});
  render();
 }
 const sections=[['child','Antecedentes y desarrollo','Reconstrucción biográfica'],['career','Trayectoria criminal','Hechos y cronología'],['victimology','Victimología','Víctimas y contexto'],['mo','Modus operandi','Conductas y procedimientos'],['signature','Conducta expresiva y firma','Lectura conductual · hipótesis'],['investigation','Investigación y resolución','Evidencia y resultado'],['theories','Lecturas criminológicas','Propuestas para el análisis']];
 const linkedText = value => e(value).replace(/\[(\d+(?:, \d+)*)\]/g,(_,numbers)=>numbers.split(', ').map(n=>`<a class="source-ref" href="#source-${n}" aria-label="Consultar fuente ${n}">[${n}]</a>`).join(''));
 if($('#casePage')){
  const id=new URLSearchParams(location.search).get('id')||'kemper';
  const c=cases.find(x=>x.id===id);
  if(!c){document.title='Expediente no encontrado — Archivo Criminológico';$('#casePage').innerHTML='<section class="page-hero"><div class="eyebrow">ARCHIVO</div><h1>Expediente <em>no encontrado.</em></h1><p>Este identificador no corresponde a un caso del archivo.</p><a class="btn btn-red" href="casos.html">Volver a los casos</a></section>';}
  else{
   const d=details[c.id], index=cases.indexOf(c), prev=cases[(index+cases.length-1)%cases.length], next=cases[(index+1)%cases.length], credit=imageSources[c.id];
   document.title=`${c.name} — Archivo Criminológico`;
   $('#casePage').innerHTML=`<section class="case-hero"><div class="case-breadcrumb"><a href="casos.html">← Todos los expedientes</a><span>/</span><span>ARCHIVO ${number(c)}</span></div><div class="case-hero-grid"><div><div class="case-portrait"><span class="case-number" aria-hidden="true">${number(c)}</span>${portraitMarkup(c)}<div class="portrait-labels">${portraits(c).map(p=>`<span>${e(p.name)}</span>`).join('')}</div></div><p class="photo-credit">${e(credit[0])} · fondo eliminado digitalmente a partir de la fotografía.<br><a href="#portraitSource">Procedencia del retrato ↗</a></p></div><div class="case-heading"><div class="eyebrow">EXPEDIENTE CRIMINOLÓGICO / ${number(c)}</div><h1>${e(c.name)}</h1><p class="alias">${e(c.alias)}</p><p class="location">${e(c.place)} · ${e(c.period)}</p><div class="case-facts"><div><span>VÍCTIMAS / ALCANCE DE LA CIFRA</span><strong>${e(c.victims)}</strong></div><div><span>RESOLUCIÓN JUDICIAL</span><strong>${e(c.sentence)}</strong></div></div><p class="case-summary">${e(d.summary)}</p></div></div></section>
   <div class="case-layout"><aside class="case-sidebar"><div class="eyebrow">EN ESTE EXPEDIENTE</div><nav aria-label="Apartados del expediente"><a href="#repaso">Claves de repaso</a><a href="#cronologia">Cronología</a>${sections.map(([key,label])=>`<a href="#${key}">${e(label)}</a>`).join('')}<a href="#fuentes">Fuentes y matices</a></nav><button class="small-button" type="button" id="printCase">Imprimir expediente ↗</button></aside>
   <div class="case-content"><section class="study-summary" id="repaso"><div class="eyebrow">PARA RECORDAR</div><h2>Tres claves del caso</h2><ul>${d.keys.map(k=>`<li>${e(k)}</li>`).join('')}</ul></section><section class="timeline-section" id="cronologia"><h2>La secuencia de los hechos</h2><ol class="timeline">${d.timeline.map(([date,text])=>`<li><time>${e(date)}</time><p>${e(text)}</p></li>`).join('')}</ol></section>
   ${sections.map(([key,label,category],i)=>`<section class="analysis-section reveal" id="${key}"><details class="analysis-detail"><summary><span class="analysis-title"><span>${String(i+1).padStart(2,'0')}</span><h2>${e(label)}</h2></span><span class="detail-toggle" aria-hidden="true">+</span></summary><div class="analysis-body"><p>${linkedText(d[key])}</p><span class="section-category">${e(category)}</span></div></details></section>`).join('')}
   <section class="recall"><div class="eyebrow">COMPRUEBA LO APRENDIDO</div><h2>${e(d.question)}</h2><details><summary>Mostrar respuesta orientativa</summary><p>${e(d.answer)}</p></details></section>
   <div class="academic-note"><span>ALCANCE Y MATICES</span><p>${e(d.caveat)}</p><p>Ampliación documental con fuentes externas. Las lecturas criminológicas son propuestas de análisis; contrástalas con los apuntes de clase para el examen.</p></div>
   <section class="sources-box" id="fuentes"><div class="eyebrow">DOCUMENTACIÓN</div><h2>Fuentes para contrastar</h2><ol>${d.sources.map((s,i)=>`<li id="source-${i+1}"><a href="${e(s.url)}" target="_blank" rel="noopener noreferrer">${e(s.label)} ↗</a></li>`).join('')}</ol><p>Los números entre corchetes remiten a estas fuentes. «Síntesis biográfica» es una fuente secundaria y permite consultar su bibliografía. Los apartados de lectura conductual y teórica formulan preguntas e interpretaciones.</p><p>Marco general: ${sharedSources.map(s=>`<a href="${e(s.url)}" target="_blank" rel="noopener noreferrer">${e(s.label)}</a>`).join(' · ')}.</p><p id="portraitSource">Retrato: <a href="${e(credit[1])}" target="_blank" rel="noopener noreferrer">${e(credit[0])}</a>${c.id==='bpb'?' · <a href="https://commons.wikimedia.org/wiki/File:Angelo_Buono.jpg" target="_blank" rel="noopener noreferrer">Angelo Buono</a>':''}. Recorte del fondo mediante edición asistida; la fotografía original enlazada es la referencia documental.</p></section>
   <nav class="case-navigation" aria-label="Otros expedientes"><a href="caso.html?id=${e(prev.id)}"><span>← EXPEDIENTE ANTERIOR</span>${e(prev.name)}</a><a href="caso.html?id=${e(next.id)}"><span>SIGUIENTE EXPEDIENTE →</span>${e(next.name)}</a></nav></div></div>`;
   $('#printCase').addEventListener('click',()=>window.print());
   const sideLinks=[...document.querySelectorAll('.case-sidebar a')];
   const openLinkedSection=()=>{const target=document.getElementById(location.hash.slice(1));const detail=target?.querySelector('.analysis-detail');if(detail)detail.open=true;};
   sideLinks.forEach(link=>link.addEventListener('click',()=>{const target=document.getElementById(link.hash.slice(1));const detail=target?.querySelector('.analysis-detail');if(detail)detail.open=true;}));
   addEventListener('hashchange',openLinkedSection);openLinkedSection();
   if('IntersectionObserver' in window){const tocObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){sideLinks.forEach(a=>{const active=a.hash===`#${entry.target.id}`;a.classList.toggle('current',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}}),{rootMargin:'-110px 0px -60% 0px',threshold:0});document.querySelectorAll('.case-content section[id]').forEach(s=>tocObserver.observe(s));}
  }
 }
 if($('#comparisonTable')){
  $('#compareSelection').innerHTML=cases.map(c=>`<label><input type="checkbox" value="${e(c.id)}" checked> ${e(c.name)}</label>`).join('');
  function renderComparison(){
   const ids=[...document.querySelectorAll('#compareSelection input:checked')].map(x=>x.value), selected=cases.filter(c=>ids.includes(c.id));
   $('#compareCount').textContent=`${selected.length} casos seleccionados`;
   $('#comparisonTable').innerHTML=`<caption>Comparativa de ${selected.length} expedientes · cifras con su alcance</caption><thead><tr><th scope="col">Caso</th><th scope="col">Contexto / periodo</th><th scope="col">Víctimas</th><th scope="col">Resolución</th><th scope="col">Pregunta de análisis</th></tr></thead><tbody>${selected.length?selected.map(c=>`<tr><th scope="row"><a href="caso.html?id=${e(c.id)}">${e(c.name)} ↗</a></th><td>${e(c.place)}<br>${e(c.period)}</td><td>${e(c.victims)}</td><td>${e(c.sentence)}</td><td>${e(c.focus)}</td></tr>`).join(''):'<tr><td colspan="5">Selecciona al menos un expediente para ver sus datos.</td></tr>'}</tbody>`;
  }
  $('#compareSelection').addEventListener('change',renderComparison);
  $('#selectAll').addEventListener('click',()=>{document.querySelectorAll('#compareSelection input').forEach(c=>c.checked=true);renderComparison();});
  $('#clearSelection').addEventListener('click',()=>{document.querySelectorAll('#compareSelection input').forEach(c=>c.checked=false);renderComparison();});renderComparison();
 }
 const conceptShort = ['Mismo autor. Episodios separados.','El procedimiento para cometer el delito.','La posible dimensión expresiva del delito.','La víctima, su vida y su contexto.','Conductas para evitar la identificación.','Conectar hechos mediante evidencias.','Tres recuentos que no son equivalentes.','Hipótesis que orientan la investigación.','Participación conjunta, aportaciones individuales.','Cómo el autor justifica su conducta.','Preguntas que siguen abiertas.','Interpretar no equivale a diagnosticar.'];
 const conceptGroups = ['PATRONES','CONDUCTA','CONDUCTA','VÍCTIMAS','CONDUCTA','INVESTIGACIÓN','EVIDENCIA','ANÁLISIS','AUTORÍA','ANÁLISIS','INVESTIGACIÓN','ANÁLISIS'];
 const conceptPaths = ['<circle cx="6" cy="12" r="3"/><circle cx="18" cy="12" r="3"/><path d="M9 12h6M6 4v3m12 10v3"/>','<path d="M4 6h10m-4-4 4 4-4 4M20 18H10m4-4-4 4 4 4"/>','<path d="m4 18 4-12 4 8 4-8 4 12M4 21h16"/>','<circle cx="12" cy="7" r="4"/><path d="M4 21v-3a8 8 0 0 1 16 0v3"/>','<path d="M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6zM9 12l2 2 4-4"/>','<circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="12" cy="19" r="2"/><path d="m7 6 10 0M6 8l5 9m7-9-5 9"/>','<path d="M5 4h14v17H5zM8 8h8m-8 4h8m-8 4h4"/>','<circle cx="10" cy="10" r="6"/><path d="m14 14 6 6M7 10h6m-3-3v6"/>','<circle cx="8" cy="7" r="3"/><circle cx="17" cy="8" r="3"/><path d="M2 21v-3a6 6 0 0 1 12 0v3m1-7a5 5 0 0 1 7 4v3"/>','<path d="M4 4h16v12H9l-5 5zM8 8h8m-8 4h5"/>','<circle cx="12" cy="12" r="9"/><path d="M9 9a3 3 0 1 1 4 3c-1 .5-1 1-1 2m0 3h.01"/>','<path d="M12 3v18M3 21h18M5 7h14M5 7l-3 7h6zm14 0-3 7h6z"/>'];
 const conceptIcon=i=>'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+conceptPaths[i]+'</svg>';
 if($('#conceptGrid')){
  $('#conceptGrid').innerHTML=concepts.map(([title,description],i)=>`<article class="concept-card reveal"><div class="concept-top"><span class="concept-index">${String(i+1).padStart(2,'0')} / ${conceptGroups[i]}</span><span class="concept-icon">${conceptIcon(i)}</span></div><h2>${e(title)}</h2><p class="concept-short">${conceptShort[i]}</p><details class="concept-definition"><summary><span class="when-closed">Ver definición</span><span class="when-open">Cerrar definición</span><span class="detail-toggle" aria-hidden="true">+</span></summary><p>${e(description)}</p></details></article>`).join('');
  $('#conceptSources').innerHTML=`<div class="eyebrow">PARA AMPLIAR</div><h2>Marco documental</h2><ol>${sharedSources.map(s=>`<li><a href="${e(s.url)}" target="_blank" rel="noopener noreferrer">${e(s.label)} ↗</a></li>`).join('')}</ol><p>Definiciones orientativas para el estudio. Usa la formulación y los marcos específicos de clase cuando prepares el examen.</p>`;
 }
 let pendingFrame=false;
 const updateProgress=()=>{const height=document.documentElement.scrollHeight-innerHeight;$('.reading-progress').style.transform=`scaleX(${height>0?Math.min(1,Math.max(0,scrollY/height)):0})`;pendingFrame=false;};
 addEventListener('scroll',()=>{if(!pendingFrame){pendingFrame=true;requestAnimationFrame(updateProgress);}},{passive:true});addEventListener('resize',updateProgress);updateProgress();
 let printDetails=[];addEventListener('beforeprint',()=>{printDetails=[...document.querySelectorAll('details')].map(el=>({el,open:el.open}));printDetails.forEach(({el})=>el.open=true);document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));});addEventListener('afterprint',()=>printDetails.forEach(({el,open})=>el.open=open));
 // If an asset fails, retain the name and an explicit availability message.
 document.querySelectorAll('img').forEach(img=>img.addEventListener('error',()=>{const note=document.createElement('span');note.className='photo-credit';note.textContent='Retrato no disponible: '+img.alt;img.replaceWith(note);},{once:true}));
 const gallery=$('#heroGallery');
 if(gallery){
  const people=cases.flatMap(c=>portraits(c));
  const sets=[people.slice(0,3),people.slice(3,6),people.slice(6)];
  gallery.innerHTML=sets.map((set,i)=>`<div class="hero-portraits gallery-group ${i===0?'is-active':''} ${set.length===4?'four-portraits':''}" aria-hidden="${i!==0}">${set.map(p=>`<img src="${e(p.src)}" alt="${e(p.name)} · retrato de archivo" decoding="async">`).join('')}</div>`).join('');
  const groups=[...gallery.children], count=$('#galleryCount'), pause=$('#galleryPause'), art=$('.hero-art');
  let current=0, paused=false, hovering=false, focused=false, timer;
  const show=index=>{current=(index+groups.length)%groups.length;groups.forEach((group,i)=>{group.classList.toggle('is-active',i===current);group.setAttribute('aria-hidden',String(i!==current));});count.textContent=String(current+1).padStart(2,'0')+' / '+String(groups.length).padStart(2,'0');};
  const schedule=()=>{clearInterval(timer);if(!noMotion&&!paused&&!hovering&&!focused&&!document.hidden)timer=setInterval(()=>show(current+1),6500);};
  $('#galleryPrev').addEventListener('click',()=>{show(current-1);schedule();});
  $('#galleryNext').addEventListener('click',()=>{show(current+1);schedule();});
  pause.hidden=noMotion;
  pause.addEventListener('click',()=>{paused=!paused;pause.setAttribute('aria-pressed',String(paused));pause.setAttribute('aria-label',paused?'Reanudar rotación de retratos':'Pausar rotación de retratos');pause.textContent=paused?'▶':'Ⅱ';schedule();});
  art.addEventListener('mouseenter',()=>{hovering=true;schedule();});
  art.addEventListener('mouseleave',()=>{hovering=false;schedule();});
  art.addEventListener('focusin',()=>{focused=true;schedule();});
  art.addEventListener('focusout',ev=>{if(!art.contains(ev.relatedTarget)){focused=false;schedule();}});
  document.addEventListener('visibilitychange',schedule);schedule();
 }
 reveal();
})();
