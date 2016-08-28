
var app = angular.module("PPT2", []);

app.controller("controladorPPT2", function ($scope) {

	var maq;
	$scope.contadorPierde=0;
	$scope.contadorGana=0;
	$scope.contadorEmpate=0;
	$scope.comenzar= function () {

		$scope.eleccionMaquina = Math.floor(Math.random() * 3)+1;
		maq=  $scope.eleccionMaquina;
	};
	function Perder() {
		alert("Perdio!");
		$scope.contadorPierde++;
	}
	function Ganar() {
		alert("Gano!");
		$scope.contadorGana++;
	}
	function Empatar() {
		alert("Empato!");
		$scope.contadorEmpate++;
	}

	$scope.piedra = function () {
		switch (maq)
		{
			case 1:
				Empatar();
				break;
			case 2:
				Perder();
				break;
			case 3:
				Ganar();
		}
		$scope.comenzar();
	};
	$scope.papel = function () {
		switch (maq)
		{
			case 1:
				Ganar();
				break;
			case 2:
				Empatar();
				break;
			case 3:
				Perder();
		}
		$scope.comenzar();

	};
	$scope.tijera = function () {
		switch (maq)
		{
			case 1:
				Perder();
				break;
			case 2:
				Ganar();
				break;
			case 3:
				Empatar();
		}
		$scope.comenzar();
	}

});