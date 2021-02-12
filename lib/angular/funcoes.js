angular.module("listaTelefonica", ["ngMessages"]);
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $http){
    $scope.app = "Lista Telefonica";

    $scope.contatos = [
        {nome: "Pedro", telefone: "9999-8888", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}},
        {nome: "Ana", telefone: "9999-8877", data: new Date(), operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}},
        {nome: "Maria", telefone: "9999-8866", data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}}
    ];

    $scope.operadoras = [
        {nome: "Oi", código: 14, categoria: "celular",preco: 2},
        {nome: "Vivo", código: 15, categoria: "celular",preco: 1},
        {nome: "Tim", código: 41, categoria: "celular",preco: 3},
        {nome: "GVT", código: 25, categoria: "fixo",preco: 1},
        {nome: "Embratel", código: 21, categoria: "fixo",preco: 2},
    ];
    

    $scope.adicionarContato = function (contato){
        $scope.contatos.push (angular.copy(contato));
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
    };
    $scope.apagarContatos = function (contatos){
        $scope.contatos = contatos.filter(function (contato){
            if (!contato.selecionado) return contato;
        });
    };

    $scope.isContatoSelecionado = function (contatos){
        return contatos.some (function (contato){
            return contato.selecionado;
        });
    };
    $scope.ordenarPor = function (campo){
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };

});