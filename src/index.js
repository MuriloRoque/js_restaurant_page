import './main.scss';
import { createTabs, createList, createContents } from "./app/tabs";
const Tabby = require('tabbyjs');
createTabs();
createList();
createContents();
let tabs = new Tabby('#data-tabs');