class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
     
    atacar() {
        let mensagem = "";
        
        if (this.tipo === "mago") {
            mensagem = "o mago atacou usando magia";
        } 
        else if (this.tipo === "guerreiro") {
            mensagem = "o guerreiro atacou usando espada";
        } 
        else if (this.tipo === "monge") {
            mensagem = "o monge atacou usando artes marciais";
        } 
        else if (this.tipo === "ninja") {
            mensagem = "o ninja atacou usando shuriken";
        } 
        else {
            mensagem = "tipo de herói desconhecido";
        }
        
        return mensagem;
    }
}
   
let heroi = new Hero("leonardo", 26, "mago");
console.log(heroi)
console.log(heroi.atacar());