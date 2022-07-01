// Scroll up
document.getElementById("button-up").addEventListener("click", scrollUp);
function scrollUp() {
  let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollUp);
    window.scrollTo(0, currentScroll - currentScroll / 25);
  }
}
// scale
window.onscroll = () => {
  let scroll = document.documentElement.scrollTop || document.body.scrollTop;
  let buttonUp = document.getElementById("button-up");
  if (scroll >= 500) {
    buttonUp.style.transform = "scale(1)";
  } else if (scroll < 500) {
    buttonUp.style.transform = "scale(0)";
  }
};
