const notesContainer = document.querySelector(".note-container")
const createBtn = document.querySelector(".create-btn")
let notes = document.querySelectorAll(".input-Box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes")
}
showNotes();

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML)
}
createBtn.addEventListener("click", ()=> {
    let inputBox = document.createElement("p")
    let img = document.createElement("img")
    inputBox.className = "input-Box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", function(e){
    if (e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        updateStorage()
    }
    else if (e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-Box")
        notes.forEach(nt => {
            nt.onKeyup = function(){
                updateStorage();
            }
        })
    }
})
document.addEventListener("keydown", event =>{
    if (event.key === "enter"){
        document.execCommand("insertLineBreak")
        event.preventDefault();
    }
})