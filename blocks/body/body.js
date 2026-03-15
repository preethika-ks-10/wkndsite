export default function decorate(block) {
  const ps = block.querySelectorAll('p');

  if (ps.length > 0) {
    // The first paragraph contains "OVERVIEW ITINERARY..."
    ps[0].classList.add('body-nav-links');

    // The rest are regular description paragraphs
    for (let i = 1; i < ps.length; i += 1) {
      ps[i].classList.add('body-description');
    }
  }
}
