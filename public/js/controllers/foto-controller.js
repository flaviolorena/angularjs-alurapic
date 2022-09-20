angular.module('alurapic').controller('FotoController', function ($scope) {
  $scope.foto = {};
  $scope.filtro = '';
  $scope.submeter = function () {
    console.log($scope.foto);
  };
});
