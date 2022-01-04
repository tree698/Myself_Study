'use strict';

// Make navbar transparent when it is on the top
const navBar = document.querySelector('#navbar');
const navBarHeight = navBar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  window.scrollY > navBarHeight
    ? navBar.classList.add('navbar--dark')
    : navBar.classList.remove('navbar--dark');
  navBarMenu.classList.remove('open');
});

// Handle scrolling when tapping on the navbar menu
const navBarMenu = document.querySelector('.navbar__menu');
navBarMenu.addEventListener('click', (event) => {
  const target = event.target.dataset.link;
  if (target == null) {
    return;
  }
  scrollIntoView(target);
});

// Toggling navbar menu
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navBarMenu.classList.toggle('open');
});

// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  const scrolledPosition = window.scrollY;
  home.style.opacity = `${(homeHeight - scrolledPosition) / homeHeight}`;
});

// Show arrow-up btn as the window scrolls down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

// Handle click on the arrow-up btn
arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});

// Filtering projets
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
const categoryBtns = document.querySelectorAll('.category__btn');

workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  categoryBtns.forEach((btn) => {
    if (btn.dataset.filter === filter) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  projectContainer.classList.add('anim-out');
  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);
});

function scrollIntoView(selection) {
  const scrollTo = document.querySelector(selection);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}

// intersection observer
// 1. 모든 섹션 요소들을 가져온다
// 2. IntersectionObserver를 이용하여 모든 섹션을 관찰한다
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 한다

const sectionIds = [
  '#home',
  '#about',
  '#skills',
  '#work',
  '#testimonials',
  '#contact',
];

const sections = sectionIds.map((id) => document.querySelector(id));
const navbarItems = sectionIds.map((id) =>
  document.querySelector(`[data-link="${id}"]`)
);

const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    const index = sectionIds.indexOf(entry.target.id);
    if (!entry.isintersecting) {
      if (entry.getBoundingClientRect.y < 0) {
      }
    }
  });
};
const observerOptions = { root: null, rootMargin: '0px', threshold: 0.5 };

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach((section) => observer.observe(section));
