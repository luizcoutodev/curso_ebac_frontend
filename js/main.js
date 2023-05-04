$('#cpf').mask('000.000.000-00')

$('#cep').mask('00000-000');

$('#telefone').mask('(00) 00000-0000');

$('form').validate({
    rules: {
        nome: {
            required:true
        },
        email: {
            required: true
        },
        telefone: {
            required: true
        },
        cpf: {
            required: true
        },
        endereço: {
            required: true
        },
        cep: {
            required: true
        }
    },
    messages: {
        nome: ' Por favor, insira seu nome',
        email: 'Por favor, insira seu e-mail.',
        cpf: 'Por favor, insira seu cpf.',
        endereço: 'Por favor, insira seu endereço.',
        cep: 'Por favor, insira seu CEP.',
        telefone: 'Por favor, insira seu telefone.',
    } 
})

