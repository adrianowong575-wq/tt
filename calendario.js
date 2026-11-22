// Mini calendario de noviembre 2026 (usa CALENDARIO_NOV de calendario-data.js)
(() => {
  const YEAR = 2026, MONTH = 10; // noviembre (0-based)
  const DIAS = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const FALLBACK = 'images/calendario/placeholder-dia.svg';
  const $ = id => document.getElementById(id);

  function renderCalendar() {
    const grid = $('calGrid');
    if (!grid) return;
    const daysInMonth = new Date(YEAR, MONTH + 1, 0).getDate();
    const offset = (new Date(YEAR, MONTH, 1).getDay() + 6) % 7; // semana empieza en lunes
    const now = new Date();
    const todayNum = now.getFullYear() === YEAR && now.getMonth() === MONTH ? now.getDate() : null;

    let html = '';
    for (let i = 0; i < offset; i++) html += '<span class="cal-blank" aria-hidden="true"></span>';

    for (let d = 1; d <= daysInMonth; d++) {
      const info = CALENDARIO_NOV[d];
      const cls = ['cal-day'];
      if (d === todayNum) cls.push('is-today');
      if (!info) {
        html += `<span class="${cls.join(' ')} is-empty"><b class="cal-num">${d}</b></span>`;
        continue;
      }
      cls.push('has-message');
      if (info.tipo === 'mensaje-especial') cls.push('is-special');
      const label = `${DIAS[new Date(YEAR, MONTH, d).getDay()]} ${d} de noviembre: ${info.titulo}`;
      html += `<button type="button" class="${cls.join(' ')}" data-day="${d}" aria-label="${label}">
        <span class="cal-emoji" aria-hidden="true">${info.emoji}</span>
        <img src="${info.imagen}" alt="" loading="lazy" onerror="this.style.display='none'">
        <b class="cal-num">${d}</b>
        <i class="cal-heart" aria-hidden="true">♥</i>
      </button>`;
    }
    grid.innerHTML = html;

    grid.addEventListener('click', e => {
      const btn = e.target.closest('[data-day]');
      if (btn) openDay(btn.dataset.day);
    });
  }

  function openDay(day, updateHash = true) {
    const d = Number(day);
    const info = CALENDARIO_NOV[d];
    if (!info) return showScreen('calendario', updateHash);

    const wd = DIAS[new Date(YEAR, MONTH, d).getDay()];
    $('dayNumber').textContent = `${wd.toUpperCase()} ${d} · NOVIEMBRE`;
    $('dayEmoji').textContent = info.emoji;
    $('dayTitle').textContent = info.titulo;
    $('dayText').textContent = info.texto;

    const img = $('dayImage');
    img.onerror = () => { img.onerror = null; img.src = FALLBACK; };
    img.src = info.imagen;
    img.alt = `Imagen del ${d} de noviembre`;

    $('dia').classList.toggle('special-message', info.tipo === 'mensaje-especial');
    screens.forEach(s => s.classList.toggle('active', s.id === 'dia'));
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (updateHash) history.pushState({ screen: 'dia', day: d }, '', `#dia-${d}`);
  }

  window.openDay = openDay;
  renderCalendar();
})();
