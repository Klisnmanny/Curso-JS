function contar(){
    var ini = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var pas = document.querySelector('input#passo')
    var res = document.querySelector('div#res')
        if(ini.value.length == 0|| fim.value.length == 0 || pas.value.length == 0){
            alert('[ERRO] Faltam dados!')
        }
        else{
        res.innerHTML = 'Contando:'
       var i= Number(ini.value)           //trasnformar em numero
       var f= Number(fim.value)
       var p= Number(pas.value)
            if (i<f){
                   for (var c=i ; c <= f; c += p) {
                    res.innerHTML += `${c}  \u{1f449} `
                     }
            }
            else {
                for (var c=i ; c >= f; c -= p) {
                    res.innerHTML += `${c}  \u{1f449} `

            }
        }
            res.innerHTML += `\u{1f3c1} `
        }

}

/*function gerar(){
    var num = document.querySelector ('input#num')
    var res = document.querySelector('select#sel')
    var contador = 1
    var n = Number(num.value)

    for(contador=1;contador <=10;contador++) {
        var item =document.createElement('option')
        item.text=(`${n}* ${contador} = ${n*contador}`)
        res.appendChild(item)
        

        
    }
}*/