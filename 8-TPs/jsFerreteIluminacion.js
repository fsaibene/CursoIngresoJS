/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */var app = angular.module("FerreteIluminacion", []);

app.controller("controladorIluminacion", function ($scope) {
    $scope.CalcularPrecio=function () {
        var rdo;
        var bruto;
        $scope.msj='';
        bruto=35*$scope.ingreso;
        if($scope.ingreso >= 6)
        {
            rdo= bruto*0.90;
        }
        if($scope.ingreso == 5)
        {
            if($scope.opcion== "ArgentinaLuz")
            {
                rdo=bruto*0.60;
            }else
                rdo=bruto*0.70;
        }
        if($scope.ingreso == 4)
        {
            if($scope.opcion== "ArgentinaLuz" || $scope.opcion== "FelipeLamparas")
            {
                rdo=bruto*0.75;
            }else
                rdo=bruto*0.80;

        }
        if($scope.ingreso == 3)
        {
            if($scope.opcion== "ArgentinaLuz" ){
                rdo=bruto*0.85;
            }else if($scope.opcion== "FelipeLamparas") {
                rdo = bruto * 0.10;
            }else
                rdo=bruto*0.95;
        }
        if(rdo>120)
        {
            var imp=rdo*0.10;
            rdo=rdo+imp;
            $scope.msj='Usted pago $'+imp+' de IIBB';
        }
        $scope.resultado=Math.round(rdo);
    }


});
