angular
  .module('alurapic')
  .controller(
    'FotoController',
    function ($scope, $http, $routeParams, cadastroDeFotos) {
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

          //retorno da promise la do serviço, metodo cadastrar
          cadastroDeFotos
            .cadastrar($scope.foto)
            .then((dados) => {
              //objeto retornado de resolve, sendo atribuido no $scope
              $scope.mensagem = dados.mensagem;
              if (dados.inclusao) $scope.foto = {};
            })
            .catch((erro) => {
              console.error(erro);
              $scope.mensagem = dados.mensagem;
            });

          // ******************************************************************************************
          //exemplo usando $http
          // no put, receber 3 parametros, URL (onde), qual a foto (ID) e o novo dado (scope.foto)
          // $http
          //   .put('v1/fotos/' + $scope.foto._id, $scope.foto)
          //   .success(() => {
          //     $scope.mensagem = ` Foto ${$scope.foto.titulo} alterada com sucesso `;
          //   })
          //   .error((erro) => console.log(erro));
          // }
          // $http
          //   .post('v1/fotos', $scope.foto)
          //   .success(() => {
          //     $scope.foto = {};
          //     console.log('sucesso');
          //     $scope.mensagem = 'Foto cadastrada com sucesso';
          //   })
          //   .error((erro) => {
          //     console.log(erro);
          //     $scope.mensagem = 'Foto não cadastrada';
          //   });
        }
      };
    }
  );
