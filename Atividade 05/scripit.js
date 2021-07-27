function gerar(){
    var num = document.querySelector ('input#num')
    var res = document.querySelector('select#sel')
    var contador = 1
    var n = Number(num.value)

    for(contador=1;contador <=10;contador++) {
        var item =document.createElement('option')
        item.text=(`${n}* ${contador} = ${n*contador}`)
        res.appendChild(item)
        

        
    }
}