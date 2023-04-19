$('form button').click(function(e){
    adicionarTarefa();
    e.preventDefault();
})

function adicionarTarefa(){
    const inputTarefa = $('#nome-tarefa').val();
    const novaTarefa = $(`<li style="display:none">${inputTarefa}</li>`);
    
    if (inputTarefa.length == 0) {
        alert("A tarefa está em branco.")
    } else {
        $(novaTarefa).appendTo('ul');
        $(novaTarefa).fadeIn(1500);
    }
    $('#nome-tarefa').val(''); 
}

$('ul').on('click','li', function(){ /* função ON é atribuida até a novos elementos adicionadas a pagina, a função .click é apenas as que ja estão na pagina ao iniciar. */
    $(this).css('text-decoration','line-through');
})


$('ul').on('dblclick', 'li', function(){
    $(this).css('text-decoration','none');
})