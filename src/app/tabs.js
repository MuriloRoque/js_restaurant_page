import { createHome } from "./home";
import { createContact } from "./contact";
import { createMenu } from "./menu";

export const createTabs = () => {
  const CONTENT = document.getElementById('content');
  const DATA_TABS = document.createElement('ul');
  const TEXT = ['home', 'contact', 'menu'];
  DATA_TABS.setAttribute('id', 'data-tabs');
  DATA_TABS.setAttribute('role', 'tablist');
  CONTENT.appendChild(DATA_TABS);
  createList(DATA_TABS, TEXT);
  createContents(CONTENT, TEXT);
};

const createList = (DATA_TABS, TEXT) => {
  TEXT.forEach((item) => {
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

const createContents = (CONTENT, TEXT) => {
  TEXT.forEach((item) => {
    let element = document.createElement('div');
    CONTENT.appendChild(element);
    element.setAttribute('id', item)
  });
  createHome();
  createContact();
  createMenu();
};