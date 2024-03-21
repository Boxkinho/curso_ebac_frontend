function Animal (nome) {
    this.nome = nome;
}

function Cachorro (nome, idade, raca) {
    this.nome = nome;
    this.idade = idade;
    this.raca = raca;
}

function Gato (nome, idade, pelo) {
    this.nome = nome;
    this.idade = idade;
    this.pelo = pelo;
}

const cachorro1 = new Cachorro("Thor", 7, "Lavrador");
const gato1 = new Gato("Garfildes", 5, "branco");
const cachorro2 = new Cachorro("Bobby", 4, "Pastor Alemão");

console.log("Nome: " + cachorro1.nome + " | Idade: " + cachorro1.idade + " | Raça: "+ cachorro1.raca);
console.log("Nome: " + gato1.nome + " | Idade: " + gato1.idade + " | Cor do pelo: "+ gato1.pelo);
console.log("Nome: " + cachorro2.nome + " | Idade: " + cachorro2.idade + " | Raça: "+ cachorro2.raca);