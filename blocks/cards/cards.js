import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {

  const isMagazine = block.classList.contains('magazine');
  const isTabs = block.classList.contains('tabs');

  const ul = document.createElement('ul');
  const items = [...block.children];

  items.forEach((row) => {

    const li = document.createElement('li');

    // Tabs category logic
    let category = '';
    if (isTabs && row.children[2]) {
      category = row.children[2].textContent.trim().toLowerCase();
      li.dataset.category = category;
    }

    // Move row content into li
    while (row.firstElementChild) {
      li.append(row.firstElementChild);
    }

    [...li.children].forEach((div, index) => {

      // Hide category column for tabs
      if (isTabs && index === 2) {
        div.remove();
        return;
      }

      if (div.children.length === 1 && div.querySelector('picture')) {
        div.className = 'cards-card-image';
      } else {

        div.className = 'cards-card-body';

        const title = div.querySelector('h1, h2, h3, h4, h5, h6, a');

        if (title && title.tagName !== 'H3') {
          const h3 = document.createElement('h3');
          h3.innerHTML = title.innerHTML;
          title.replaceWith(h3);
        }
      }
    });

    /* -------- MAGAZINE LOCK BADGE -------- */

    if (isMagazine) {

      const body = li.querySelector('.cards-card-body');

      if (body) {

        const badge = document.createElement('div');
        badge.className = 'magazine-badge';
        badge.innerHTML = '<span class="lock-icon">🔒</span>';

        body.prepend(badge);

      }

    }

    ul.append(li);

  });

  /* -------- IMAGE OPTIMIZATION -------- */

  ul.querySelectorAll('picture > img').forEach((img) =>
    img.closest('picture').replaceWith(
      createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]),
    ),
  );

  block.replaceChildren(ul);

}