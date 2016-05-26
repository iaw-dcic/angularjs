angular.module('servicio', []).factory('datos', ['$http', function($http){
  var datos = {};
  datos.pedido = [];
  datos.pedidos = [];

  $http.get('data/pizzas.json').
    success(function(data, status, headers, config) {
      datos.pedido = crearPedidoVacio(data);
    }).
    error(function(data, status, headers, config) {
      // log error
    });

  function crearPedidoVacio(data) {
    var resultado = [];
    angular.forEach(data, function(pizza) {
      pizzaEnPedido = jQuery.extend({}, pizza);
      pizzaEnPedido.cantidad = 0;
      resultado.push(pizzaEnPedido);
    });
    return resultado;
  }

  datos.seleccionar = function(pedido) {
    datos.pedido = pedido;
  };
  
  datos.pedir = function() {
    datos.pedidos.push(datos.pedido);
    datos.pedido = crearPedidoVacio(datos.pedido);
  };

  return datos;
}])

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

