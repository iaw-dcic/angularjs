var jsonPizzas;

var controladorPedido = angular.module('controladorPedido', []);

controladorPedido.controller('PedidoPizzas', function() {
	var pedido = this;
	pedido.pizzas = [];
  angular.forEach(jsonPizzas, function(pizza) {
    pizzaEnPedido = jQuery.extend({}, pizza);
    pizzaEnPedido.cantidad = 0;
    pedido.pizzas.push(pizzaEnPedido);
  });

  pedido.add = function(pizza) {
    if (pizza.cantidad<15)
      pizza.cantidad++;
  };
  pedido.remove = function(pizza) {
    if (pizza.cantidad>0)
      pizza.cantidad--;
  };

	pedido.total = function() {
    var total = 0;
    angular.forEach(pedido.pizzas, function(pizza) {
      total += pizza.cantidad * pizza.precio;
    });
    return total;
  };
});