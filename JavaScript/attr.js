document.querySelector(".box").innerHTML = "Good morning"

// inserting attributes
document.querySelector(".box").setAttribute("style","display:flex")
document.querySelector(".box").setAttribute("style","color:red")

// document.designMode = "on"

// inserting a new element
let div = document.createElement("div")
div.innerHTML = "I have been inserted <b>By Prateek<b>"
div.setAttribute("class","created")
document.querySelector(".container").append(div)

let div2 = document.createElement("div")
div2.innerHTML = "I have been created and prepended by javascript"
div2.setAttribute("class","new")
document.querySelector(".container").prepend(div2)

let div3 = document.createElement("div")
div3.innerHTML = "I have been created and written after by javascript"
div3.setAttribute("class","new2")
document.querySelector(".container").after(div3)

let div4 = document.createElement("div")
div4.innerHTML = "I have been created and written before by javascript"
div4.setAttribute("class","new3")
document.querySelector(".container").before(div4)

// remove attribute
document.querySelector(".box").removeAttribute("style")

//remove element
document.querySelector(".box").remove()

// add class
document.querySelector(".container").classList.add("bg")

// remove class
document.querySelector(".container").classList.remove("red") 

// toggle
document.querySelector(".container").classList.toggle("bg")


