export default function decorate(block) {

  const row = block.querySelector(':scope > div');
  const cols = [...row.children];

  block.classList.add('hero-wrapper');

  cols.forEach((col, index) => {

    col.classList.add('hero-col');

    /* detect image column */
    if (col.querySelector('picture')) {
      col.classList.add('columns-img-col');
    }

  });

}