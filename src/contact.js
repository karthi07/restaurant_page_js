const contactHtml = document.createElement('div');
contactHtml.id = 'contact';
contactHtml.classList = 'position-relative overflow-hidden h-100 p-3 p-md-5 m-md-5 text-center bg-light display-4';
contactHtml.innerHTML = 'Contact us - contact@info.com';

export default function addContactCtn(element) {
  element.appendChild(contactHtml);
}