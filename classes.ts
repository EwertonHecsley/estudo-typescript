class Cachorro {
    nome: string
    raca: string
    cor: string
    idade: number
    dono: string

    constructor(nome: string, raca: string, cor: string, idade: number, dono: string) {
        this.nome = nome;
        this.raca = raca;
        this.cor = cor;
        this.idade = idade;
        this.dono = dono;
    };

    resposta(dono: string, nome_cachorro: string) {
        return `O cachorro do(a) ${this.dono} chama-se ${this.nome} é da raça ${this.raca}`
    };
};

class Voo {
    empresa: string
    n_passagem: number
    destino: string
    origem: string
    valor: number

    constructor(empresa: string, n_passagem: number, destino: string, origem: string, valor: number) {
        this.empresa = empresa;
        this.n_passagem = n_passagem;
        this.destino = destino;
        this.origem = origem;
        this.valor = valor
    }

    resumoViagem(destino: string, origem: string, empresa: string): string {
        return `O voo da empresa ${this.empresa}, saira de ${this.origem}, com destino a ${this.destino}`;
    };
};