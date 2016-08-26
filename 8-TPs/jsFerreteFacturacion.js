/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var app = angular.module("FerreteFacturacion",[]);
app.controller("controladorFacturacion",function($scope)
	{
		//$scope.test = "Hola angular";
		$scope.datos={};
		$scope.datos.precioUno = '12';
		$scope.datos.precioDos = '15';
		$scope.datos.precioTres = '2';
		$scope.rdo='';
		$scope.Sumar=function()
		{
			$scope.rdo=Number($scope.datos.precioUno)+Number($scope.datos.precioDos)+Number($scope.datos.precioTres);
		}
		$scope.Promedio=function()
		{
			$scope.rdo=(Number($scope.datos.precioUno)+Number($scope.datos.precioDos)+Number($scope.datos.precioTres))/3;
		}
		$scope.PrecioFinal=function()
		{
			$scope.rdo=(Number($scope.datos.precioUno)+Number($scope.datos.precioDos)+Number($scope.datos.precioTres))*1.21;
		}
	});