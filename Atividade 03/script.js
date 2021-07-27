function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector ('input#txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length===0 || Number(fano.value)>ano) {
        alert('[ERRO] Verificar os dados novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero= 'Homem'
        if (idade>0 && idade<10){
            img.setAttribute('src','img/criancam.png')
        } else if (idade<21){
            img.setAttribute('src','img/adolescentem.png')
        } else if(idade<50) {
            img.setAttribute('src','img/adultom.png')
        } else{
            img.setAttribute('src','img/idosom.png')
        }
        }
        if(fsex[1].checked){
            genero= 'Mulher'
        if (idade>0 && idade<10){
            img.setAttribute('src','img/criancaf.png')
        } else if (idade<21){
            img.setAttribute('src','img/adolescentef.png')
        } else if(idade<50) {
            img.setAttribute('src','img/adultof.png')
        } else{
            img.setAttribute('src','img/idosof.png')
        }
       }
    
     res.style.textAlign= 'center'
     res.innerHTML= `Detectamos ${genero} de ${idade} anos.`
     res.appendChild(img)
    
    }











}
