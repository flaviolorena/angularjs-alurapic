angular
  .module('meusServicos', ['ngResource'])
  .factory('recursoFoto', function ($resource) {
    return $resource('v1/fotos/:fotoId', null, {
      update: {
        method: 'PUT',
      },
    });
  })
  .factory('cadastroDeFotos', function (recursoFoto, $q, $rootScope) {
    var servico = {};

    servico.cadastrar = function (foto) {
      // $q para criação de promessas
      return $q(function (resolve, reject) {
        // quando for bem sucedida, entra no resolve e retorna para onde o metodo foi invocado
        if (foto._id) {
          // se houver _id, é porque ja existe e será alterado (PUT), mesma lógica anterior
          recursoFoto.update(
            { fotoId: foto._id },
            foto,
            () => {
              // $rootScope é um scope pai, raiz. porque serviço nao tem $scope
              //dispara o evento para mudar o focus para "voltar"
              $rootScope.$broadcast('fotoCadastrada');

              resolve({
                //envia este objeto como retorno
                mensagem: `Foto ${foto.titulo} atualizada com sucesso`,
                inclusao: false,
              });
            },
            (erro) => {
              console.error(erro);
              reject({
                mensagem: `Não foi possível alterar a foto ${foto.titulo}`,
              });
            }
          );
        } else {
          // caso nao tenha _id, é uma criação (POST)
          recursoFoto.save(
            foto,
            () => {
              $scope.$broadcast('fotoCadastrada');
              resolve({
                mensage: `Foto ${foto.titulo} incluída com sucesso`,
                inclusao: true,
              });
            },
            (erro) => {
              reject({
                mensagem: `Não foi possível incluir a foto ${foto.titulo}`,
              });
              console.error(erro);
            }
          );
        }

        // quando der erro, retorna reject
      });
    };
    return servico;
  });
