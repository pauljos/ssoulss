// Minimal client-side search using Fuse.js (fuzzy search)
// Loads /search.json and performs searches in-memory.

async function loadIndex() {
  // Try absolute path first, then relative as a fallback (works with baseurl)
  let res = await fetch('/search.json');
  if (!res.ok) {
    try {
      res = await fetch('search.json');
    } catch (e) {
      return [];
    }
  }
  if (!res.ok) return [];
  return res.json();
}

async function initSearch() {
  const data = await loadIndex();
  const options = {
    keys: ['title', 'excerpt'],
    threshold: 0.4,
    includeMatches: true,
    minMatchCharLength: 2
  };
  // load Fuse from CDN
  if (typeof Fuse === 'undefined') {
    await new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/fuse.js@6.6.2/dist/fuse.min.js';
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }
  const fuse = new Fuse(data, options);
  const input = document.querySelector('#site-search-input');
  const resultsEl = document.querySelector('#site-search-results');
  if (!input || !resultsEl) return;

  function renderResults(items) {
    if (!items || items.length === 0) {
      resultsEl.innerHTML = '<p style="color:#666">No results</p>';
      return;
    }
    const html = items.slice(0,8).map(r => {
      const item = r.item || r;
      return `<a href="${item.url}" style="display:block;padding:8px 10px;border-bottom:1px solid #eef; text-decoration:none;color:inherit;"><strong>${escapeHtml(item.title)}</strong><div style="color:#666;font-size:13px;margin-top:4px">${escapeHtml(item.excerpt || '')}</div></a>`;
    }).join('');
    resultsEl.innerHTML = html;
  }

  function performSearch(q){
    const query = (q || '').trim();
    if (!query) return renderResults([]);
    try {
      const results = fuse.search(query);
      renderResults(results);
    } catch (e){
      console.error('Search error', e);
      renderResults([]);
    }
  }

  input.addEventListener('input', (e) => performSearch(e.target.value));
}

function escapeHtml(s){
  if(!s) return '';
  return s.replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"})[c]);
}

// Hook up modal open/close
function openSearchModal(){
  const modal = document.getElementById('site-search-modal');
  if(!modal) return;
  modal.style.display = 'block';
  const modalInput = document.querySelector('#site-search-input');
  // copy query from inline hero input if present
  const inline = document.querySelector('.hero-search input[type="search"]');
  if(inline && modalInput && inline.value && !modalInput.value){
    modalInput.value = inline.value;
  }
  if(modalInput) { modalInput.focus(); modalInput.dispatchEvent(new Event('input')); }
}
function closeSearchModal(){
  const modal = document.getElementById('site-search-modal');
  if(!modal) return;
  modal.style.display = 'none';
}

window.addEventListener('DOMContentLoaded', () => {
  initSearch().catch(console.error);
  document.querySelectorAll('[data-open-search]').forEach(btn => btn.addEventListener('click', (e)=>{e.preventDefault();openSearchModal()}));
  document.querySelectorAll('[data-close-search]').forEach(btn => btn.addEventListener('click',(e)=>{e.preventDefault();closeSearchModal()}));
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeSearchModal(); });
});
