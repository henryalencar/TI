// ─── STARS ───────────────────────────────────────────
const canvas = document.getElementById('stars-canvas');
const ctx = canvas.getContext('2d');
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = document.body.scrollHeight || window.innerHeight;
}

function initStars() {
  stars = [];
  const count = Math.floor((canvas.width * canvas.height) / 6000);
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.2,
      alpha: Math.random() * 0.7 + 0.1,
      speed: Math.random() * 0.4 + 0.05,
      dir: Math.random() > 0.5 ? 1 : -1
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(s => {
    s.alpha += s.speed * 0.02 * s.dir;
    if (s.alpha >= 0.8 || s.alpha <= 0.05) s.dir *= -1;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(201,168,76,${s.alpha})`;
    ctx.fill();
  });
  requestAnimationFrame(drawStars);
}

resizeCanvas(); initStars(); drawStars();
window.addEventListener('resize', () => { resizeCanvas(); initStars(); });

// ─── HOUSE CONFIG ─────────────────────────────────────
const HOUSE_CONFIG = {
  Gryffindor: { pt: 'Grifinória', emoji: '🦁', bg: 'linear-gradient(135deg,#2a0001,#1a1005)', border: '#d3a625', text: '#d3a625' },
  Slytherin:  { pt: 'Sonserina',  emoji: '🐍', bg: 'linear-gradient(135deg,#071a10,#0d1a0d)', border: '#4a7a5a', text: '#b8d4c0' },
  Ravenclaw:  { pt: 'Corvinal',   emoji: '🦅', bg: 'linear-gradient(135deg,#03071a,#0a0d20)', border: '#946b2d', text: '#9aacde' },
  Hufflepuff: { pt: 'Lufa-Lufa',  emoji: '🦡', bg: 'linear-gradient(135deg,#1a1505,#201a08)', border: '#ecb939', text: '#ecb939' },
  '':         { pt: 'Desconhecida', emoji: '✨', bg: 'linear-gradient(135deg,#0d0d1a,#151520)', border: 'rgba(201,168,76,0.2)', text: '#c9a84c' }
};

function houseCfg(h) { return HOUSE_CONFIG[h] || HOUSE_CONFIG['']; }

// ─── API + STATIC DATA ────────────────────────────────
const STATIC_IMAGES = {
  '9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8': 'https://ik.imagekit.io/hpapi/harry.jpg',
  '4c7e6819-a91a-45b2-a454-f931e4a7cce3': 'https://ik.imagekit.io/hpapi/hermione.jpeg',
  'c3b1f9a5-b87b-48bf-b00d-95b093ea6390': 'https://ik.imagekit.io/hpapi/ron.jpg',
  'af95bd8a-dfae-45bb-bc69-533860d34129': 'https://ik.imagekit.io/hpapi/draco.jpg',
  'd5c4daa3-c726-426a-aa98-fb40f3fba816': 'https://ik.imagekit.io/hpapi/cedric.png',
  '8f9aa40b-5d7c-441e-ad32-4564ecda3b70': 'https://ik.imagekit.io/hpapi/cho.jpg',
  '3db6dc51-b461-4fa4-a6e4-b1ff352221c5': 'https://ik.imagekit.io/hpapi/neville.jpg',
  '861c4cde-2f0f-4796-8d8f-9492e74b2573': 'https://ik.imagekit.io/hpapi/luna.jpg',
  '1cd6dc64-01a9-4379-9cfd-1a7167ba1bb1': 'https://ik.imagekit.io/hpapi/ginny.jpg',
  '04f9eb45-d843-4e29-a7d3-0bd49ed87f85': 'https://ik.imagekit.io/hpapi/crabbe.jpg',
};

const HOUSE_EMOJIS = { Gryffindor:'🦁', Slytherin:'🐍', Ravenclaw:'🦅', Hufflepuff:'🦡' };

let allStudents = [];
let filteredStudents = [];

async function fetchStudents() {
  try {
    const res = await fetch('https://hp-api.onrender.com/api/characters/students');
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    return data.map(s => ({
      ...s,
      image: STATIC_IMAGES[s.id] || s.image || ''
    }));
  } catch (e) {
    console.error(e);
    return null;
  }
}

// ─── RENDER ───────────────────────────────────────────
function housePtName(h) {
  return (HOUSE_CONFIG[h] || HOUSE_CONFIG['']).pt;
}

function getHouseClass(h) {
  const map = { Gryffindor:'house-gryffindor', Slytherin:'house-slytherin', Ravenclaw:'house-ravenclaw', Hufflepuff:'house-hufflepuff' };
  return map[h] || 'house-unknown';
}

function renderCard(s) {
  const cfg = houseCfg(s.house);
  const alive = s.alive;
  const imgHtml = s.image
    ? `<img class="card-img" src="${s.image}" alt="${s.name}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=card-placeholder>${cfg.emoji}</div>'">`
    : `<div class="card-placeholder">${cfg.emoji}</div>`;

  const wand = s.wand;
  const wandStr = wand && wand.wood ? `${wand.wood}, ${wand.core || '?'}, ${wand.length ? wand.length + '"' : '?'}` : 'Desconhecida';
  const bday = s.dateOfBirth || (s.yearOfBirth ? `${s.yearOfBirth}` : '—');
  const patronus = s.patronus || '—';
  const ancestry = s.ancestry || '—';

  return `
    <div class="card ${getHouseClass(s.house)}" data-id="${s.id}">
      <div class="card-inner">
        <div class="card-front">
          <div class="card-img-wrap">${imgHtml}</div>
          <div class="card-info">
            <div class="card-name">${s.name}</div>
            <span class="card-house-badge">${cfg.emoji} ${cfg.pt || s.house || 'Sem casa'}</span>
          </div>
        </div>
        <div class="card-back" style="border-color:${cfg.border}">
          <div>
            <div class="back-name">${s.name}</div>
            <div class="back-detail"><span class="icon">📅</span><span class="label">Nascimento</span>${bday}</div>
            <div class="back-detail"><span class="icon">🐾</span><span class="label">Patrono</span>${patronus}</div>
            <div class="back-detail"><span class="icon">🩸</span><span class="label">Origem</span>${ancestry}</div>
            <div class="back-detail">
              <span class="icon">${alive ? '💚' : '💀'}</span>
              <span class="label">Status</span>
              <span class="status-dot" style="background:${alive?'#4caf50':'#f44336'}"></span>
              ${alive ? 'Vivo' : 'Falecido'}
            </div>
          </div>
          <div class="back-actor">${s.actor ? '🎬 ' + s.actor : ''}</div>
        </div>
      </div>
    </div>`;
}

function renderGrid(students) {
  const grid = document.getElementById('grid');
  if (!students.length) {
    grid.innerHTML = '<div class="empty">Nenhum aluno encontrado...</div>';
    return;
  }
  grid.innerHTML = students.map(renderCard).join('');
  // resize canvas after DOM update
  setTimeout(() => { resizeCanvas(); }, 100);
}

function updateStats() {
  const total = filteredStudents.length;
  const alive = filteredStudents.filter(s => s.alive).length;
  const houses = {};
  filteredStudents.forEach(s => { houses[s.house || ''] = (houses[s.house || ''] || 0) + 1; });
  const topHouse = Object.entries(houses).sort((a,b)=>b[1]-a[1])[0];
  const bar = document.getElementById('stats-bar');
  bar.innerHTML = `
    <div class="stat-item">Exibindo <span>${total}</span> alunos</div>
    <div class="stat-item">Vivos <span>${alive}</span> · Falecidos <span>${total-alive}</span></div>
    ${topHouse ? `<div class="stat-item">Maior turma <span>${housePtName(topHouse[0])} (${topHouse[1]})</span></div>` : ''}
  `;
}

function applyFilters() {
  const q = document.getElementById('search').value.toLowerCase();
  const houseBtn = document.querySelector('.house-btn.active');
  const house = houseBtn ? houseBtn.dataset.house : '';
  filteredStudents = allStudents.filter(s => {
    const matchName = s.name.toLowerCase().includes(q) ||
      (s.alternate_names || []).some(n => n.toLowerCase().includes(q));
    const matchHouse = house === '' || s.house === house;
    return matchName && matchHouse;
  });
  renderGrid(filteredStudents);
  updateStats();
}

// ─── MODAL ────────────────────────────────────────────
function openModal(student) {
  const s = student;
  const cfg = houseCfg(s.house);
  const wand = s.wand;
  const wandDesc = wand && wand.wood
    ? `${wand.wood} · Núcleo: ${wand.core || '?'} · Comprimento: ${wand.length ? wand.length + '"' : 'desconhecido'}`
    : 'Varinha desconhecida';

  const imgHtml = s.image
    ? `<img src="${s.image}" alt="${s.name}" style="width:100%;height:100%;object-fit:cover;object-position:top;filter:sepia(10%) contrast(1.05)">`
    : `<div class="modal-img-placeholder">${cfg.emoji}</div>`;

  const aliases = (s.alternate_names || []).filter(Boolean);

  const html = `
    <div class="modal-img-wrap">${imgHtml}</div>
    <div class="modal-title">${s.name}</div>
    <span class="modal-house-tag" style="background:${cfg.bg.replace('linear-gradient(135deg,','').split(',')[0]};border:1px solid ${cfg.border};color:${cfg.text}">
      ${cfg.emoji} ${cfg.pt || s.house || 'Sem casa'}
    </span>

    <div class="modal-row"><span class="modal-label">Ator/Atriz</span><span class="modal-val">${s.actor || '—'}</span></div>
    <div class="modal-row"><span class="modal-label">Status</span>
      <span class="modal-val">
        <span class="status-dot" style="background:${s.alive?'#4caf50':'#f44336'}"></span>
        ${s.alive ? 'Vivo(a)' : 'Falecido(a)'}
      </span>
    </div>

    <div class="modal-section">
      <div class="modal-section-title">✦ Informações Pessoais</div>
      <div class="modal-row"><span class="modal-label">Nascimento</span><span class="modal-val">${s.dateOfBirth || (s.yearOfBirth ? s.yearOfBirth : '—')}</span></div>
      <div class="modal-row"><span class="modal-label">Origem</span><span class="modal-val">${s.ancestry || '—'}</span></div>
      <div class="modal-row"><span class="modal-label">Espécie</span><span class="modal-val">${s.species || '—'}</span></div>
      <div class="modal-row"><span class="modal-label">Olhos</span><span class="modal-val">${s.eyeColour || '—'}</span></div>
      <div class="modal-row"><span class="modal-label">Cabelo</span><span class="modal-val">${s.hairColour || '—'}</span></div>
    </div>

    <div class="modal-section">
      <div class="modal-section-title">🪄 Magia</div>
      <div class="modal-row"><span class="modal-label">Patrono</span><span class="modal-val">${s.patronus || '—'}</span></div>
      <div class="modal-row" style="flex-direction:column;gap:0.3rem">
        <span class="modal-label">Varinha</span>
        <div class="wand-detail">${wandDesc}</div>
      </div>
    </div>

    ${aliases.length ? `
    <div class="modal-section">
      <div class="modal-section-title">📜 Apelidos & Nomes Alternativos</div>
      <div class="alias-list">${aliases.map(a=>`<span class="alias-tag">${a}</span>`).join('')}</div>
    </div>` : ''}

    ${s.alternate_actors?.length ? `
    <div class="modal-section">
      <div class="modal-section-title">🎬 Outros Atores</div>
      <div class="alias-list">${s.alternate_actors.map(a=>`<span class="alias-tag">${a}</span>`).join('')}</div>
    </div>` : ''}
  `;

  document.getElementById('modal-content').innerHTML = html;
  document.getElementById('modal-overlay').classList.add('open');
}

document.getElementById('modal-close').addEventListener('click', () => {
  document.getElementById('modal-overlay').classList.remove('open');
});

document.getElementById('modal-overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modal-overlay'))
    document.getElementById('modal-overlay').classList.remove('open');
});

document.getElementById('grid').addEventListener('click', e => {
  const card = e.target.closest('.card');
  if (!card) return;
  const id = card.dataset.id;
  const student = allStudents.find(s => s.id === id);
  if (student) openModal(student);
});

// ─── INIT ─────────────────────────────────────────────
document.getElementById('search').addEventListener('input', applyFilters);

document.querySelectorAll('.house-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.house-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilters();
  });
});

(async () => {
  const loader = document.getElementById('loader');
  const data = await fetchStudents();
  loader.style.display = 'none';

  if (!data) {
    document.getElementById('grid').innerHTML = `
      <div class="error-msg" style="grid-column:1/-1">
        <p>⚠️ Não foi possível conectar à API.<br><em>Tente novamente em alguns instantes.</em></p>
      </div>`;
    return;
  }

  allStudents = data;
  filteredStudents = [...allStudents];
  renderGrid(filteredStudents);
  updateStats();
})();


