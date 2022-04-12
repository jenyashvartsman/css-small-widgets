const menu = document.querySelector('.menu');
const menuToggle = document.querySelector('.toggle');
const list = document.querySelectorAll('li');

menuToggle.onclick = () => {
  menu.classList.toggle('active');
  menuToggle.classList.toggle('active');
};

list.forEach((item) => item.addEventListener('click', activeLink));

function activeLink() {
  list.forEach((item) => item.classList.remove('active'));
  this.classList.add('active');
}
