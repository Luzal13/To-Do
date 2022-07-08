let input = document.querySelector(".input")
let agregar = document.querySelector(".boton-agregar")
let container = document.querySelector(".container")


class Item {
    constructor(nuevaTarea){
        this.crearDiv(nuevaTarea)
    }
    crearDiv(nuevaTarea) {
        let inputItem = document.createElement("input")
        inputItem.type = "text"
        inputItem.disabled = "true"
        inputItem.classList.add("item-input")
        inputItem.value = nuevaTarea

            //DIV
        let div = document.createElement("div")
        div.classList.add("item")

            //Boton Editar
        let botonEditar = document.createElement("button")
        botonEditar.innerHTML = "<i class='fa-solid fa-lock'></i>"
        botonEditar.classList.add("boton-editar")
            //Funcion
        botonEditar.addEventListener("click", function(){
            inputItem.disabled =!(inputItem.disabled)
            if(inputItem.disabled){
                botonEditar.innerHTML='<i class="fas fa-lock"></i>'
            }else{
                botonEditar.innerHTML='<i class="fas fa-lock-open"></i>'
            }

        })


            //Boton Remover
        let botonRemover = document.createElement("button")
        botonRemover.innerHTML = "<i class='fa-solid fa-trash'></i>"
        botonRemover.classList.add("boton-remover")
            //funcion
        botonRemover.addEventListener("click", function(){
            div.remove()
        })


        div.appendChild(inputItem)
        div.appendChild(botonEditar)
        div.appendChild(botonRemover)
        container.appendChild(div)
    } 
    
}
function chequearInput(){
    if(input.value){
        new Item(input.value)
        input.value = ""
    } else{
        alert("Agregar Tarea")
    }
}
agregar.addEventListener("click", function(){
    chequearInput()
})

