"use strict";
window.addEventListener("load", start);

const liste = [];

function start(params) {
  firstCustomers();
  for (let i = 0; i < 40; i++) {
    setHeight(liste[i]);
  }
  setInterval(generateCustomers, 1000);
}

function firstCustomers() {
  for (let i = 0; i < 40; i++) {
    let tal = Math.floor(Math.random() * 32);
    liste.push(tal);
  }
}

function setHeight(number) {
  const data = /*html*/ `<article id="pillar" class="pillar" style="height:${number * 15}px"></article>`;
  document.querySelector("#grid_container").insertAdjacentHTML("beforeend", data);
}

function generateCustomers(params) {
  let tal = Math.floor(Math.random() * 32);
  console.log(tal);
  updateCustomers(tal);
}

function updateCustomers(tal) {
  liste.push(tal);
  liste.shift();

  document.querySelectorAll(".pillar").forEach((thingy) => thingy.remove());
  liste.forEach(setHeight);
}
