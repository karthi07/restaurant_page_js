// eslint-disable-next-line import/no-unresolved
import 'bootstrap/dist/css/bootstrap.min.css';
import { addHomeCtn, addNavbar } from './home';
import addOrderCtn from './order';
import addContactCtn from './contact';

const contentElement = document.querySelector('#content');

const navElement = document.createElement('nav');
navElement.id = 'navbar';
navElement.classList = 'navbar  fixed-top  navbar-expand-lg navbar-dark  bg-dark';

const a = document.createElement('a');
a.classList = 'navbar-brand ';
a.innerHTML = 'JS Restaurant';
a.href = '#';

navElement.appendChild(a);

const mainElement = document.createElement('main');
mainElement.classList = 'container';

contentElement.appendChild(navElement);
contentElement.appendChild(mainElement);

const clearClassList = () => {
  document.querySelector('#homeBtn').classList = 'nav-item px-3';
  document.querySelector('#orderBtn').classList = 'nav-item px-3';
  document.querySelector('#contactBtn').classList = 'nav-item px-3';
}
// Initial load
addNavbar();
addHomeCtn(mainElement);

// Event Listener
document.querySelector('#navbar').addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('nav-link')) {
    clearClassList();
    e.target.parentElement.classList = 'nav-item px-3 active';
    mainElement.textContent = '';

    switch (e.target.dataset.id) {
      case 'homeBtn':
        addHomeCtn(mainElement);
        break;
      case 'orderBtn':
        addOrderCtn(mainElement);
        break;
      case 'contactBtn':
        addContactCtn(mainElement);
        break;
      default:
        addHomeCtn(mainElement);
        break;
    }
  }
});
