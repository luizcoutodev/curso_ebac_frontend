const form = document.getElementById('formulario');
const numeroA = document.getElementById('numero-A');
const numeroB = document.getElementById('numero-B');

function formValido(numero1,numero2){
    const numeroFuncao_1 = parseInt(numero1.value);
    const numeroFuncao_2 = parseInt(numero2.value);
    const messageSucesso = `Correto! O valor B (${numeroB.value}) é MAIOR que o valor A (${numeroA.value})`
    const messageError = `O valor B (${numeroB.value}) é MENOR que o valor A (${numeroA.value}) `
    const messageEqualError = `O valor B (${numeroB.value}) é IGUAL ao o valor A (${numeroA.value}) `
    const containerSuccessMessage = document.querySelector('.success-message');
    const containerErrorMessage = document.querySelector('.error-message');

    containerSuccessMessage.style.display = 'none';
    containerErrorMessage.style.display = 'none';

    if (numeroFuncao_2 > numeroFuncao_1){
       containerSuccessMessage.innerHTML = messageSucesso;
       containerSuccessMessage.style.display = 'block';
    } else if (numeroFuncao_2 < numeroFuncao_1) {
        containerErrorMessage.innerHTML = messageError;
        containerErrorMessage.style.display = 'block';
    }  else {
        containerErrorMessage.innerHTML = messageEqualError;
        containerErrorMessage.style.display = 'block';
    }
}

form.addEventListener('submit', function (e){
    e.preventDefault();
    formValido(numeroA,numeroB);
    numeroA.value = '';
    numeroB.value = '';
})




