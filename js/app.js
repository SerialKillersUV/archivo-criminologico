document.addEventListener("DOMContentLoaded",()=>{
  const path=location.pathname.split("/").pop()||"index.html";
  document.querySelector(".menu-toggle")?.addEventListener("click",()=>document.querySelector("nav").classList.toggle("open"));

  function card(c){
    return `<a class="case-card" href="caso.html?id=${c.id}">
      <div class="case-top"><span class="case-index">${String(cases.indexOf(c)+1).padStart(2,"0")}</span><span>${c.period}</span></div>
      <div class="case-monogram">${c.accent}</div>
      <div class="case-body"><div><h3>${c.name}</h3><p>${c.alias}</p></div><span class="arrow">↗</span></div>
      <div class="tags">${c.tags.map(t=>`<span>${t}</span>`).join("")}</div>
    </a>`;
  }
  const featured=document.querySelector("#featuredCases"); if(featured) featured.innerHTML=cases.slice(0,3).map(card).join("");
  const all=document.querySelector("#allCases");
  const search=document.querySelector("#searchCases");
  function renderCases(){
    if(!all)return;
    const q=(search?.value||"").toLowerCase();
    const filtered=cases.filter(c=>[c.name,c.alias,c.place,...c.tags].join(" ").toLowerCase().includes(q));
    all.innerHTML=filtered.map(card).join("");
    const count=document.querySelector("#caseCount"); if(count) count.textContent=`${filtered.length} expediente${filtered.length!==1?"s":""}`;
  }
  if(all){renderCases(); search?.addEventListener("input",renderCases);}
  const table=document.querySelector("#comparisonTable");
  if(table){
    const rows=[
      ["Caso","Lugar","Periodo","Víctimas","Enfoques / conceptos"],
      ...cases.map(c=>[c.name,c.place,c.period,c.victims,c.tags.join(" · ")])
    ];
    table.innerHTML=rows.map((r,i)=>`<tr>${r.map((x,j)=>i===0?`<th>${x}</th>`:`<td>${x}</td>`).join("")}</tr>`).join("");
  }
  const cg=document.querySelector("#conceptGrid"); if(cg) cg.innerHTML=concepts.map((c,i)=>`<article class="concept-card"><span>${String(i+1).padStart(2,"0")}</span><h3>${c[0]}</h3><p>${c[1]}</p></article>`).join("");
});