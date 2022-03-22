let contenedor = document.getElementById ("container")
let bandera=true
contenedor.addEventListener("click",function(event){
if(bandera==true){
    if(event.target.classList.contains("w-100")){
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