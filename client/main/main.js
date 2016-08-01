import MainController from './main.controller';
import html from './main.html';
import './main.css';
import './background.jpg';

const main = {
  url: '/',
  template: html,
  controller: MainController,
  controllerAs: 'vm',
};

export default main;
