function Animal (nome, idade, pelo, raca) {
    this.nome = nome;
    this.idade = idade;
    this.pelo = pelo;
    this.raca = raca;
}

function Cachorro (nome, idade, pelo, raca) {
    Animal.call(this, nome, idade, pelo, raca);

    this.latir = function() {
        return 'Au Au';
    }
}

function Gato (nome, idade, pelo, raca) {
    Animal.call(this, nome, idade, pelo, raca);

    this.miar = function() {
        return 'Miau';
    }
}

const cachorro1 = new Cachorro("Thor", 7, "preto", "Lavrador");
const gato1 = new Gato("Garfildes", 5, "marrom", "Perça");
const cachorro2 = new Cachorro("Bobby", 4, "preto", "Pastor Alemão");

console.log(cachorro1.latir() + " | Nome: " + cachorro1.nome + " | Idade: " + cachorro1.idade + " | Cor do pelo: " + cachorro1.pelo + " | Raça: " + cachorro1.raca);
console.log(gato1.miar() + " | Nome: " + gato1.nome + " | Idade: " + gato1.idade + " | Cor do pelo: " + gato1.pelo + " | Raça: "+ gato1.raca);
console.log(cachorro2.latir() + " | Nome: " + cachorro2.nome + " | Idade: " + cachorro2.idade + " | Cor do pelo: " + cachorro2.pelo + " | Raça: "+ cachorro2.raca);