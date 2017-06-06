var pizzasApp = angular.module('pizzasApp', ['ngRoute', 'controladorPedido', 'controladorPedidos']);

pizzasApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/pedido', {
        templateUrl: 'views/pedido.html',
        controller: 'PedidoPizzas'
      }).
      when('/pedidos', {
        templateUrl: 'views/pedidos.html',
        controller: 'PedidosPizzas'
      }).
      otherwise({
        redirectTo: '/pedido'
      });
  }]);

