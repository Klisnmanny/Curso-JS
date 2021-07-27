var agora = new Date() // pega a hora atual
var Horas = agora.getHours() //Se estiver rodando no cliente será o do cliente se for no servidor será a hora do servidor
console.log (`São ${Horas} horas.`)
    if (Horas<12) { 
        console.log(`Bom dia!`)
     }else if (Horas<=18) {
      console.log(`Boa tarde!`)
     }
     else
        { 
        console.log(`Boa noite!`)
     }
