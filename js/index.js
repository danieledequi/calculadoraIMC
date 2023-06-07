function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form. querySelector('.nome');
        const sobrenome = form. querySelector('.sobrenome');
        const peso = form. querySelector('.peso');
        const altura = form. querySelector('.altura');
        let indiceMassaCorporal;


        //como as variáveis peso e altura estão retornando strings, e preciso de numeros para a operação matemática que calcula IMC, usei a função
        //parseFloat para conversão dos valores. Como a altura será informada em centímetros, a função divide por 100 para converter para metros.
        const pesoNum = parseFloat(peso.value);
        const alturaNum = parseFloat(altura.value) / 100;
        indiceMassaCorporal = pesoNum / (alturaNum * alturaNum);
        
            pessoas.push({
            nome:nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
            indiceMassaCorporal: indiceMassaCorporal
        });  
        
        console.log(pessoas);

        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} pesa ${peso.value} kg e tem ${altura.value} de altura. Seu IMC é de ${indiceMassaCorporal} </p>`;
    }

        form.addEventListener('submit' , recebeEventoForm);
        
    }
meuEscopo();

//FUNCAO LIMPAR CAMPOS: 
//A primeira linha usa o método reset() do objeto form para limpar os valores dos campos de entrada (nome, sobrenome, peso e altura) do formulário.
//A segunda linha usa a propriedade innerHTML para atribuir uma string vazia à div com a classe resultado. Assim, quando o botão "Limpar" é clicado, 
//todos os campos são limpos e o conteúdo da div é excluído.

function limparInformacoes(){
    document.querySelector('.form').reset();
    document.querySelector('.resultado').innerHTML = '';
}



 // console.log(nome.value, sobrenome.value, peso.value, altura.value);



//     form.onsubmit = function (evento) {
//         evento.preventDefault();
//         alert('enviado');
//         console.log('Formulário enviado!');
//     };    OUTRA FORMA DE FAZER A FUNÇÃO COM form.addEventListener


