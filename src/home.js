const homeHtml = `
<div id="home" class="position-relative overflow-hidden h-100 p-3 p-md-5 m-md-3 my-auto text-center bg-light">
  <div class="col-md-10 p-lg-5 mx-auto">
    <h1 class="display-4 font-weight-normal">JS Restaurant</h1>
    <p class="lead font-weight-normal my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa qui officia deserunt mollit anim id est laborum.</p>
    <a class="btn btn-outline-secondary" href="#order">Order Food</a>
  </div>
  <div class="product-device shadow-sm d-none d-md-block"></div>
  <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
</div>`;

export function addHomeCtn(element) {
  element.innerHTML = homeHtml;
}

export const addNavbar = () => {
  document.querySelector('#navbar').innerHTML += `
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="navbar-collapse ml-4" id="navbarSupportedContent">
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
};