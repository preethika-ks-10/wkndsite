export default function decorate(block) {
  const rows = [...block.children];
  const wrapper = document.createElement('div');
  wrapper.className = 'related-articles-wrapper';

  rows.forEach((row) => {
    const cols = [...row.children];
    if (cols.length === 0) return;

    const item = document.createElement('div');
    const isHeader = cols[0].textContent.trim().toUpperCase() === 'SHARE THIS STORY';

    // Add a specific class to the header so we can style it differently
    item.className = isHeader ? 'related-articles-header' : 'related-articles-item';

    const title = document.createElement('p');
    title.className = 'related-articles-title';
    title.textContent = cols[0].textContent.trim();

    const date = document.createElement('p');
    date.className = 'related-articles-date';
    if (cols[1]) {
      date.textContent = cols[1].textContent.trim();
    }

    item.append(title, date);

    // Only add click functionality if it is NOT the header
    if (!isHeader) {
      item.addEventListener('click', () => {
        wrapper.querySelectorAll('.related-articles-item').forEach((i) => i.classList.remove('selected'));
        item.classList.add('selected');
      });
    }

    wrapper.append(item);
  });

  block.replaceChildren(wrapper);
}
