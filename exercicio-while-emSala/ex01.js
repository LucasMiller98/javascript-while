var contador_crescente = 0
console.log('Contando...')
while(contador_crescente <= 10){
    console.log(contador_crescente)
    contador_crescente++
}
console.log('Fim da contagem')

var nome = ' '
while(true) {
    nome = prompt('Qual é o seu nome? ')
    if(nome.length !== 0) {
        break
    }
}
console.log(`Olá, ${nome}`)