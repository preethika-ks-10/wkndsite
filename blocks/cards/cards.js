import { createOptimizedPicture } from '../../scripts/aem.js';
 
export default function decorate(block) {
  const ul = document.createElement('ul');
  const items = [...block.children];
 
  items.forEach((row, index) => {
    const li = document.createElement('li');
   
    // Safety: Only hide if there are more than 4 items total
    if (items.length > 4 && index >= 4) {
      li.classList.add('hidden-card');
    }
 
    while (row.firstElementChild) li.append(row.firstElementChild);
   
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) {
        div.className = 'cards-card-image';
      } else {
        div.className = 'cards-card-body';
       
        // Ensure Title (H3) and Paragraph (P) exist for styling
        const title = div.querySelector('h1, h2, h3, h4, h5, h6, a');
        if (title && title.tagName !== 'H3') {
            const h3 = document.createElement('h3');
            h3.innerHTML = title.innerHTML;
            title.replaceWith(h3);
        }
      }
    });
    ul.append(li);
  });
 
  ul.querySelectorAll('picture > img').forEach((img) =>
    img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]))
  );
 
  block.replaceChildren(ul);
 
  // --- "All Articles" Button Logic ---
  // Only add the button if we actually have more than 4 articles
  if (items.length > 4) {
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'all-articles-button-container';
   
    const button = document.createElement('button');
    button.textContent = 'ALL ARTICLES';
    button.className = 'all-articles-btn';
   
    button.addEventListener('click', () => {
      block.classList.add('show-all');
     
      // Update the main section heading
      const section = block.closest('.section');
      const heading = section ? section.querySelector('h1, h2') : null;
      if (heading) {
        heading.textContent = 'All Articles';
      }
     
      buttonContainer.remove(); // Clean up button after click
    });
 
    buttonContainer.append(button);
    block.append(buttonContainer);
  }
}