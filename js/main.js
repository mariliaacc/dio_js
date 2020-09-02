function botao(){
    document.getElementById("click").innerHTML = "<b>Teste</b>"
    //console.log(document.getElementById("click"))
    //alert("Ola")
}

function redirecionar() {
    window.open("https://www.google.com.br/") //Abre em outra página
    window.location.href = "https://www.google.com.br/" //Abre na mesma página
}

function trocar(elemento) {
    elemento.innerHTML = "Troca de texto"
    // document.getElementById("mouse").innerHTML = "Troca de texto" - Sem o this
   //alert("Ola")
}

function voltar(elemento) {
    elemento.innerHTML = "Passar o mouse"
    //document.getElementById("mouse").innerHTML = "Passar o mouse" - Sem o this
   //alert("Ola")
}

function load() {
    alert("Carregado")
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}

/********************************* FUNCTION *********************************
function soma (n1,n2) {
    return n1+n2;
}
console.log(soma(5, 10))

function setReplace(frase, nome1, nome2) { //substituir os nomes
    return frase.replace(nome1, nome2)
}
console.log(setReplace("Teste a", "a", "b")) // Trocar de a para b

var validar = 0 // variavel global
function validaIdade(idade){
    var validar = true // variavel local
    if(idade >= 18){
        return validar = true
    } else {
        return validar = false
    }
}

var idade = prompt("Digite sua idade")
console.log(validaIdade(idade))
********************************* FUNCTION *********************************/




/********************************* CONDIÇÕES / REPETIÇÃO / DATA *********************************
var d1 = new Date()
console.log("hoje é" + d.getDate() + "/" + d.getMonth()+1 )

var d = new Date()
alert(d) //data atual
console.log(d.getMonth()+1) //mês atual
console.log(d.getMinutes()+1) //minuto atual
console.log(d.getDay()) //dia atual

var conta1
for (conta1 = 0; conta1 <=5; conta1++){
    console.log(conta1)
}

var conta = 0
while(conta < 5) {
    console.log(conta)
    conta ++
}

var idade1 = prompt("Qual sua idade") //Possibilidade do usuário informar pelo teclado
var idade = 18
if(idade1 >= 18) {
    console.log("maior de idade")
} else {
    console.log("menor idade")
}
********************************* CONDIÇÕES / REPETIÇÃO / DATA *********************************/




/********************************* ARRAY E DICIONÁRIO *********************************
var frutas = [{ nome:"maça", cor:"vermelha"}, { nome:"laranja", cor:"laranja"}] // lista de dicionário
console.log(frutas)
console.log(frutas[1].nome)

var fruta = { nome:"maça", cor:"vermelha"} //dicionário
console.log(fruta)
console.log(fruta.nome)

var lista = ["maça","pera","uva"]
console.log(lista)
console.log(lista[1])

lista.push("morango") // adicionar o ultimo elemento
console.log(lista)

lista.pop("morango") // retirar o ultimo elemento
console.log(lista)

console.log(lista.length) // Tamanho da lista
console.log(lista.reverse()) // Tras ordem invertida na lista
console.log(lista.toString()) // Deixa de ser um array e retornar como uma string
console.log(lista.join(" - ")) // substitui a , por -
********************************* ARRAY E DICIONÁRIO *********************************/




/********************************* INTRODUÇÃO AO JAVA *********************************
var nome = "Marília"
var idade = 26
var idade2 = 10
var frase = "Brasil meu país"
alert("Bem vindo " + nome + " Sua idade é: " + idade + "anos")
alert(idade + idade2)

console.log(nome)
console.log(idade)
console.log(frase)
console.log(frase.replace("Brasil", "Pernambuco")) // Trocar a palavra por outra
//alert((frase.replace("Brasil", "Pernambuco")))
console.log(frase.toUpperCase())//Tudo maiusculo
console.log(frase.toLowerCase())//Tudo minusculo

// soluções aritmetricas

console.log(idade + idade2)
console.log(idade - idade2)
console.log(idade * idade2)
console.log(idade / idade2)
********************************* INTRODUÇÃO AO JAVA *********************************/ 