pizzasApp.controller('controladorPedidos', ['$scope', 'datos', '$location', function($scope, datos, $location) {
	$scope.pedidos = function() {
    return datos.pedidos;
  }

  $scope.mostrar = function(pedido) {
    var result = '';
    angular.forEach(pedido, function(pizza) {
      if (pizza.cantidad !== 0) 
        result += pizza.cantidad + ' ' + pizza.nombre + ' ';
    });
    return result;
  }

  $scope.seleccionar = function(seleccionado) {
    datos.seleccionar(seleccionado);
    $location.path('./#/pedido')
  };
}]);