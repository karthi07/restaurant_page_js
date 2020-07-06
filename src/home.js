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

export default function addHomeCtn(element) {
  element.innerHTML = homeHtml;
}