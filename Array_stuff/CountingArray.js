"use strict"
window.addEventListener("load", start)

let tal = 0
const liste = []

function start(params) {
    setInterval(numberGoUp, 1000)
    console.log("hejj")
}

function numberGoUp() {
    tal++
    console.log(tal)
    liste.unshift(tal)
    if (liste.length > 9){liste.pop()}
    console.log(liste)
}

console.log(tal)