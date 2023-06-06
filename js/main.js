/* Colocar sempre jquery mask após o jquery no html para que não ocorra erros */

$('#inputTelefone').mask('(00)00000-0000',{
    placeholder: 'Ex: (11) 12345 - 6789'
})


$('form').validate({
    rules: {
        nome: {
            required: true,
            minlength: 11
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true,
            minlength: 14
        },
        
    },
    messages: {
        nome: 'Por favor insira seu nome completo.',
        email: 'Por favor insira seu email corretamente.',
        telefone: 'Por favor insira seu telefone corretamente.',
    }
})