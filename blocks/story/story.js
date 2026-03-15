export default function decorate(block) {
  const rows = [...block.children];
  const wrapper = document.createElement('div');
  wrapper.className = 'related-articles-wrapper';

  rows.forEach((row) => {
    const cols = [...row.children];
    if (cols.length === 0) return;

    const item = document.createElement('div');
    const textContent = cols[0].textContent.trim().toUpperCase();

    // Check if the row is the "SHARE THIS STORY" header
    if (textContent === 'SHARE THIS STORY') {
      item.className = 'related-articles-header';
      const headerText = document.createElement('p');
      headerText.textContent = textContent;
      item.append(headerText);
    } else {
      item.className = 'related-articles-item';

      const title = document.createElement('p');
      title.className = 'related-articles-title';
      title.textContent = textContent;

      const date = document.createElement('p');
      date.className = 'related-articles-date';
      if (cols[1]) {
        date.textContent = cols[1].textContent.trim();
      }

      item.append(title, date);

      // Add selection interactivity
      item.addEventListener('click', () => {
        wrapper.querySelectorAll('.related-articles-item').forEach((i) => i.classList.remove('selected'));
        item.classList.add('selected');
      });
    }

    wrapper.append(item);
  });

  block.replaceChildren(wrapper);
}
