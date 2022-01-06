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
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navBarMenu.classList.remove('open');
  scrollIntoView(link);
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

// intersection observer
// 1. 모든 섹션 요소들을 가져온다
// 2. IntersectionObserver를 이용하여 모든 섹션을 관찰한다
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 한다

const sectionIDs = [
  '#home',
  '#about',
  '#skills',
  '#work',
  '#testimonials',
  '#contact',
];

const sections = sectionIDs.map((id) => document.querySelector(id));
const navItems = sectionIDs.map((id) =>
  document.querySelector(`li[data-link="${id}"]`)
);

const obsesrverOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3,
};

let selectedNavIndex = 0;
let selectedNavItem = navItems[0];
function selectNavItem(selected) {
  selectedNavItem.classList.remove('active');
  selectedNavItem = selected;
  selectedNavItem.classList.add('active');
}

function scrollIntoView(selection) {
  const scrollTo = document.querySelector(selection);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
  selectNavItem(navItems[sectionIDs.indexOf(selection)]);
}

const observerCallBack = (entries, obsesrver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting && entry.intersectionRatio > 0) {
      const index = sectionIDs.indexOf(`#${entry.target.id}`);
      if (entry.boundingClientRect.y < 0) {
        selectedNavIndex = index + 1;
      } else {
        selectedNavIndex = index - 1;
      }
    }
  });
};

const observer = new IntersectionObserver(observerCallBack, obsesrverOptions);
sections.forEach((section) => observer.observe(section));

document.addEventListener('wheel', () => {
  if (window.scrollY === 0) {
    selectedNavIndex = 0;
  } else if (
    window.scrollY + window.innerHeight ===
    document.body.clientHeight
  ) {
    selectedNavIndex = navItems.length - 1;
  }
  selectNavItem(navItems[selectedNavIndex]);
});
