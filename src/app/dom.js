export const createTabs = () => {
  const CONTENT = document.getElementById('content');
  const DATA_TABS = document.createElement('ul');
  DATA_TABS.setAttribute('id', 'data-tabs');
  CONTENT.appendChild(DATA_TABS);
};

export const createList = () => {
  const DATA_TABS = document.getElementById('data-tabs');
  let text = ['home', 'contact', 'menu'];
  text.forEach((item) => {
    let element = document.createElement('li');
    let anchor = document.createElement('a');
    DATA_TABS.appendChild(element);
    element.appendChild(anchor);
    anchor.setAttribute('href', `#${item}`);
    anchor.textContent = `${item}`;
  });
  DATA_TABS.firstChild.setAttribute('id', 'data-tabby-default');
};