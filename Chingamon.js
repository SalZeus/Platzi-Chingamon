let ataqueEnemigo="";
let vidasJugador=3;
let vidasEnemigo=3;

let chingamones=[]
let opcionDeChingamones

let mascotaJugador
let ataquesChingamon
let ataqueJugador = []

let inputDoguego
let inputPepitas
let inputGacharco
let inputChindagato
let inputFripez
let inputEstreñisaurio
let botonFuego 
let botonAgua 
let botonTierra
let arregloBotones = {}

const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonReiniciar = document.getElementById("boton-reiniciar")
const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const sectionDescripcionMascotas = document.getElementById("descripcion-mascotas")
const sectionMensajes = document.getElementById("resultado")
const contenedorTarjetas = document.getElementById("contenedor-de-tarjetas")
const contenedorAtaques = document.getElementById("contenedor-de-ataques")

const spanMascotaJugador = document.getElementById("mascota-jugador")
const spanMascotaEnemigo = document.getElementById("mascota-enemigo")
const spanVidasJugador =document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")
class Chingamon{
    constructor(nombre, foto, vida){
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = [];
    }
}

let doguego = new Chingamon("Doguego", "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/46693f92-060f-44ea-94f4-5a8a2c78c55c/DreamShaper_v5_fire_dog_small_pet_pokemon_style_anime_lookign_0.jpg", 5)
let pepitas = new Chingamon("Pepitas", "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/af3a277b-909a-49e5-90cc-576c02525594/DreamShaper_v5_earth_monster_small_anime_looking_throws_seeds_0.jpg", 5)
let gacharco = new Chingamon("Gacharco", "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/85df02a1-d2f7-484b-b9d9-78dea44bc8cd/DreamShaper_v5_water_monster_small_anime_looking_throws_water_0.jpg", 5)
let chindagato = new Chingamon("Chindagato", "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/ba3bcea2-49a2-4a56-9038-527ce1d5dd6c/DreamShaper_v5_fire_and_earth_monster_small_cat_anime_looking_0.jpg", 5)
let fripez = new Chingamon("Fripez", "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/7df5eb6c-5bae-476c-a3f9-3a38b3cd4527/DreamShaper_v5_fire_and_water_monster_small_fish_looking_anime_0.jpg", 5)
let estreñisaurio = new Chingamon("Estreñisaurio", "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/dad2fa2a-002c-46f8-ac7c-e1f0656609c8/DreamShaper_v5_fire_and_water_monster_small_dinosaur_looking_a_0.jpg", 5)

chingamones.push(doguego, pepitas, gacharco, chindagato, fripez, estreñisaurio)

doguego.ataques.push(
    {nombre: "fritación🍽️", id: "boton-fuego"},
    {nombre: "fritación🍽️", id: "boton-fuego"},
    {nombre: "fritación🍽️", id: "boton-fuego"},
    {nombre: "pedradas🪨", id: "boton-tierra"},
    {nombre: "traguito🥃", id: "boton-agua"},
)
pepitas.ataques.push(
    {nombre: "pedradas🪨", id: "boton-tierra"},
    {nombre: "pedradas🪨", id: "boton-tierra"},
    {nombre: "pedradas🪨", id: "boton-tierra"},
    {nombre: "fritación🍽️", id: "boton-fuego"},
    {nombre: "traguito🥃", id: "boton-agua"},
)
gacharco.ataques.push(
    {nombre: "traguito🥃", id: "boton-agua"},
    {nombre: "traguito🥃", id: "boton-agua"},
    {nombre: "traguito🥃", id: "boton-agua"},
    {nombre: "pedradas🪨", id: "boton-tierra"},
    {nombre: "fritación🍽️", id: "boton-fuego"},
)
chindagato.ataques.push(
    {nombre: "traguito🥃", id: "boton-agua"},
    {nombre: "traguito🥃", id: "boton-agua"},
    {nombre: "traguito🥃", id: "boton-agua"},
    {nombre: "pedradas🪨", id: "boton-tierra"},
    {nombre: "fritación🍽️", id: "boton-fuego"},
)
fripez.ataques.push(
    {nombre: "traguito🥃", id: "boton-agua"},
    {nombre: "traguito🥃", id: "boton-agua"},
    {nombre: "traguito🥃", id: "boton-agua"},
    {nombre: "pedradas🪨", id: "boton-tierra"},
    {nombre: "fritación🍽️", id: "boton-fuego"},
)
estreñisaurio.ataques.push(
    {nombre: "traguito🥃", id: "boton-agua"},
    {nombre: "traguito🥃", id: "boton-agua"},
    {nombre: "traguito🥃", id: "boton-agua"},
    {nombre: "pedradas🪨", id: "boton-tierra"},
    {nombre: "fritación🍽️", id: "boton-fuego"},
)



