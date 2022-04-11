/*Ele deve pedir para o usuário responder 3 perguntas:
- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?

À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.
No final, o sistema vai exibir a mensagem:
"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"
Note que cada informação entre [ ] é uma das respostas dadas pela pessoa.

Se você quiser se aprofundar no assunto de hoje, eu tenho mais um exercício para você. Mas ele é 100% opcional.
Você vai complementar o código para que, depois de exibir a mensagem anterior, o programa pergunte:
Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.
E aí, dependendo da resposta, ele deve mostrar uma das seguintes mensagens:
1 > Muito bom! Continue estudando e você terá muito sucesso.
2 > Ahh que pena... Já tentou aprender outras linguagens?*/



function cadnome(){
    let nome = document.getElementById('txtnome').value
    if (nome.length === 0) {
        window.alert("Favor preencher o campo com o seu nome")
    } else {        
        mostrarNome(nome) 
               
    } 
}

function mostrarNome(nome){
    let parnome = document.querySelector('p.info-idade')
    parnome.innerHTML = nome + ', quantos anos você tem?'
    document.getElementById('idade').hidden = false;
    document.getElementById('txtidade').focus()
}

function cadidade(){
    let idade = document.getElementById('txtidade').value
    if(idade <= 0) {
        window.alert('Favor preencher o campo com sua idade')
    } else {        
        verificarIdade()
        document.getElementById('txtlinguagem').focus()
    }
} 

function verificarIdade() {
    document.getElementById('linguagem').hidden = false; 
    document.getElementById('txtlinguagem').focus()
    
}

function cadlinguagem(){
    let linguagem = document.getElementById('txtlinguagem')
    if(linguagem.value.length === 0){
        window.alert('Favor preencher o campo com a linguagem que está aprendendo')
    } else {
        resposta = document.getElementById('res')
        resposta.innerHTML=`<p> Olá, ${txtnome.value}, você tem ${txtidade.value} anos e já está aprendendo ${txtlinguagem.value}! </p>`     
        
    }               
} 

window.onload = function() {
    document.getElementById('idade').hidden = true;
    document.getElementById('linguagem').hidden = true;
 }  



 
 






