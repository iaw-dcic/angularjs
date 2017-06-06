pizzasApp.controller('controladorPedido', ['datos', '$location', function(datos, $location) {
	var pedido = this;
	pedido.todos = datos.pedido;
  pedido.pedir = datos.pedir;

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
    angular.forEach(pedido.todos(), function(pizza) {
      total += pizza.cantidad * pizza.precio;
    });
    return total;
  };

  pedido.vacio = function() {
    var result = true;
    angular.forEach(pedido.todos(), function(pizza) {
      if (pizza.cantidad != 0) {
        result = false;
      }
    });
    return result;
  }
}]);