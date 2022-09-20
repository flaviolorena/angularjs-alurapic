angular
  .module('alurapic')
  .controller('FotoController', function ($scope, $http, $routeParams) {
    $scope.foto = {};
    $scope.filtro = '';
    $scope.mensagem = '';

    // recebo o parametro atraves da URL, faco um get e monto o objeto $scope.foto
    if ($routeParams.fotoId) {
      console.log($routeParams.fotoId);
      $http
        .get('v1/fotos/' + $routeParams.fotoId)
        .success((foto) => {
          $scope.foto = foto;
        })
        .error((erro) => console.log(erro));
    }

    $scope.submeter = function () {
      // verifica se o formulario (pelo name) é valido
      if ($scope.formulario.$valid) {
        // caso exista um id na foto q esta no formulario, entra na condição pra fazer um put
        if ($scope.foto._id) {
          // no put, receber 3 parametros, URL (onde), qual a foto (ID) e o novo dado (scope.foto)
          $http
            .put('v1/fotos/' + $scope.foto._id, $scope.foto)
            .success(() => {
              $scope.mensagem = ` Foto ${$scope.foto.titulo} alterada com sucesso `;
            })
            .error((erro) => console.log(erro));
        }
        $http
          .post('v1/fotos', $scope.foto)
          .success(() => {
            $scope.foto = {};
            console.log('sucesso');
            $scope.mensagem = 'Foto cadastrada com sucesso';
          })
          .error((erro) => {
            console.log(erro);
            $scope.mensagem = 'Foto não cadastrada';
          });
      }
    };
  });
