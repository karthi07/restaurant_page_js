
const orderHtml = document.createElement('div');
orderHtml.id = 'order'
orderHtml.classList = 'position-relative overflow-hidden p-3 p-md-5 m-md-3 my-auto text-center display-4 bg-light'

orderHtml.innerHTML = 'Order Food'

const orderimg = document.createElement('img')
orderimg.setAttribute('src','img/order.png')

orderHtml.appendChild(orderimg);

export default function addOrderCtn(element) {
  element.appendChild(orderHtml);
}
