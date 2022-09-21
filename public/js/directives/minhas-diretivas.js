// criação de diretiva, recebe 2 parametros, o nome e as dependencias. o segundo precisa ser declarado mesmo q vazio
angular
  .module('minhasDiretivas', [])
  .directive('meuPainel', function () {
    var ddo = {};

    // A attribute E element, pode ser usado como <div meu-painel> ou <meu-painel>
    ddo.restrict = 'AE';

    // escopo da diretiva
    ddo.scope = {
      // atributos da tag do elemento sendo declarados com @
      titulo: '@titulo',
    };

    //mantem o elemento filho de onde está sendo chamado
    ddo.transclude = true;

    // template html do componente
    ddo.templateUrl = 'js/directives/meu-painel.html';

    return ddo;
  })
  .directive('minhaFoto', function () {
    var ddo = {};
    ddo.restrict = 'AE';
    ddo.scope = {
      titulo: '@titulo',
      url: '@url',
    };
    ddo.template =
      '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}" />';

    return ddo;
  })
  .directive('meuBotaoPerigo', function () {
    var ddo = {};
    ddo.restrict = 'E';
    ddo.scope = {
      // @ faz referencia a string vinda de fora
      // & faz referencia a expressao vinda de fora
      nome: '@',
      acao: '&',
    };
    ddo.template =
      '<button class="btn btn-danger btn-block" ng-click="acao(foto)">{{ nome }}</button>';

    return ddo;
  })
  .directive('meuFocus', function () {
    var ddo = {};

    //declarando que somente vai ser utilizado como atributo
    ddo.restrict = 'A';

    // acesso ao escopo e o elemento em q esta implementado a diretiva
    ddo.link = function (scope, element) {
      //escutador da propriedade focado
      scope.$watch('focado', () => {
        //recebe o evento disparado do broadcast
        scope.$on('fotoCadastrada', () => {
          element[0].focus();
        });
      });
    };
    return ddo;
  });
