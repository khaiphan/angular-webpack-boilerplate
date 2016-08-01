const config = (
  $logProvider,
  $compileProvider,
  $urlRouterProvider,
  $locationProvider
) => {
  $urlRouterProvider.otherwise('/');
  $logProvider.debugEnabled(false);
  $compileProvider.debugInfoEnabled(false);
  $locationProvider.html5Mode(true);
};

config.$inject = [
  '$logProvider',
  '$compileProvider',
  '$urlRouterProvider',
  '$locationProvider',
];

export default config;
