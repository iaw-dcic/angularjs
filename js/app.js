var pizzasApp = angular.module('pizzasApp', ['ngRoute', 'servicio']);

pizzasApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/pedido', {
        templateUrl: 'views/pedido.html',
        controller: 'controladorPedido'
      }).
      when('/pedidos', {
        templateUrl: 'views/pedidos.html',
        controller: 'controladorPedidos'
      }).
      otherwise({
        redirectTo: '/pedido'
      });
  }]);

