export default function decorate(block) {

  const firstRow = block.children[0].children;
  
  const logo = firstRow[0].textContent;
  const navItems = [firstRow[1], firstRow[2], firstRow[3], firstRow[4]];
  const follow = firstRow[5];
  const icons = [firstRow[6], firstRow[7], firstRow[8]];

  const top = document.createElement("div");
  top.className = "footer-top";

  const logoDiv = document.createElement("div");
  logoDiv.className = "footer-logo";
  logoDiv.textContent = logo;

  const navDiv = document.createElement("div");
  navDiv.className = "footer-nav";
  navItems.forEach(n => {
    const a = document.createElement("a");
    a.textContent = n.textContent;
    a.href = "#";
    navDiv.append(a);
  });

  const socialDiv = document.createElement("div");
  socialDiv.className = "footer-social";

  const title = document.createElement("span");
  title.textContent = follow.textContent;

  const iconsBox = document.createElement("div");
  iconsBox.className = "footer-icons";

  icons.forEach(i => {
    const a = document.createElement("a");
    a.textContent = i.textContent;
    a.href = "#";
    iconsBox.append(a);
  });

  socialDiv.append(title, iconsBox);

  top.append(logoDiv, navDiv, socialDiv);

  block.prepend(top);
}