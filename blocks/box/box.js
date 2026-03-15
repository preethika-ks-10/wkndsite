export default function decorate(block) {
  const tabs = block.querySelectorAll('p');
  const cards = document.querySelectorAll('.cards ul li');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const category = tab.textContent.trim().toLowerCase();

      /* active tab */
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      cards.forEach((card) => {
        const text = card.innerText.toLowerCase();

        if (category === 'all') {
          card.style.display = '';
        } else if (text.includes(category)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}
