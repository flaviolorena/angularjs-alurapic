// $scope injeta as dependencias e permite acesso do controller lá na view
// $http faz requisições ajax, interação com o backend
angular
  .module('alurapic')
  .controller('FotosController', function ($scope, $http) {
    $scope.fotos = [];
    $scope.filtro = '';

    // faz a requisição, caso recebe dados, armazena no array de fotos

    $http
      .get('v1/fotos')
      .success((fotos) => {
        $scope.fotos = fotos;
      })
      .error((erro) => {
        console.log(erro);
      });
  });
