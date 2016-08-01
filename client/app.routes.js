import main from './main/main';

const Routes = ($stateProvider) => {
  $stateProvider
    .state('index', main);
};

Routes.$inject = ['$stateProvider'];

export default Routes;
