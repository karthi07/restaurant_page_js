// eslint-disable-next-line import/no-unresolved
import 'bootstrap/dist/css/bootstrap.min.css';

import addHomeCtn from './home';
import addOrderCtn from './order';
import addContactCtn from './contact';

const contentElement = document.querySelector('#content');

const navElement = document.createElement('nav');
navElement.id = 'navbar';
navElement.classList = 'navbar  fixed-top  navbar-expand-lg navbar-dark  bg-dark';

navElement.innerHTML = `
  <a class="navbar-brand " href="#">JS Restaurant</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collaps kindly make use of document.createElement and document.appendChilde navbar-collapse ml-4" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item px-3 active" id="homeBtn">
        <a class="nav-link" data-id="homeBtn" href="#data">Home </a>
      </li>
      <li class="nav-item px-3" id="orderBtn">
        <a class="nav-link" data-id="orderBtn" href="#main"> Order Food </a>
      </li>
      <li class="nav-item px-3" id="contactBtn">
        <a class="nav-link" data-id="contactBtn" href="#main"> Contact </a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>`;

const mainElement = document.createElement('main');
mainElement.classList = 'container';

contentElement.appendChild(navElement);
contentElement.appendChild(mainElement);

function clearClassList() {
  document.querySelector('#homeBtn').classList = 'nav-item px-3';
  document.querySelector('#orderBtn').classList = 'nav-item px-3';
  document.querySelector('#contactBtn').classList = 'nav-item px-3';
}
// Initial load
addHomeCtn(mainElement);

// Event Listener
document.querySelector('#navbar').addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('nav-link')) {
    clearClassList();
    e.target.parentElement.classList = 'nav-item px-3 active';
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
