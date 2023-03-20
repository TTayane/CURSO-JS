//Testando os vetores na aula, usando estrutura de repetição//

let valores= [23, 6, 7, 15, 80, 12]
valores.sort()
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

// ao invez de fazermos a leitura dos valores como no comentario acima gastando muita memoria e fazendo com que o código fique mais longo, podemos utilizar a estrutura de repetição for, assim como o exemplo abaixo: como criou uma variavel pos com valor 0; se pos for menor que o valores.lenght que é o comprimento do vetor, adiciona mais 1 (pos++). sendo o pos a posição e o valores o conteudo do elemento//

for(let pos=0; pos <valores.length; pos ++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for (let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

/* segunda forma mais simples de fazer com a estrutura for (para) in (dentro). Onde criasse a variavel pos. Onde para cada posição na variavel composta vou mostrar a variavel[pos]