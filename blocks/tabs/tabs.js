export default function decorate(block) {

  /* ---------- CASE 1 : Adventure page (card filtering) ---------- */

  const cardsBlock = document.querySelector('.cards.tabs');

  if (cardsBlock) {

    const rows = [...block.children];
    const nav = document.createElement('ul');

    rows.forEach((row) => {
      const cols = [...row.children];
      if (!cols.length) return;

      const title = cols[0].textContent.trim();
      const filter = title.toLowerCase();

      const li = document.createElement('li');
      const a = document.createElement('a');

      a.href = '#';
      a.textContent = title;

      a.addEventListener('click', (e) => {
        e.preventDefault();

        block.querySelectorAll('a')
          .forEach((tab) => tab.classList.remove('active'));

        a.classList.add('active');

        const cards = cardsBlock.querySelectorAll('ul > li');

        cards.forEach((card) => {
          const category = (card.dataset.category || '').toLowerCase();

          if (filter === 'all' || category === filter) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });

      li.append(a);
      nav.append(li);
    });

    block.textContent = '';
    block.append(nav);

    return;
  }


  /* ---------- CASE 2 : Normal content tabs ---------- */

  const rows = [...block.children];

  const nav = document.createElement('div');
  nav.className = 'tabs-nav';

  const content = document.createElement('div');
  content.className = 'tabs-content';

  rows.forEach((row, i) => {

    const cols = [...row.children];
    if (cols.length < 2) return;

    const title = cols[0].textContent.trim();
    const panelContent = cols[1];

    const btn = document.createElement('button');
    btn.textContent = title;

    const panel = document.createElement('div');
    panel.className = 'tabs-panel';
    panel.append(panelContent);

    if (i === 0) {
      btn.classList.add('active');
      panel.classList.add('active');
    }

    btn.addEventListener('click', () => {

      block.querySelectorAll('.tabs-nav button')
        .forEach((b) => b.classList.remove('active'));

      block.querySelectorAll('.tabs-panel')
        .forEach((p) => p.classList.remove('active'));

      btn.classList.add('active');
      panel.classList.add('active');

    });

    nav.append(btn);
    content.append(panel);

  });

  block.textContent = '';
  block.append(nav, content);

}