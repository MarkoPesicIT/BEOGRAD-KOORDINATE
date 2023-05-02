const navbar = document.querySelector('#navbar');
const pages = document.querySelectorAll('.page');

navbar.addEventListener('click', function(event) {
  event.preventDefault();
  const target = event.target;
  if (target.tagName === 'A') {
    const href = target.getAttribute('href');
    const currentPage = document.querySelector('.page.current');
    const newPage = document.querySelector(href);
    currentPage.classList.add('left');
    newPage.classList.add('current');
    newPage.classList.remove('right');
    setTimeout(function() {
      currentPage.classList.remove('current');
      currentPage.classList.remove('left');
      newPage.classList.remove('right');
    }, 500);
  }
});

const navbarHeight = document.querySelector('.navbar').offsetHeight;
const pageContainer = document.querySelector('.page-container');
pageContainer.classList.add('page-transition');
pageContainer.style.height = `calc(100vh - ${navbarHeight}px)`;


