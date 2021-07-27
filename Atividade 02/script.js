function carregar() {

    var msg =document.getElementById('msg')
    var img= document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora<12 && hora>6) {
    img.src = 'img/bom dia.jpeg'
    document.body.style.background = '#cbbcb5'
   }  
    else if (hora>=12 && hora<18){
    img.src = 'img/boa tarde.jpeg'
    document.body.style.background = '#3c4e76'
   }
    else {img.src = 'img/boanoitep.jpeg'
    document.body.style.background = '#08436d'
   }
}
