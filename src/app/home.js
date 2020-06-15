export const createHome = () => {
  const ELEMENT = document.getElementById('home');
  const HEADING = document.createElement('h1');
  const IMAGE = document.createElement('img');
  ELEMENT.appendChild(HEADING);
  ELEMENT.appendChild(IMAGE);
  HEADING.textContent = 'Welcome to our Restaurant page, in here you can contact us by clicking the contact part or check our menu.';
  IMAGE.setAttribute('src', 'src/assets/feijoada.jpg')
};