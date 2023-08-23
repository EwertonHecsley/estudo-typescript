var Cachorro = /** @class */ (function () {
    function Cachorro(nome, raca, cor, idade, dono) {
        this.nome = nome;
        this.raca = raca;
        this.cor = cor;
        this.idade = idade;
        this.dono = dono;
    }
    ;
    Cachorro.prototype.resposta = function (dono, nome_cachorro) {
        return "O cachorro do(a) ".concat(this.dono, " chama-se ").concat(this.nome, " \u00E9 da ra\u00E7a ").concat(this.raca);
    };
    ;
    return Cachorro;
}());
;
var Voo = /** @class */ (function () {
    function Voo(empresa, n_passagem, destino, origem, valor) {
        this.empresa = empresa;
        this.n_passagem = n_passagem;
        this.destino = destino;
        this.origem = origem;
        this.valor = valor;
    }
    Voo.prototype.resumoViagem = function (destino, origem, empresa) {
        return "O voo da empresa ".concat(this.empresa, ", saira de ").concat(this.origem, ", com destino a ").concat(this.destino);
    };
    ;
    return Voo;
}());
;

const viagem = new Voo('Tam', 2002, 'Brasilia', 'João Pessoa');

console.log(viagem.resumoViagem())