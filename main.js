const form = document.getElementById('formulario');

form.addEventListener('submit', function (e){
    e.preventDefault();
    const numeroA = document.getElementById('numero-A');

   alert(numeroA.value);
})




