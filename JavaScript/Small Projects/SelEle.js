let boxes = document.getElementsByClassName("box")

boxes[3].style.backgroundColor = "red"         // it selects the 3rd index value element

document.getElementById("red").style.backgroundColor = "red"      // it selects the element with id "red"

document.querySelector(".box").style.backgroundColor = "green"    // it selects the first element

let allbox = document.querySelectorAll(".box")
allbox.forEach(b =>{
    b.style.backgroundColor = 'yellow'
})
