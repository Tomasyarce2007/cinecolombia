let boton = document.getElementById ("boton")
boton.addEventListener("click", recibirDatos)
function recibirDatos (event){
    event.preventDefault()
    
    let cantidad = document.getElementById ("cantidad").value
    
    

    let asiento = document.getElementById ("asiento").value

    if(asiento == "preferencial"){
        alert("El valor a pagar es de $" + cantidad*40000)
    } 

    else{
        alert("El valor a pagar es de $" + cantidad*20000)
    }

}
