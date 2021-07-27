

    var num = document.querySelector("input#numero")
    var amo = document.querySelector("select#amostrar")
    var res = document.querySelector("div#res")
    var vet = []
   
function adicionar(){
    if(Number(num.value)<=0  || Number(num.value)>100) {
        alert(`Valor incorreto!`)
    }
    

    else if (vet.indexOf(Number(num.value)) == -1) {
        vet.push(Number(num.value))
        var string = document.createElement('option')
        string.text = `O número ${num.value} foi adicionado.`
        amo.appendChild(string)
        //result.innerHTML = '' Era para limpar
    }

    else if (amo.value.length == 0) {
        alert('Número já digitado') 
    }
}
    
    
 function finalizar() {
        if (vet.length == 0) 
        {
            alert('Adicione um numero')
        } 
        else 
        {
            var total = vet.length
            var max = vet[0]
            var min = vet[0]
            var som = 0
            for (i in vet) 
            {
                som += vet[i]
                if (vet[i] > max) 
                {
                    max = vet[i]
                } 
                else if (vet[i] < min)
                {
                    min = vet[i]
                }
            }
        }
        

        var mean = som / total

        res.innerHTML = ''
        res.innerHTML += `<p>Foram adicionados ${total} numero(s).</p>`
        res.innerHTML += `<p>O maior valoe é ${max}.</p>`
        res.innerHTML += `<p>O menor valor é ${min}.</p>`
        res.innerHTML += `<p>A soma dos numero(s) é ${som}.</p>`
        res.innerHTML += `<p>A média é ${mean.toFixed(2)}.</p>`
 }
         