import angular from 'angular';
import 'angular-animate';
import 'angular-messages';
import 'angular-local-storage';
import 'angular-aria';
import 'angular-cookies';
import 'angular-ui-router';
import 'angular-resource';
import 'angular-sanitize';
import './app.css';
import Config from './app.config';
import Run from './app.run';
import Routes from './app.routes';
import Services from './app.services';

angular.module('kp', [
  'LocalStorageModule',
  'ngMessages',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
])
  .config(Config)
  .config(Routes)
  .run(Run)
  .service('appServices', Services);
