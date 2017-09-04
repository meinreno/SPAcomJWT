app.controller('LoginCtrl', function($rootScope, $location, $scope, $http, $localStorage){

    $scope.realizarLogin = function () {
        //Enviando o login para a URL da API informada
        $http({method:'POST', url: 'http://localhost:5000/auth', data: $scope.formLogin})
        .then(function(response){
            //Armazenada o Token que foi retornado pela API
            $localStorage.token = response.data["access_token"];
            //Direcinado para a Rota Produtos
            $location.url("/produtos");
            console.log(response);
             
        })
        .catch(function(err){
            //Caso usuario e senha estejam errados
            alert("Usuario ou senha Errado")
            console.log(err);
        });
    };
});
//Controller dos produtos 
app.controller('ProdutosCtrl', function($rootScope, $location, $scope, $http, $localStorage){
    //Variavel para armazenar os itens que irão vir de respota da API
    $scope.itens = []
    //Enviado requisição para a API retornar os produtos, o Token esta sendo enviado via Header
    $http({method: 'GET', url: 'http://localhost:5000/listar_produtos', headers: {'Authorization': 'JWT '+$localStorage.token} })
    .then(function(response){
        // Adiciondo Itens a variavel que irá armazenar os Produtos
        var data  = response.data;
        for (var x in data){
            $scope.itens.push({"descricao": data[x]["Descricao"], "preco": data[x]["Preco"]})
       }
    })
    .catch(function(err){
        alert("Sua Sessão Expirou ou Você não tem Acesso")
        $localStorage.$reset();
        $location.url("/");
    })
})