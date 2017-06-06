angular.module('servicio', []).factory('datos', ['$http', function($http){
  var datos = {};
  datos.pedidoActual = [];
  datos.pedidos = [];

  $http.get('data/pizzas.json').
    success(function(data, status, headers, config) {
      datos.pedidoActual = crearPedidoVacio(data);
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
    datos.pedidoActual = pedido;
  };
  
  datos.pedir = function() {
    datos.pedidos.push(datos.pedidoActual);
    datos.pedidoActual = crearPedidoVacio(datos.pedidoActual);
  };

  datos.pedido = function() {
    return datos.pedidoActual;
  }

  return datos;
}])
