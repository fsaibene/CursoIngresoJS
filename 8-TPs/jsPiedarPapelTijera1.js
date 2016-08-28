/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var app = angular.module("PPT1", []);

app.controller("controladorPPT1", function ($scope) {

    var maq;
    $scope.comenzar= function () {
        $scope.eleccionMaquina = Math.floor(Math.random() * 3)+1;
        maq=  $scope.eleccionMaquina;
    };
    function Perder() {
        alert("Perdio!");
    }
    function Ganar() {
        alert("Gano!");
    }
    function Empatar() {
        alert("Empato!");
    }

    $scope.piedra = function () {
        console.log(maq);
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