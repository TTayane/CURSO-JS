// estrutura aninhada//
console.log('Informe o valor da sua glicemia')
var glic = 200
console.log(`A sua glicemia é de ${glic}`)
if (glic <70) {
    console.log ('Você está em estado de hipoglicemia, procure uma unidade hospitalar')
} else if (glic >=70 && glic <100) {
    console.log ('O valor de sua glicemia está normal, Parabéns')
} else if (glic >100 && glic <120) {
    console.log ('Você está pré-diabético, procure um profissional para lhe ajudar')
} else if (glic >=120) {
    console.log(' Você está diabético, alimentação, exercício físico e medicamento ajudaram na sua caminhada ')
}