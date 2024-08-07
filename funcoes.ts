const multiplicaNumero = (numero1: number, numero2: number): number => numero1 * numero2; 

function retornaNome(nome: string): void{
    console.log(`Olá ${nome}`);
}

let resultado = multiplicaNumero(1,2);
console.log (resultado);

retornaNome('Luiz');