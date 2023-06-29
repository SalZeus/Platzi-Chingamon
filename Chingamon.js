let ataqueJugador = "";
let ataqueEnemigo="";
let vidasJugador=3;
let vidasEnemigo=3;

function iniciarJuego(){
    const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none";

    const botonMascotaJugador = document.getElementById("boton-mascota")
        botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    const botonFuego =document.getElementById("boton-fuego")
        botonFuego.addEventListener("click", ataqueFuego)
    const botonAgua = document.getElementById("boton-agua")
        botonAgua.addEventListener("click", ataqueAgua)
    const botonTierra = document.getElementById("boton-tierra")
        botonTierra.addEventListener("click", ataqueTierra)

    const botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
    botonReiniciar.style.display = "none";
}

function seleccionarMascotaJugador(){

    const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = "none";
    const sectionDescripcionMascotas = document.getElementById("descripcion-mascotas")
    sectionDescripcionMascotas.style.display = "none";

    const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "flex";


    const inputDoguego = document.getElementById("doguego")
    const inputPepitas = document.getElementById("pepitas")
    const inputGacharco = document.getElementById("gacharco")
    const inputChindagato = document.getElementById("chindagato")
    const inputFripez = document.getElementById("fripez")
    const inputEstreñisaurio = document.getElementById("estreñisaurio")
    const spanMascotaJugador = document.getElementById("mascota-jugador")

    if(inputDoguego.checked == true){
        spanMascotaJugador.innerHTML = " Doguego "
    }
    else if(inputPepitas.checked == true){
        spanMascotaJugador.innerHTML = " Pepitas "
    }
    else if(inputGacharco.checked == true){
        spanMascotaJugador.innerHTML = " Gacharco "
    }
    else if(inputChindagato.checked == true){
        spanMascotaJugador.innerHTML = " Chindagato "
    }
    else if(inputFripez.checked == true){
        spanMascotaJugador.innerHTML = " Fripez "
    }
    else if(inputEstreñisaurio.checked == true){
        spanMascotaJugador.innerHTML = " Estreñisaurio "
    }
    else{
        alert("Intenta de nuevo, presiona enter e intenta seleccionar a tu Chingamon!")
    }
    seleccionarMascotaEnemigo()
}

function combate(){
    const spanVidasJugador =document.getElementById("vidas-jugador")
    const spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("Parece que Solo Hubo un Bailesito")
    }
    else if(ataqueJugador== "el traguito🥃"&&ataqueEnemigo=="la fritación🍽️"
            ||ataqueJugador=="la fritación🍽️"&&ataqueEnemigo=="las pedradas🪨"
            || ataqueJugador=="las pedradas🪨"&&ataqueEnemigo=="el traguito🥃"){        
        crearMensaje("Le diste Pisito :3 Que viva la Violencia!")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
    else{
        crearMensaje("Tu chingamon ha Actualizado su Base de Datos de Virus del Reset que le Dieron :'c")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
}

function revisarVidas(){
    if(vidasJugador == 0){
        crearMensajeFinal(" Finito perrillo! Has perdido :s")
    }
    else if(vidasEnemigo == 0){
        crearMensajeFinal(" Nice, ya le diste piso al pobre, es hora de ir por el siguiente asesinato :3")
    }
}


function crearMensajeFinal(mensajeFinal){
    let sectionMensajes = document.getElementById("resultado")
    
    let parrafo = document.createElement("p")
    sectionMensajes.innerHTML=mensajeFinal
    
    const botonFuego =document.getElementById("boton-fuego")
    botonFuego.disabled = true
    const botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    const botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true

    const botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.style.display = "block";
    
}

function ataqueFuego(){
    ataqueJugador="la fritación🍽️"
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador="el traguito🥃"
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador="las pedradas🪨"
    ataqueAleatorioEnemigo()
}
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    if(ataqueAleatorio==1){
        ataqueEnemigo="la fritación🍽️"
        combate()
    }
    if(ataqueAleatorio==2){
        ataqueEnemigo="el traguito🥃"
        combate()
    }
    if(ataqueAleatorio==3){
        ataqueEnemigo="las pedradas🪨"
        combate()
    }
}


function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(1, 6);
    const spanMascotaEnemigo = document.getElementById("mascota-enemigo")
    
    if(mascotaAleatoria == 1){
        spanMascotaEnemigo.innerHTML= "Doguego"
    }
    else if(mascotaAleatoria == 2){
        spanMascotaEnemigo.innerHTML= "Pepitas"
    }
    else if(mascotaAleatoria == 3){
        spanMascotaEnemigo.innerHTML= "Gacharco"
    }
    else if(mascotaAleatoria == 4){
        spanMascotaEnemigo.innerHTML= "Chidagato"
    }
    else if(mascotaAleatoria == 5){
        spanMascotaEnemigo.innerHTML= "Fripez"
    }
    else if(mascotaAleatoria == 6){
        spanMascotaEnemigo.innerHTML= "Estreñisaurio"
    }
    else{
        alert("hmmm... algo anda mal")
    }
    
    
}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById("resultado")
    let ataquesDelJugador = document.getElementById("ataques-del-jugador")
    let ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")
        
    let nuevoAtaqueDelJugador = document.createElement("p")
    let NuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado;
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
    NuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(NuevoAtaqueDelEnemigo)
}
function reiniciarJuego(){
    location.reload()
}


window.addEventListener("load", iniciarJuego)