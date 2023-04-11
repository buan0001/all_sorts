"use strict"

const alfabet = "abcdefghijklmnopqrstuvwxyzæøå"
console.log(alfabet)
const bogstaver = alfabet.split()
console.log(bogstaver)
const bogstaver2 = Array.from(alfabet)
console.log(bogstaver2)

const alfa2 = bogstaver2.toString()
console.log(alfa2)
const alfa3 = bogstaver2.join()
console.log(alfa3)
const alfa4 = bogstaver2.join("")
console.log(alfa4)
const alfa5 = bogstaver2.join(" ")
console.log(alfa5)

const sameAs = ["Pot", "Weasley","Granger"]
console.log(sameAs)
const [HAR, RON, HER] = sameAs
console.log(HAR)
console.log(RON)
console.log(HER)


// const people = ["Harry", "Ron", "Hermione"]
// const people = ("Harry Ron Hermione")

// let result

// result = people.push("Draco")
// console.log(people)
// console.log(result)

// result = people.pop()
// console.log(people)
// console.log(result)

// result = people.push("Neville")
// result = people.push("Luna")
// console.log(people)
// console.log(result)

// result = people.slice(0,3)
// console.log(people)
// console.log(result)

// result = people.splice(1,2,"Cho", "Hagrid")
// console.log(people)
// console.log(result)

// result = people.push("Fred", "George")
// console.log(people)
// console.log(result)

// result = people.indexOf("Fred")
// console.log(people)
// console.log(result)

// result = people.splice(0,5)
// console.log(people)
// console.log(result)
