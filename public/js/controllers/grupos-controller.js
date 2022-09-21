angular
  .module('alurapic')
  .controller('GruposController', function ($scope, $http) {
    $scope.grupos = [];

    $http
      .get('v1/grupos')
      .success((res) => {
        $scope.grupos = res;
      })
      .error((error) => console.error(error));
  });
