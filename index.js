let count1=0
let count2=0
document.getElementById("home-el").textContent = count1
document.getElementById("guest-el").textContent = count2
let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

function add1(){
    count1 += 1
    homeEl.textContent = count1 
}
function add2(){
    count1 += 2
    homeEl.textContent = count1 
}
function add3(){
    count1 += 3
    homeEl.textContent = count1
}
function addg1(){
    count2 += 1
    guestEl.textContent = count2
}
function addg2(){
    count2 += 2
    guestEl.textContent = count2
}
function addg3(){
    count2 += 3
    guestEl.textContent = count2 
}
function reset(){
    document.getElementById("home-el").textContent = 0
    document.getElementById("guest-el").textContent = 0
    count1=0
    count2=0
}