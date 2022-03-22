let contenedor = document.getElementById ("container")
let bandera=true
contenedor.addEventListener("click",function(event){
if(bandera==true){
    if(event.target.classList.contains="w-100"){
        event.target.src="img/cinema2.png"
        bandera=false

    }
}

    else{
        if(event.target.classList.contains("w-100")){
            event.target.src="img/cinema-chair.png"
            bandera=true
        }
    }

})

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
