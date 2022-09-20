// criação de diretiva, recebe 2 parametros, o nome e as dependencias. o segundo precisa ser declarado mesmo q vazio
angular.module('minhasDiretivas', []).directive(
  'meuPainel',
  function () {
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
  }
  // 'minhaFoto',
  // function () {
  //   var ddo = {};
  //   ddo.restrict = 'AE';
  //   ddo.scope = {
  //     titulo: '@titulo',
  //     url: '@url',
  //   };
  //   ddo.transclude = true;
  //   ddo.templateUrl = 'js/directives/minha-foto.html';
  //   return ddo;
  // }
);
