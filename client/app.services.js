class Services {
  constructor($http, $resource, localStorageService) {
    this.localStorageService = localStorageService;
    this.$http = $http;
    this.$resource = $resource;
  }
}

Services.$inject = ['$http', '$resource', 'localStorageService'];

export default Services;
