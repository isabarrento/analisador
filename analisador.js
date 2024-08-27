let valores = []
let num = document.querySelector('#txtn')

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    let item = document.createElement('option')
    let lista = document.querySelector('#lista')
    
    if (num.value.length == 0) {
        alert('[ERRO] adicione valores!')
    } else if (num.value > 100 || num.value < 1) {
        alert('[ERRO] Insira um número dentro das condições.')
    } else if (inLista(num.value, valores)) {
        alert('[ERRO] Esse número já foi adicionado.')
    } else {
        item.text=`O valor ${num.value} foi adicionado`
        lista.appendChild(item)
        valores.push(num.value)
    }
    num.value = ''
    num.focus() 
}
   

function finalizar() {
    res.innerHTML=`[${valores.sort()}]`
    if (valores.length == 0) {
        alert('[ERRO] adicione valores!')
    } else {
       let res = document.querySelector('#res')
       let valorMax = Math.max.apply(null, valores)
       let total = valores.length
       let soma = 0
       let media = 0
       for (pos in valores) { 
            soma += Number(valores[pos])
       }
       media = soma / total
       valores.sort()
       
        res.innerHTML+=`<p>Ao todo temos ${total} números cadastrados.</p>`
        res.innerHTML+= `<p>O maior valor informado foi ${valorMax}.</p>`
        res.innerHTML+=`<p>O menor valor informado foi ${valores[0]}.</p>` 
        res.innerHTML+=`<p>A soma de todos os valores é igual a ${soma}.`
        res.innerHTML+=`<p>A média dos valores é igual a ${media}.`
    }
    lista.innerHTML=''
}