/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/


var app = angular.module("AdivinaElNumero2", []);

app.controller("controladorAdivina2", function ($scope) {
    $scope.comenzar = function () {
        $scope.contadorIntentos = 0;
        $scope.numeroSecreto= Math.floor(Math.random() * 100) + 1 ;
    };

    $scope.verificar = function ()
    {
        var msj = "afortunado en el amor!!";
        var uno = "usted es un Psíquico";
        var dos = "excelente percepción";
        var tres = "Esto es suerte";
        var cuatro = "Excelente técnica";
        var cinco = "usted está en la media";
        var seis = "falta técnica";
        if($scope.ingreso == $scope.numeroSecreto) {
            if($scope.contadorIntentos == 1)
            {msj=uno};
            if($scope.contadorIntentos == 2)
            {msj=dos};
            if($scope.contadorIntentos == 3)
            {msj=tres};
            if($scope.contadorIntentos == 4)
            {msj=cuatro};
            if($scope.contadorIntentos == 5)
            {msj=cinco};
            if($scope.contadorIntentos >= 6 && $scope.contadorIntentos <= 10)
            {msj=seis};

            alert(msj + $scope.contadorIntentos + " intentos");
            $scope.contadorIntentos=0;
        }else
            $scope.contadorIntentos++;

    }
});
