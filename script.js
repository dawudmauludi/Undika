// stiky navbar

window.onscroll = () => {
let header = document.querySelector('.header');

header.classList.toggle('stiky', window.scrollY > 100);
}