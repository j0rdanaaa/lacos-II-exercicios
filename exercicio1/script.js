const jogadores = [
    [27, 4, 20, 13, 14],// jogador 1
    [11, 15, 12, 8, 9],// jogador 2
    [5, 5, 12, 16, 4],// jogador 3
    [20, 33, 11, 12, 19],// jogador 4
    [3, 3, 4, 5, 10]// jogador 5
]


for (let i = 0;i < jogadores.length; i++){  let frase = `Jogador ${i+1}:`
    console.log(frase)

    for (let j = 0; j < jogadores[i].length; j++){
   let gols = `${jogadores[i][j]}, `
    frase = frase + gols

   
    }
  console.log(frase)
}
///

for(let i in array){
    let jogador = `Jogador ${Number(i) + 1}: ` 
    

    for(let j of array[i]){
    jogador = jogador + ` ${j} `
        
    }
    console.log(jogador);
}
///

for( let i = 0; i < jogador.length; i++){
    const gol = jogadores[i]
    console.log(`Jogador ${i+1}: ${gol}`)
}