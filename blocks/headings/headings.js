export default function decorate(block) {
  // 1. Capture the images from the Google Doc content
  const images = [...block.querySelectorAll('picture')];
  
  // 2. CLEAR THE BLOCK - This deletes those grey boxes forever
  block.innerHTML = '';

  // 3. Create a clean wrapper for the image
  const stage = document.createElement('div');
  stage.className = 'custom-carousel-stage';
  
  images.forEach((img) => {
    const slide = document.createElement('div');
    slide.className = 'custom-carousel-slide';
    slide.append(img);
    stage.append(slide);
  });
  block.append(stage);

  // 4. Create the new controls row
  const controls = document.createElement('div');
  controls.className = 'custom-controls-row';
  controls.innerHTML = `
    <div class="custom-arrows">
      <button class="prev">←</button>
      <button class="next">→</button>
    </div>
    <div class="custom-dot">
      <span class="dot"></span>
    </div>
    <div class="spacer"></div>
  `;
  block.append(controls);

  // 5. Scroll Logic
  const nextBtn = controls.querySelector('.next');
  const prevBtn = controls.querySelector('.prev');

  nextBtn.addEventListener('click', () => {
    stage.scrollBy({ left: stage.clientWidth, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    stage.scrollBy({ left: -stage.clientWidth, behavior: 'smooth' });
  });
}export default function decorate(block) {
  // 1. Capture the images, then wipe the block clean to remove duplicates
  const images = [...block.querySelectorAll('picture')];
  block.innerHTML = ''; 

  // 2. Create the image stage
  const stage = document.createElement('div');
  stage.className = 'panoramic-stage';
  images.forEach((img) => {
    const slide = document.createElement('div');
    slide.className = 'panoramic-slide';
    slide.append(img);
    stage.append(slide);
  });
  block.append(stage);

  // 3. Create a SINGLE controls row
  const controls = document.createElement('div');
  controls.className = 'panoramic-controls';
  controls.innerHTML = `
    <div class="nav-left">
      <button class="prev-btn">←</button>
      <button class="next-btn">→</button>
    </div>
    <div class="nav-center">
      <span class="nav-dot"></span>
    </div>
    <div class="nav-spacer"></div>
  `;
  block.append(controls);

  // 4. Scroll Logic
  const next = controls.querySelector('.next-btn');
  const prev = controls.querySelector('.prev-btn');

  next.addEventListener('click', () => {
    stage.scrollBy({ left: stage.clientWidth, behavior: 'smooth' });
  });
  prev.addEventListener('click', () => {
    stage.scrollBy({ left: -stage.clientWidth, behavior: 'smooth' });
  });
}