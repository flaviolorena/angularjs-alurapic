// criação de modulo, recebe 2 parametros, o nome e as dependencias. o segundo precisa ser declarado mesmo q vazio

angular
  .module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])

  //configuração de rotas
  //definindo a url, o arquivo a ser carregado e o controller responsavel
  .config(function ($routeProvider, $locationProvider) {
    // remove a hash e trabalha com o link direto na url. backend precisa estar preparado
    $locationProvider.html5Mode(true);

    $routeProvider.when('/fotos', {
      templateUrl: 'partials/principal.html',
      controller: 'FotosController',
    });
    $routeProvider.when('/fotos/new', {
      templateUrl: 'partials/foto.html',
      controller: 'FotoController',
    });
    // passa o parametro com : para a pagina de edicao
    $routeProvider.when('/fotos/edit/:fotoId', {
      templateUrl: 'partials/foto.html',
      controller: 'FotoController',
    });
    //redirecionamento caso não exista
    $routeProvider.otherwise({ redirectTo: '/fotos' });
  });
