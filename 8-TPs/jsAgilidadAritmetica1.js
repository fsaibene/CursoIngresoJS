/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var app = angular.module("Aritmetica1", []);

app.controller("controladorAritmetica1", function ($scope) {
var op;
    $scope.comenzar = function () {
        $scope.respuesta='';
        $scope.num1 = Math.floor(Math.random() * 10) + 1;
        op = Math.floor(Math.random() * 4) + 1;
        $scope.num2 = Math.floor(Math.random() * 10) + 1;
        switch (op)
        {
            case 1:
                $scope.operador= "+";
                $scope.resultado= $scope.num1 + $scope.num2;
                break;
            case 2:
                $scope.operador= "-";
                $scope.resultado= $scope.num1 - $scope.num2;
                break;
            case 3:
                $scope.operador= "*";
                $scope.resultado= $scope.num1 * $scope.num2;
                break;
            case 4:
                $scope.operador= "/";
                $scope.resultado= $scope.num1 / $scope.num2;
        }
    };
    $scope.responder=function () {
        if($scope.respuesta==$scope.resultado)
        {
            alert("Correcto!");
        }else
            alert("Incorrecto gil!");

        $scope.comenzar();
    }
});