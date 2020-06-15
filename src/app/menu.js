const createMenu = () => {
  const ELEMENT = document.getElementById('menu');
  const HEADING = document.createElement('h1');
  const IMAGE = document.createElement('img');
  ELEMENT.appendChild(HEADING);
  ELEMENT.appendChild(IMAGE);
  HEADING.textContent = 'Check our menu bellow:';
  IMAGE.setAttribute('src', 'src/assets/menu.jpg');
};
export default createMenu;