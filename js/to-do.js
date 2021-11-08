/*variables const no cambia el valor */
const tarea =document.getElementById("tarea")
const add = document.getElementById("add")
/*constate de pendiente */
const pendiente = document.getElementsByClassName("pendiente")[0]
const terminada = document.getElementsByClassName("terminada")[0]

var tareas =[]
var termindas =[]

/*click en agregar y agregue en las tareas*/
//EVENTOS cuando hacemos una accion

//cuando el usuario haga click 

add.onclick = () =>{
    var valor = tarea.value

    addCard(valor,pendiente, true) /*nueva tarea*/
    saveCard(valor)
    tarea.value =""
}

function saveCard(valor){ /*guardar la targeta*/
    tareas.push(valor)
}

function endCard(valor){
    termindas.push(valor)
}
function addCard(valor, listado, botones){ /*agrgar ñl targeta del contenedor*/
    var card = botones ? cardButtons(newCard(valor)) : newCard(valor)
    listado.appendChild(card)
}
function cardButtons(card){
    var add = document.createElement("button")
    var remove = document.createElement("button")


    add.innerHTML = "Completada &#9989;"
    add.classList = "card-button-add"
    remove.innerHTML = "Eliminar &#10060;"
    remove.classList = "card-button-remove"

    card.appendChild(add)
    card.appendChild(remove)

    add.onclick=()=>{/*cuando de clik haga dicha accion*/
        let nCard = card.firstChild
        endCard(nCard.textContent)
        addCard(nCard.textContent, terminada, false)
        var padre = card.parentElement/*padre es la targ card hijo ncard*/
        padre.removeChild(card)
    }
    remove.onclick=()=>{/*eliminar la tarea*/
        var padre = card.parentElement
        padre.removeChild(card)
    }
    return card
}

function newCard(valor){
    var nuevo = document.createElement("div")
    var texto = document.createElement("p")
    nuevo.classList = "card"
    texto.innerHTML = valor
    texto.classList = "card-title"
    nuevo.appendChild(texto)
    return nuevo
}

function click(){ 
    alert("hola")
}
/*--------------------------------------------*/
