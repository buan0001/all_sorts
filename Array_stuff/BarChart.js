"use strict"
window.addEventListener("load",start)

const liste = []

function start(params) {
    firstCustomers()
    // setInterval(generateCustomers, 1000)
}

function firstCustomers() {
    for (let i = 0; i < 4; i++) {
    //   console.log(`værdi:#${i} er ${myArr[i]}`);
      let tal = Math.floor(Math.random() * 32)
      liste.push(tal)
      console.log(liste)
    }
}


function generateCustomers(params) {
    let tal = Math.floor(Math.random() * 32);
    console.log(tal)
    return tal
}

