const homeHtml = document.createElement('div');
homeHtml.id = 'home';
homeHtml.classList = 'position-relative overflow-hidden h-100 p-3 p-md-5 m-md-5 text-center bg-light display-4';
homeHtml.innerHTML = 'JS Restaurant';

export function addHomeCtn(element) {
  element.appendChild(homeHtml);
}

export const addNavbar = () => {
  const navbar = document.createElement('div');
  navbar.classList = 'navbar-collapse ml-4';
  navbar.id = 'navbarSupportedContent';

  const ul = document.createElement('ul');
  ul.classList = 'navbar-nav mr-auto';

  const li1 = document.createElement('li');
  li1.classList = 'nav-item px-3 active';
  li1.id = 'homeBtn';
  const a1 = document.createElement('a');
  a1.classList = 'nav-link';
  a1.setAttribute('data-id', 'homeBtn');
  a1.setAttribute('href', '#home');
  a1.innerHTML = 'Home';
  li1.appendChild(a1);

  ul.appendChild(li1);

  const li2 = document.createElement('li');
  li2.classList = 'nav-item px-3 active';
  li2.id = 'orderBtn';
  const a2 = document.createElement('a');
  a2.classList = 'nav-link';
  a2.setAttribute('data-id', 'orderBtn');
  a2.setAttribute('href', '#order');
  a2.innerHTML = 'Order Food';
  li2.appendChild(a2);

  ul.appendChild(li2);

  const li3 = document.createElement('li');
  li3.classList = 'nav-item px-3 active';
  li3.id = 'contactBtn';
  const a3 = document.createElement('a');
  a3.classList = 'nav-link';
  a3.setAttribute('data-id', 'contactBtn');
  a3.setAttribute('href', '#contact');
  a3.innerHTML = 'Contact';
  li3.appendChild(a3);

  ul.appendChild(li3);

  navbar.appendChild(ul);
  document.querySelector('#navbar').appendChild(navbar);
};