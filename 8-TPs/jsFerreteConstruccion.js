/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

var app = angular.module("FerreteConstruccion",[]);
app.controller("controladorConstruccion",function($scope)
{
	$scope.datos={};
	$scope.datos.largo = '';
	$scope.datos.ancho = '';
	$scope.datos.radio = '';
	$scope.resultado = '';

	$scope.Rectangulo=function()
	{
		$scope.resultado = (Number($scope.datos.largo)*2+Number($scope.datos.ancho)*2)*3;
	}
	$scope.Circulo = function()
	{
		var aux = Number($scope.datos.radio)*3.14;
		$scope.resultado = aux*aux;
	}
	$scope.Materiales = function()
	{
		var largo = Number($scope.datos.largo);
		var ancho = Number($scope.datos.ancho);
		var superficieM2 = ancho*largo;
		var cemento = superficieM2*2;
		var cal = superficieM2*3;

		$scope.resultado= 'Se necesitan '+cemento+ 'bolsas de cemento y '+cal+' bolsas de cal.';
	}


});
