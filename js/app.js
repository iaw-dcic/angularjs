var pizzasApp = angular.module('pizzasApp', ['ngRoute', 'controladorPedido']);

pizzasApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/pedido', {
        templateUrl: 'views/pedido.html',
        controller: 'PedidoPizzas'
      }).
      otherwise({
        redirectTo: '/pedido'
      });
  }]);

