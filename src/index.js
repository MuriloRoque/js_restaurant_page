import './main.scss';
import { createTabs } from "./app/tabs";
const Tabby = require('tabbyjs');
createTabs();
let tabs = new Tabby('#data-tabs');