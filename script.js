const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");

document.body.append(highlight);
highlight.classList.add("highlight");
highlight.style.visibility = "hidden";

function doHighlight() {
  const linkCoords = this.getBoundingClientRect();
  const linkCoordsTop = linkCoords.top + window.scrollY;
  highlight.style.width = `${linkCoords.width}px`;
  highlight.style.height = `${linkCoords.height}px`;

  if (highlight.style.visibility === "hidden") {
    highlight.style.transform = `translate(${linkCoords.x}px, ${linkCoordsTop}px)
      `;
    highlight.addEventListener("transitionend", onVisibility);
  } else {
    highlight.removeEventListener("transitionend", onVisibility);
    highlight.style.transform = `translate(${linkCoords.x}px, ${linkCoordsTop}px)
      `;
  }
}

function onVisibility() {
  this.style.visibility = "visible";
}

triggers.forEach((link) => {
  link.addEventListener("mouseenter", doHighlight);
});
