// Refactor the code so that it uses .addEventListener()
// when you click the SAVE INPUT button

function saveLead() {
    console.log("Button clicked!")
}

let inputbtn = document.getElementById("input-btn")

inputbtn.addEventListener("click", function(){
    console.log("Button clicked!")
})
