const sectionsSticky = document.querySelectorAll(".section-sticky");
const isIntersectingSections = document.querySelectorAll(".position-observer");
document.addEventListener("DOMContentLoaded", () => {
  const options = {
    root: null,
    rootMargin: "-10px 0px",
    threshlod: 0.8,
  };
  let stickyObserver = new IntersectionObserver(beTouching, options);
  isIntersectingSections.forEach((observe) => {
    stickyObserver.observe(observe);
  });
});
// observer function
function beTouching(entries) {
  entries.forEach((entry) => {
    sectionsSticky.forEach((section) => {
      section.classList.toggle("appear", !entry.isIntersecting);
    });
  });
}
