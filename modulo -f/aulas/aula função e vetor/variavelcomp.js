// Variaveis compostas, também conhecidas como arrays ou vetor, conseguem guardar mais de um elemento, diretes das variais simples que só guardam um elemento. Avalie um exemplo abaixo: a variavel num contem os elementos 5,8,2,9,3 (total de 5 elementos). o primeiro elementos consideramos não como 1 mais sim como 0, então no índice 0 teremos o elemento 5, no índice 1 teremos o elemento 8... Para adicionar mais um conteuno na variavel num acrescentamos--> num[5] = , ou seja, quero adicionar na posição 5 a variavel 8, ou podemos fazer --> num.push(5), onde entende-se para adicionar o 5 como ultimo elemento da variavel.//

let num= [5,8,2,9,3]
num.push(5) // add o 5 na ultima posição//
num [6]= 8 // add o 8 na posição 6//
num.sort() // ordenar os elementos//
console.log(num)
console.log (`A variavel num tem ${num.length} posições`)
console.log(`O primeiro valor da string é ${num[0]}`)

let pos = num.indexOf(8)
if(pos == -1) {
    console.log ('o valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}
/* O indexOf vai informar qual a posição o elemeto 8 está, se vc digitar algum elemento não não exista ele vai responder com o valor -1, por isso, que utilizamos o -1 no código --> if (pos == -1) */




// o atributo lenght --> num.lenght é o comprimento do vetor. O num.sort() pega todos os elementos e coloca em ordem crescente
//
