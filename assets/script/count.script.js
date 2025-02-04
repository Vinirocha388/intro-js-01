function dim() {
    let atual = document.getElementById("counter").innerHTML
    let result = atual - 1

    document.getElementById("counter").innerHTML = result
}

function aumentar() {
    let atual = document.getElementById("counter").innerHTML
    let result = Number(atual) + 1

    document.getElementById("counter").innerHTML = result
}

function reset() {  
    document.getElementById("counter").innerHTML = 0    
}