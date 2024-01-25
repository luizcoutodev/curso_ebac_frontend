function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + " diz oi");
    }
    // pod chamar a função de outro objeto aqui. as duas funções podm funcionar em conjunto com os mesmos atributos.  
}

function Funcionario(nome, cargo, salario) {
    Pessoa.call(this, nome);
    this.cargo = cargo;
    this.salario = salario;
    this.dizCargo = function () {
        console.log(this.cargo);
    }   
}

function Cliente(nome, idade) {
    Pessoa.call(this, nome);
    this.idade = idade; 
    this.dizIdade = function () {
        console.log(`O ${nome} tem ` + this.idade);
    }
} 

const funcionario1 = new Funcionario("Maria","Dev Front-end", "R$5000");
const cliente1 = new Cliente("Luiz", "24");
const cliente2 = new Cliente("Marcelo", "31");


funcionario1.dizOi();
funcionario1.dizCargo();
cliente1.dizIdade();
cliente2.dizIdade();