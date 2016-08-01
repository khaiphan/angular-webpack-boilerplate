const run = ($rootScope) => {
  const stateChangeStartEvent = $rootScope.$on('$stateChangeStart', () => {
  });
  const stateChangeSuccessEvent = $rootScope.$on('$stateChangeSuccess', () => {
  });
  // Cleanup
  $rootScope.$on('$destroy', () => {
    stateChangeStartEvent();
    stateChangeSuccessEvent();
  });
};

run.$inject = ['$rootScope'];

export default run;
