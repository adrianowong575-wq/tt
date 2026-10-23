(() => {
  const $ = id => document.getElementById(id);
  const unit = $('examUnit'), topic = $('examTopic'), count = $('examCount');
  let current = [], chosen = {};
  const shuffle = arr => { const a = [...arr]; for (let i = a.length-1; i > 0; i--) { const j = Math.floor(Math.random()*(i+1)); [a[i],a[j]] = [a[j],a[i]]; } return a; };
  const escapeHTML = str => String(str).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  function init() {
    const units = [...new Set(EXAM_QUESTIONS.map(q=>q.unit))];
    unit.innerHTML = '<option value="all">Todas las unidades</option>' + units.map(u=>`<option value="${escapeHTML(u)}">${escapeHTML(u)}</option>`).join('');
    updateTopics();
  }
  function pool() { return EXAM_QUESTIONS.filter(q => (unit.value==='all'||q.unit===unit.value) && (topic.value==='all'||q.topic===topic.value)); }
  function updateTopics() {
    const topics=[...new Set(EXAM_QUESTIONS.filter(q=>unit.value==='all'||q.unit===unit.value).map(q=>q.topic))];
    topic.innerHTML='<option value="all">Todos los temas</option>'+topics.map(t=>`<option value="${escapeHTML(t)}">${escapeHTML(t)}</option>`).join('');
    updateAvailable();
  }
  function updateAvailable(){const n=pool().length; $('examAvailable').textContent=`${n} preguntas disponibles para esta selección. Cada intento mezcla preguntas y alternativas; aprende la respuesta por su contenido, no por la letra.`;}
  function setup(){ $('examSetup').hidden=false; $('examFormWrap').hidden=true; $('examResults').hidden=true; $('examWarning').textContent=''; }
  function begin(){
    const available=pool(); if(!available.length)return;
    const size=count.value==='all'?available.length:Math.min(Number(count.value),available.length);
    current=shuffle(available).slice(0,size).map(q=>({...q,options:shuffle([q.correct,...q.wrong])})); chosen={};
    $('examForm').innerHTML=current.map((q,i)=>`<fieldset class="exam-question"><legend><span class="exam-qno">${i+1} / ${current.length}</span> ${escapeHTML(q.prompt)}</legend><div class="exam-choices">${q.options.map((answer,j)=>`<label class="exam-choice"><input type="radio" name="question-${i}" value="${j}" /><span>${escapeHTML(answer)}</span></label>`).join('')}</div></fieldset>`).join('');
    $('examProgress').textContent=`0 / ${current.length} respondidas`;
    $('examSetup').hidden=true; $('examResults').hidden=true; $('examFormWrap').hidden=false; $('examWarning').textContent='';
    window.scrollTo({top:0,behavior:'smooth'});
  }
  function finish(){
    const unanswered=current.filter((q,i)=> chosen[i]===undefined).length;
    if(unanswered){$('examWarning').textContent=`Te faltan ${unanswered} ${unanswered===1?'pregunta':'preguntas'} por responder. Completa el examen antes de corregir.`; const index=current.findIndex((q,i)=>chosen[i]===undefined); $('examForm').querySelectorAll('fieldset')[index]?.scrollIntoView({behavior:'smooth',block:'center'}); return;}
    const score=current.reduce((s,q,i)=>s+(q.options[chosen[i]]===q.correct?1:0),0);
    $('examScore').textContent=`${score} de ${current.length} correctas · ${Math.round(score/current.length*100)} %`;
    $('examSummary').textContent=score===current.length?'¡Excelente! Todas correctas 💗':'Aquí puedes repasar tus respuestas. ¡Cada intento te ayuda a aprender!';
    $('examCorrections').innerHTML=current.map((q,i)=>{const selected=q.options[chosen[i]],ok=selected===q.correct;return `<article class="exam-correction ${ok?'is-right':'is-wrong'}"><strong>${ok?'✓ Correcta':'✕ Para repasar'} · ${i+1}. ${escapeHTML(q.prompt)}</strong><p>Tu respuesta: ${escapeHTML(selected)}</p>${ok?'':`<p><b>Respuesta correcta:</b> ${escapeHTML(q.correct)}</p>`}<p class="exam-explanation">${escapeHTML(q.explanation)}</p></article>`}).join('');
    $('examFormWrap').hidden=true;$('examResults').hidden=false;window.scrollTo({top:0,behavior:'smooth'});
  }
  // El botón se encuentra integrado a la misma cuadrícula que las demás tarjetas.
  document.getElementById('buttonsGrid').addEventListener('click', e => { if (e.target.closest('#openExam')) showScreen('examen'); });
  unit.addEventListener('change',updateTopics);topic.addEventListener('change',updateAvailable);
  $('startExam').addEventListener('click',begin);
  $('examQuit').addEventListener('click',setup);
  $('newExam').addEventListener('click',setup);
  $('retryExam').addEventListener('click',begin);
  $('submitExam').addEventListener('click',finish);
  $('examForm').addEventListener('change',e=>{const input=e.target;if(input.matches('input[type="radio"]')){const i=Number(input.name.replace('question-',''));chosen[i]=Number(input.value);$('examProgress').textContent=`${Object.keys(chosen).length} / ${current.length} respondidas`;$('examWarning').textContent='';}});
  init();
})();
