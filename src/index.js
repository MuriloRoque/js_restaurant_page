import './main.scss';
import createTabs from './app/tabs';

const Tabby = require('tabbyjs'); // eslint-disable-line import/no-extraneous-dependencies

createTabs();
const tabs = new Tabby('#data-tabs');
tabs.setup();