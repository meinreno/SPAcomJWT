//Carregado os modulos
var app = angular.module('app',['ngRoute', 'ngStorage']);

app.config(function($routeProvider, $locationProvider)
{
   $routeProvider

   // Para a Rota "/" carregamos a view de login dentro da index
   .when('/', {
      templateUrl : 'app/views/login.html',
      controller  : 'LoginCtrl',
   })

   // Para a Rota "/" carregamos a view de Produtos dentro da index
   .when('/produtos', {
      templateUrl : 'app/views/produtos.html',
      controller  : 'ProdutosCtrl',
   })


   // caso não seja nenhum desses, redirecione para a rota '/'
   .otherwise ({ redirectTo: '/' });
});



