const orderHtml = `
<div id="order" class="position-relative overflow-hidden p-3 p-md-5 m-md-3 my-auto text-center bg-light">
  <div class="col mx-auto my-3">
    <h1 class="display-4 font-weight-normal">Order Food</h1>
    <div class="row row-cols-1  my-5 row-cols-md-3">
      <div class="col mb-4">
        <div class="card h-100">
          <img src="img/food1.jpeg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.</p>
            <a href="#" class="btn btn-primary">Add to Cart</a>
          </div>
        </div>
      </div>
      <div class="col mb-4">
        <div class="card h-100">
          <img src="img/food2.jpeg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a short card.</p>
            <a href="#" class="btn btn-primary">Add to Cart</a>
          </div>
        </div>
      </div>
      <div class="col mb-4">
        <div class="card h-100">
          <img src="img/food3.jpeg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
              additional content.</p>
            <a href="#" class="btn btn-primary">Add to Cart</a>
          </div>
        </div>
      </div>
      <div class="col mb-4">
        <div class="card h-100">
          <img src="img/food4.jpeg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.</p>
            <a href="#" class="btn btn-primary">Add to Cart</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="product-device shadow-sm d-none d-md-block"></div>
  <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
</div>`;

export default function addOrderCtn(element) {
  element.innerHTML = orderHtml;
}