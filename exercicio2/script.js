/*let numeroTabuada = Number(prompt('Insira um número:'))
    const fatores = [1,2,3,4,5,6,7,8,9,10]

for (let index in fatores){
    const resultado =  fatores[index] * numeroTabuada
    console.log(`${numeroTabuada} X ${fatores[index]} = ${resultado}`)

}


///
function programaTabuada(){

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    let inputNumero =Number(prompt(`Digite um numero para saber a tabuada dele:`))

    const frase = `A tabuada de ${inputNumero} é:`

    console.log(frase)

    for(i in array){
        i = Number(i)       
    const indice = array[i]
    const conta = indice * inputNumero
    console.log(`${inputNumero} X ${indice} = ${conta}`)
    
    }
}
programaTabuada()
*/

const multiplicando = [1, 2, 3, 4, 5, 6, 7,  8, 9, 10]

const numeroTabuada = Number(prompt(`Digite um número de 1 a 10:`))

for (let i in multiplicando){
    const resultado = numeroTabuada * multiplicando[i]
    console.log(resultado)
}