export default function decorate(block) {

  const slides = [...block.children];
  let current = 0;

  const container = document.createElement("div");
  container.className = "carousel-container";

  const slidesWrapper = document.createElement("div");
  slidesWrapper.className = "carousel-slides";

  slides.forEach((row, index) => {

    const cols = row.children;

    const slide = document.createElement("div");
    slide.className = "carousel-slide";

    if (index === 0) slide.classList.add("active");

    const img = cols[0].querySelector("img");

    slide.style.backgroundImage = `url(${img.src})`;

    slide.innerHTML = `
      <div class="carousel-content">
        <h2>${cols[1].textContent}</h2>
        <p>${cols[2].textContent}</p>
        <button>${cols[3].textContent}</button>
      </div>
    `;

    slidesWrapper.append(slide);
  });

  container.append(slidesWrapper);

  /* arrows */

  const prev = document.createElement("button");
  prev.className = "carousel-prev";
  prev.textContent = "←";

  const next = document.createElement("button");
  next.className = "carousel-next";
  next.textContent = "→";

  container.append(prev, next);

  /* dots */

  const dots = document.createElement("div");
  dots.className = "carousel-dots";

  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    if (i === 0) dot.classList.add("active");

    dot.addEventListener("click", () => showSlide(i));
    dots.append(dot);
  });

  container.append(dots);

  function showSlide(index) {

    const allSlides = container.querySelectorAll(".carousel-slide");
    const allDots = container.querySelectorAll(".carousel-dots span");

    allSlides.forEach(s => s.classList.remove("active"));
    allDots.forEach(d => d.classList.remove("active"));

    allSlides[index].classList.add("active");
    allDots[index].classList.add("active");

    current = index;
  }

  prev.onclick = () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  };

  next.onclick = () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  };

  block.innerHTML = "";
  block.append(container);
}