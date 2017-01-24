(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (cat) {
    // I changed category to cat as argument above, and config to configu below, just to experiment
    var configu = {};
    if (cat) {
      configu.params = {'category': cat};
    }

    return $http.get(ApiPath + '/menu_items.json', configu).then(function (response) {
      return response.data;
    });
  };

}



})();
