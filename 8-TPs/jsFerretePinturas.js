/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
var app =angular.module('FerretePinturas', []);
app.controller("controladorPinturas", function ($scope) {
    $scope.datos={};
    $scope.datos.ingreso='';
    $scope.resultado='';

    $scope.CtoF = function () {
        var temp = $scope.datos.ingreso;
        var fh;
           fh=temp * 9 / 5 + 32;
        $scope.resultado= temp+' centigrados son '+fh+' Farenheit';
    }

    $scope.FtoC = function () {
        var temp = $scope.datos.ingreso;
        var cel;
        cel= (5/9) *(temp-32);
        $scope.resultado= temp+' Farenheit son '+cel+' centigrados';
    }
});

