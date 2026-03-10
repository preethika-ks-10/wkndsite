export default function decorate(block) {

  const rows = [...block.children];

  const logo = rows[0].children[0].textContent;

  const nav = [
    rows[0].children[1].textContent,
    rows[0].children[2].textContent,
    rows[0].children[3].textContent,
    rows[0].children[4].textContent,
  ];

  const socialTitle = rows[1].children[0].textContent;

  const social = [
    rows[1].children[1].textContent,
    rows[1].children[2].textContent,
    rows[1].children[3].textContent,
  ];

  const copyright = rows[2].textContent;
  const desc1 = rows[3].textContent;
  const desc2 = rows[4].textContent;

  block.innerHTML = `
    <div class="footer-top">

      <div class="footer-logo">${logo}</div>

      <div class="footer-nav">
        ${nav.map((n) => `<a href="#">${n}</a>`).join("")}
      </div>

      <div class="footer-social">
        <span>${socialTitle}</span>

        <div class="footer-icons">
          <a href="#">f</a>
          <a href="#">🐦</a>
          <a href="#">📷</a>
        </div>

      </div>

    </div>

    <div class="footer-bottom">
      <p>${copyright}</p>
      <p>${desc1}</p>
      <p>${desc2}</p>
    </div>
  `;
}