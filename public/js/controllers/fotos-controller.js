// $scope injeta as dependencias e permite acesso do controller lá na view
// $http faz requisições ajax, interação com o backend
angular
  .module('alurapic')
  .controller('FotosController', function ($scope, $http) {
    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    // faz a requisição, caso recebe dados, armazena no array de fotos

    $http
      .get('v1/fotos')
      .success((fotos) => {
        $scope.fotos = fotos;
      })
      .error((erro) => {
        console.log(erro);
      });

    $scope.remover = function (foto) {
      // delete recebe a url e o id do objeto a deletar
      $http
        .delete('v1/fotos/' + foto._id)
        .success(() => {
          var indiceFoto = $scope.fotos.indexOf(foto);
          $scope.fotos.splice(indiceFoto, 1);
          $scope.mensagem = `Foto ${foto.titulo} removida com sucesso`;
        })
        .error(() => {
          $scope.mensagem = `Foto ${foto.titulo} não foi removida`;
          console.log('Erro ao deletar');
        });
    };
  });
