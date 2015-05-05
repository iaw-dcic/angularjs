var controladorPedido = angular.module('controladorPedidos', ['servicio']);

controladorPedido.controller('PedidosPizzas', ['datos', '$location', function(datos, $location) {
	var pedidos = this;
	pedidos.datos = datos;

  pedidos.mostrar = function(pedido) {
    var result = '';
    angular.forEach(pedido, function(pizza) {
      if (pizza.cantidad !== 0) 
        result += pizza.cantidad + ' ' + pizza.nombre + ' ';
    });
    return result;
  }

  pedidos.seleccionar = function(seleccionado) {
    pedidos.datos.seleccionar(seleccionado);
    $location.path('./#/pedido')
  };
}]);