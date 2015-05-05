var controladorPedido = angular.module('controladorPedido', ['servicio']);

controladorPedido.controller('PedidoPizzas', ['datos', '$location', function(datos, $location) {
	var pedido = this;
	pedido.datos = datos;

  pedido.add = function(pizza) {
    if (pizza.cantidad<15)
      pizza.cantidad++;
  };
  pedido.remove = function(pizza) {
    if (pizza.cantidad>0)
      pizza.cantidad--;
  };

  pedido.pedir = function() {
    pedido.datos.pedir();
  }

	pedido.total = function() {
    var total = 0;
    angular.forEach(pedido.datos.pedido, function(pizza) {
      total += pizza.cantidad * pizza.precio;
    });
    return total;
  };
}]);