pizzasApp.controller('controladorPedido', ['$scope', 'datos', '$location', function($scope, datos, $location) {
	$scope.pizzas = datos.pedido;
  $scope.pedir = datos.pedir;

  $scope.add = function(pizza) {
    if (pizza.cantidad<15)
      pizza.cantidad++;
  };
  $scope.remove = function(pizza) {
    if (pizza.cantidad>0)
      pizza.cantidad--;
  };

	$scope.total = function() {
    var total = 0;
    angular.forEach(datos.pedido(), function(pizza) {
      total += pizza.cantidad * pizza.precio;
    });
    return total;
  };

  $scope.vacio = function() {
    var result = true;
    angular.forEach(datos.pedido(), function(pizza) {
      if (pizza.cantidad != 0) {
        result = false;
      }
    });
    return result;
  }
}]);