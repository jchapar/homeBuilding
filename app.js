// Display container after spinner
window.onload = () => {
  setTimeout(() => {
    document.querySelector('body').classList.add('display');
  }, 4000)
}

// Hamburger Menu
document.querySelector('.hamburger-menu').addEventListener('click', () => {
  document.querySelector('.container').classList.toggle('change');
});

// Smooth Scroll
document.querySelector('.scroll-btn').addEventListener('click', () => {
  document.querySelector('html').style.scrollBehavior = "smooth";
  setTimeout(() => {
  document.querySelector('html').style.scrollBehavior = "unset";
  }, 100)
})