function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = "none";
    botonReiniciar.style.display = "none";


    chingamones.forEach((chingamon) =>{
        opcionDeChingamones=`
        <input type="radio" name="mascota" id=${chingamon.nombre}>
        <label class="tarjeta-de-mokepon" for=${chingamon.nombre} id=${chingamon.nombre}">
            <p>${chingamon.nombre}</p>
            <img src=${chingamon.foto} alt=${chingamon.nombre}>
        </label>
        `

        contenedorTarjetas.innerHTML += opcionDeChingamones

        inputDoguego = document.getElementById("Doguego")
        inputPepitas = document.getElementById("Pepitas")
        inputGacharco = document.getElementById("Gacharco")
        inputChindagato = document.getElementById("Chindagato")
        inputFripez = document.getElementById("Fripez")
        inputEstreñisaurio = document.getElementById("Estreñisaurio")
    })

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador(){

    sectionSeleccionarMascota.style.display = "none";
    sectionDescripcionMascotas.style.display = "none";
    sectionSeleccionarAtaque.style.display = "flex";

    if(inputDoguego.checked == true){
        spanMascotaJugador.innerHTML = inputDoguego.id
        mascotaJugador =inputDoguego.id
    }
    else if(inputPepitas.checked == true){
        spanMascotaJugador.innerHTML = inputPepitas.id
        mascotaJugador =inputPepitas.id
    }
    else if(inputGacharco.checked == true){
        spanMascotaJugador.innerHTML = inputGacharco.id
        mascotaJugador =inputGacharco.id
    }
    else if(inputChindagato.checked == true){
        spanMascotaJugador.innerHTML = inputChindagato.id
        mascotaJugador =inputChindagato.id
    }
    else if(inputFripez.checked == true){
        spanMascotaJugador.innerHTML = inputFripez.id
        mascotaJugador =inputFripez.id
    }
    else if(inputEstreñisaurio.checked == true){
        spanMascotaJugador.innerHTML = inputEstreñisaurio.id
        mascotaJugador =inputEstreñisaurio.id
    }
    else{
        alert("Intenta de nuevo, presiona enter e intenta seleccionar a tu Chingamon!")
    }

    
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador){
    let ataques
    // console.log(mascotaJugador) funcionando
    for(let i = 0; i < chingamones.length; i++) {
        if(mascotaJugador === chingamones[i].nombre){
            ataques = chingamones[i].ataques
        }        
    }
    console.log(ataques)
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {
        ataquesChingamon=`
        <button class="boton-ataque BAtaque" type="button" id=${ataque.id}>${ataque.nombre}</button><br/>
        `
        contenedorAtaques.innerHTML += ataquesChingamon
        

    })
    
    botonFuego = document.getElementById("boton-fuego")
    botonAgua = document.getElementById("boton-agua")
    botonTierra = document.getElementById("boton-tierra")
    arregloBotones = document.querySelectorAll(".BAtaque")

}

function secuenciaAtaque(){
    arregloBotones.forEach((boton) =>{
        boton.addEventListener("click", (e) => {
            if(e.target.textContent === "fritación🍽️"){
                ataqueJugador.push("fuego")
                console.log(ataqueJugador)
                boton.style.background = "#2e4b38"
            }
            else if(e.target.textContent === "traguito🥃"){
                ataqueJugador.push("agua")
                console.log(ataqueJugador)
                boton.style.background = "#2e4b38"
            }
            else{
                ataqueJugador.push("tierra")
                console.log(ataqueJugador)
                boton.style.background = "#2e4b38"
            }
        })
    })
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(0, chingamones.length-1);
    
    spanMascotaEnemigo.innerHTML = chingamones[mascotaAleatoria].nombre;  
    secuenciaAtaque() 
}

function combate(){
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


function crearMensaje(resultado){
    
        
    let nuevoAtaqueDelJugador = document.createElement("p")
    let NuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado;
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
    NuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(NuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(mensajeFinal){
    
    let parrafo = document.createElement("p")
    sectionMensajes.innerHTML=mensajeFinal
    
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
    
    botonReiniciar.style.display = "block";
    
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

function reiniciarJuego(){
    location.reload()
}


window.addEventListener("load", iniciarJuego)