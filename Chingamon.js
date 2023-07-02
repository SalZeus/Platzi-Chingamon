let ataqueJugador=[]
let ataqueEnemigo=[];
let historialCombate =[]
let vidasJugador=3;
let vidasEnemigo=3;

let chingamones=[]
let opcionDeChingamones

let mascotaJugador
let ataquesChingamon
let ataquesChingamonEnemigo
let indexAtaqueJugador
let indexAtaqueEnemigo
let indexHistorialCombate
let victoriasJugador = 0
let victoriasEnemigo = 0

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
const contenedorCombate = document.getElementById("historial-combate")



const spanMascotaJugador = document.getElementById("mascota-jugador")
const spanMascotaEnemigo = document.getElementById("mascota-enemigo")
const spanVidasJugador =document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")

const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")
let lienzo = mapa.getContext("2d")
let intervalo
class Chingamon{
    constructor(nombre, foto, vida){
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = [];
        this.x = 20;
        this.y = 30;
        this.ancho = 80;
        this.alto = 80;
        this.mapaFoto = new Image();
        this.mapaFoto.src = foto;
        this.velocidadX = 0;
        this.velocidadY = 0;
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
    sectionVerMapa.style.display ="none";
    botonReiniciar.style.display = "none";
    pintarPersonaje()

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
    // sectionSeleccionarAtaque.style.display = "flex";
    sectionVerMapa.style.display = "flex"
    intervalo = setInterval(pintarPersonaje, 50)


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

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(0, chingamones.length-1);
    
    spanMascotaEnemigo.innerHTML = chingamones[mascotaAleatoria].nombre;
    ataquesChingamonEnemigo =  chingamones[mascotaAleatoria].ataques
    secuenciaAtaque() 
}

function secuenciaAtaque(){
    arregloBotones.forEach((boton) =>{
        boton.addEventListener("click", (e) => {
            if(e.target.textContent === "fritación🍽️"){
                ataqueJugador.push("fritación🍽️")
                boton.style.background = "#2e4b38"
                boton.disabled="true"
            }
            else if(e.target.textContent === "traguito🥃"){
                ataqueJugador.push("traguito🥃")
                boton.style.background = "#2e4b38"
                boton.disabled="true"
            }
            else{
                ataqueJugador.push("pedradas🪨")
                boton.style.background = "#2e4b38"
                boton.disabled="true"
            }
            ataqueAleatorioEnemigo();

        })
    })
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(0, ataquesChingamonEnemigo.length-1)

    if(ataqueAleatorio==0||ataqueAleatorio == 1){
        ataqueEnemigo.push("fritación🍽️")
    }
    if(ataqueAleatorio==2||ataqueAleatorio==4){
        ataqueEnemigo.push("traguito🥃")
    }
    else{
        ataqueEnemigo.push("pedradas🪨")
    }
    iniciarPelea()   
}

function iniciarPelea(){
    if(ataqueJugador.length === 5){
        combate()
        // console.log(ataqueJugador)
        // console.log(ataqueEnemigo)
    }

};

function combate(){
    
    for (let i = 0; i < ataqueJugador.length; i++) {
        if(ataqueJugador[i] === ataqueEnemigo[i]){
            historialCombate.push("Parece que Solo Hubo un Bailesito")
            indexAmbosOponentes(i, i, i)
            crearMensaje("Parece que Solo Hubo un Bailesito")
        }
        else if(ataqueJugador[i] === "fritación🍽️" && ataqueEnemigo[i] === "pedradas🪨"
                ||ataqueJugador[i]=="la fritación🍽️"&&ataqueEnemigo[i]=="las pedradas🪨"
                || ataqueJugador[i]=="las pedradas🪨"&&ataqueEnemigo[i]=="el traguito🥃"){
            historialCombate.push("Le diste Pisito :3 Que viva la Violencia!")
            indexAmbosOponentes(i, i, i)
            crearMensaje("Le diste Pisito :3 Que viva la Violencia!")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }
        else{
            historialCombate.push("La base de chingadatos de tu chingamon, ha sido chinga-actualizada :'c")
            indexAmbosOponentes(i, i, i)
            crearMensaje("La base de chingadatos de tu chingamon, ha sido actualizada :'c")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }
    revisarVidas()
}

function indexAmbosOponentes(jugador, enemigo, combate){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
    indexHistorialCombate = historialCombate[combate]
}

function revisarVidas(){
    if(victoriasJugador == victoriasEnemigo){
        crearMensajeFinal("Se rompieron sus dientitos, pero abos estan igual de rotos :o")
    }
    else if(victoriasJugador>victoriasEnemigo){
        crearMensajeFinal(" Nice, ya le diste piso al pobre, es hora de ir por el siguiente asesinato :3")
    }
    else{
        crearMensajeFinal("A mi me late que tu chingamon esta listo para el medico papu 👀")
    }
}


function crearMensaje(resultado){
    
        
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")
    let nuevoLogCombate = document.createElement("p")

    sectionMensajes.innerHTML = resultado;
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador;
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo;
    nuevoLogCombate.innerHTML = indexHistorialCombate

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
    contenedorCombate.appendChild(nuevoLogCombate)
}

function crearMensajeFinal(mensajeFinal){
    
    let parrafo = document.createElement("p")
    sectionMensajes.innerHTML=mensajeFinal
    
    botonReiniciar.style.display = "block";
    
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function reiniciarJuego(){
    location.reload()
}

function pintarPersonaje() { 
    doguego.x = doguego.x + doguego.velocidadX
    doguego.y = doguego.y + doguego.velocidadY 
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
      doguego.mapaFoto,
      doguego.x,
      doguego.y,
      doguego.ancho,
      doguego.alto
    );
}
function moverArriba(){
    doguego.velocidadY = -5
}
function moverIzquierda(){
    doguego.velocidadX = -5
}
function moverAbajo(){
    doguego.velocidadY = 5
}
function moverDerecha(){
    doguego.velocidadX = 5;
}
function detenerMovimiento(){
    doguego.velocidadX = 0;
    doguego.velocidadY = 0;
}

window.addEventListener("load", iniciarJuego)