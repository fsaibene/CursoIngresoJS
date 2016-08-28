/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

var app = angular.module('AdivinaElNumero1', []);

app.controller("controladorAdivina1", function ($scope) {
    $scope.comenzar = function () {
        $scope.contadorIntentos = 0;
        $scope.numeroSecreto= Math.floor(Math.random() * 100) + 1 ;
    };

    $scope.verificar = function ()
    {
        if($scope.ingreso == $scope.numeroSecreto) {
            alert("Usted es un ganador!!! y en solo " + $scope.contadorIntentos + " intentos");
            $scope.contadorIntentos=0;
        }else
            $scope.contadorIntentos++;

    }
});

