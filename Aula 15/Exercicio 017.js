/*let valores = [8,1,7,2,4,9]
console.log (valores)


for(let pos=0;pos<valores.length;pos++) { //length ele vai até o ultimo vetor
    console.log (`A posição ${pos} tem o valor ${valores[pos]}`)
}*/


let valores = [8,1,7,2,4,9]

//valores.sort()//deixa os numeros ordenados
   

    for( let pos in valores){  //in siginifica em, fica assim: para let pos em valores

console.log (`A posição ${pos} tem o valor ${valores[pos]}`)
    }

    let pos=valores.indexOf(9) // Buscar a posição do numero indicado, obs: as letra maiusculas e minuscular
     console.log(`O Valor está na posição ${pos}`)