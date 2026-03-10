export default function decorate(block) {
  const container = document.createElement("div");
  container.className = "footer-container";

  while (block.firstChild) {
    container.append(block.firstChild);
  }

  block.append(container);
}