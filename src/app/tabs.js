export const createTabs = () => {
  const CONTENT = document.getElementById('content');
  const DATA_TABS = document.createElement('ul');
  DATA_TABS.setAttribute('id', 'data-tabs');
  DATA_TABS.setAttribute('role', 'tablist');
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
    element.setAttribute('role', 'tabpanel');
    anchor.setAttribute('href', '#' + item);
    anchor.setAttribute('role', 'tab');
    anchor.textContent = item;
  });
  DATA_TABS.firstChild.setAttribute('id', 'data-tabby-default');
  DATA_TABS.firstChild.setAttribute('aria-selected', 'true');
};

export const createContents = () => {
  let text = ['home', 'contact', 'menu'];
  const CONTENT = document.getElementById('content');
  text.forEach((item) => {
    let element = document.createElement('div');
    CONTENT.appendChild(element);
    element.setAttribute('id', item)
  });
};