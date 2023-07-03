let ataqueJugador=[]
let ataqueEnemigo=[];
let historialCombate =[]
let vidasJugador=3;
let vidasEnemigo=3;
let jugadorId = null
let enemigoId = null

let chingamones=[]
let chingamonesEnemigos = []
let opcionDeChingamones

let mascotaJugador
let mascotaJugadorObjeto
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
let mapaBackground = new Image()
mapaBackground.src = "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/f5867c00-324b-4213-8bdb-e9623da0a152/variations/Default_generate_a_2d_map_background_pixelart_pokemon_style_an_1_f5867c00-324b-4213-8bdb-e9623da0a152_1.jpg"

let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 3000

if(anchoDelMapa>anchoMaximoDelMapa){
    anchoDelMapa = anchoMaximoDelMapa - 20
}

alturaQueBuscamos = parseInt(anchoDelMapa) * 800/1000
mapa.width = parseInt(anchoDelMapa)
mapa.height = parseInt(alturaQueBuscamos)

class Chingamon{
    constructor(nombre, foto, vida, fotoMapa, id = null){
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = [];
        this.ancho = 80;
        this.alto = 80;
        this.x = aleatorio(0, mapa.width - this.ancho);
        this.y = aleatorio(0, mapa.height - this.alto);
        this.mapaFoto = new Image();
        this.mapaFoto.src = fotoMapa;
        this.velocidadX = 0;
        this.velocidadY = 0;
        this.id = id
    }

    pintarChingamon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
          );
    }
}

let doguego = new Chingamon(
    "Doguego", 
    "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/46693f92-060f-44ea-94f4-5a8a2c78c55c/DreamShaper_v5_fire_dog_small_pet_pokemon_style_anime_lookign_0.jpg", 
    5,
    "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/cd03cc0e-ecf5-431a-a841-fb2502aee028/variations/Default_fire_dog_small_pet_pokemon_style_anime_lookign_0_cd03cc0e-ecf5-431a-a841-fb2502aee028_0.png",
)
let pepitas = new Chingamon(
    "Pepitas", 
    "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/af3a277b-909a-49e5-90cc-576c02525594/DreamShaper_v5_earth_monster_small_anime_looking_throws_seeds_0.jpg", 
    5,
    "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/982bbaee-e754-4a7a-82e6-f00a38394d31/variations/Default_earth_monster_small_anime_looking_throws_seeds_0_982bbaee-e754-4a7a-82e6-f00a38394d31_0.png",
)
let gacharco = new Chingamon(
    "Gacharco", 
    "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/85df02a1-d2f7-484b-b9d9-78dea44bc8cd/DreamShaper_v5_water_monster_small_anime_looking_throws_water_0.jpg", 
    5,
    "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/50e7c756-55b9-4a3f-ba05-f78927b9d366/variations/Default_water_monster_small_anime_looking_throws_water_high_pr_0_50e7c756-55b9-4a3f-ba05-f78927b9d366_0.png",
)
let chindagato = new Chingamon(
    "Chindagato", 
    "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/ba3bcea2-49a2-4a56-9038-527ce1d5dd6c/DreamShaper_v5_fire_and_earth_monster_small_cat_anime_looking_0.jpg", 
    5,
    "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/af75467c-fead-4239-9f49-c58df9d1baf9/variations/Default_fire_and_earth_monster_small_cat_anime_looking_chibi_c_0_af75467c-fead-4239-9f49-c58df9d1baf9_0.png",
)
let fripez = new Chingamon(
    "Fripez", 
    "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/7df5eb6c-5bae-476c-a3f9-3a38b3cd4527/DreamShaper_v5_fire_and_water_monster_small_fish_looking_anime_0.jpg", 
    5,
    "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/948d4118-9a23-48c4-bdd0-ae0325455ce0/variations/Default_fire_and_water_monster_small_fish_looking_anime_lookin_0_948d4118-9a23-48c4-bdd0-ae0325455ce0_0.png",
)
let estreñisaurio = new Chingamon(
    "Estreñisaurio", 
    "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/dad2fa2a-002c-46f8-ac7c-e1f0656609c8/DreamShaper_v5_fire_and_water_monster_small_dinosaur_looking_a_0.jpg", 
    5,
    "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/d2dfd118-6ecf-4e24-8e96-42f5a7c97a44/variations/Default_fire_and_water_monster_small_dinosaur_looking_anime_lo_0_d2dfd118-6ecf-4e24-8e96-42f5a7c97a44_0.png",
)
// enemigos


        
const DOGUEGO_ATAQUES = [
    {nombre: "traguito🥃", id: "boton-agua"},
    {nombre: "traguito🥃", id: "boton-agua"},
    {nombre: "traguito🥃", id: "boton-agua"},
    {nombre: "pedradas🪨", id: "boton-tierra"},
    {nombre: "fritación🍽️", id: "boton-fuego"},
]
const PEPITAS_ATAQUES = [
    {nombre: "pedradas🪨", id: "boton-agua"},
    {nombre: "pedradas🪨", id: "boton-agua"},
    {nombre: "pedradas🪨", id: "boton-tierra"},
    {nombre: "traguito🥃", id: "boton-agua"},
    {nombre: "fritación🍽️", id: "boton-fuego"},
]
const GACHARCO_ATAQUES = [
    {nombre: "traguito🥃", id: "boton-agua"},
    {nombre: "traguito🥃", id: "boton-agua"},
    {nombre: "traguito🥃", id: "boton-agua"},
    {nombre: "pedradas🪨", id: "boton-tierra"},
    {nombre: "fritación🍽️", id: "boton-fuego"},
]
const CHINDAGATO_ATAQUES = [
    {nombre: "fritación🍽️", id: "boton-agua"},
    {nombre: "fritación🍽️", id: "boton-agua"},
    {nombre: "fritación🍽️", id: "boton-fuego"},
    {nombre: "traguito🥃", id: "boton-agua"},
    {nombre: "pedradas🪨", id: "boton-tierra"},
]
const FRIPEZ_ATAQUES = [
    {nombre: "traguito🥃", id: "boton-agua"},
    {nombre: "traguito🥃", id: "boton-agua"},
    {nombre: "pedradas🪨", id: "boton-tierra"},
    {nombre: "fritación🍽️", id: "boton-agua"},
    {nombre: "fritación🍽️", id: "boton-fuego"},
]
const ESTREÑISAURIO_ATAQUES = [
    {nombre: "traguito🥃", id: "boton-agua"},
    {nombre: "fritación🍽️", id: "boton-agua"},
    {nombre: "fritación🍽️", id: "boton-fuego"},
    {nombre: "pedradas🪨", id: "boton-agua"},
    {nombre: "pedradas🪨", id: "boton-tierra"},
]
        
doguego.ataques.push(...DOGUEGO_ATAQUES)
pepitas.ataques.push(...PEPITAS_ATAQUES)
gacharco.ataques.push(...GACHARCO_ATAQUES)
chindagato.ataques.push(...CHINDAGATO_ATAQUES)
fripez.ataques.push(...FRIPEZ_ATAQUES)
estreñisaurio.ataques.push(...ESTREÑISAURIO_ATAQUES)

// doguegoEnemigo.ataques.push(...DOGUEGO_ATAQUES)
// pepitasEnemigo.ataques.push(...PEPITAS_ATAQUES)
// gacharcoEnemigo.ataques.push(...GACHARCO_ATAQUES)
// chindagatoEnemigo.ataques.push(...CHINDAGATO_ATAQUES)
// fripezEnemigo.ataques.push(...FRIPEZ_ATAQUES)
// estreñisaurioEnemigo.ataques.push(...ESTREÑISAURIO_ATAQUES)

chingamones.push(doguego, pepitas, gacharco, chindagato, fripez, estreñisaurio)





function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = "none";
    sectionVerMapa.style.display ="none";
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

    unirseAlJuego()
}

function unirseAlJuego(){
    fetch("http://192.168.5.107:8080/unirse")
    .then(function (res){
        if(res.ok){
            res.text()
                .then(function(respuesta){
                    console.log(respuesta)
                    jugadorId = respuesta
                })
        }
    })
}

function seleccionarMascotaJugador(){
    
    
    
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
        return
    }

    sectionDescripcionMascotas.style.display = "none";
    sectionVerMapa.style.display = "flex"
    sectionSeleccionarMascota.style.display = "none";

    seleccionarChingamon(mascotaJugador)
    extraerAtaques(mascotaJugador)
    iniciarMapa()
    pintarCanvas()
}

function seleccionarChingamon(mascotaJugador){
    fetch(`http://192.168.5.107:8080/chingamon/${jugadorId}`,{
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chingamon: mascotaJugador
        })
    } )
}

function extraerAtaques(mascotaJugador){
    let ataques
    // console.log(mascotaJugador) funcionando
    for(let i = 0; i < chingamones.length; i++) {
        if(mascotaJugador === chingamones[i].nombre){
            ataques = chingamones[i].ataques
        }        
    }
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

function seleccionarMascotaEnemigo(enemigo){
    let mascotaAleatoria = aleatorio(0, chingamones.length-1);
    
    spanMascotaEnemigo.innerHTML = enemigo.nombre;
    ataquesChingamonEnemigo =  enemigo.ataques
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

            if(ataqueJugador.length ===5){
                enviarAtaques()
            }
        })
    })
}

function enviarAtaques(){
    console.log("ataque enviado")
    console.log(ataqueJugador)
    fetch(`http://192.168.5.107:8080/chingamon/${jugadorId}/ataques`,{
        method: "post",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            ataques: ataqueJugador
        }),
    })
    intervalo = setInterval(obtenerAtaques, 50)
}

function obtenerAtaques(){
    fetch(`http://192.168.5.107:8080/chingamon/${enemigoId}/ataques`)
    .then(function(res){
        if(res.ok){
            res.json()
            .then(function({ ataques }){
                if(ataques.length===5){
                    ataqueEnemigo = ataques
                    combate()
                }
            })
        }
    })
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(0, ataquesChingamonEnemigo.length-1)

    if(ataqueAleatorio==0||ataqueAleatorio == 1){
        ataqueEnemigo.push("fritación🍽️")
    }
    else if(ataqueAleatorio==2||ataqueAleatorio==4){
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
    clearInterval(intervalo)
    
    for (let i = 0; i < ataqueJugador.length; i++) {
        if(ataqueJugador[i] === ataqueEnemigo[i]){
            historialCombate.push("Parece que Solo Hubo un Bailesito")
            indexAmbosOponentes(i, i, i)
            crearMensaje("Parece que Solo Hubo un Bailesito")
        }
        else if(ataqueJugador[i] === "fritación🍽️" && ataqueEnemigo[i] === "pedradas🪨"
                ||ataqueJugador[i]=="traguito🥃"&&ataqueEnemigo[i]=="fritación🍽️"
                || ataqueJugador[i]=="pedradas🪨"&&ataqueEnemigo[i]=="traguito🥃"){
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

function pintarCanvas() {

    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY 
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height,
    )
    mascotaJugadorObjeto.pintarChingamon()

    enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)

    // doguegoEnemigo.pintarChingamon()
    // pepitasEnemigo.pintarChingamon()
    // gacharcoEnemigo.pintarChingamon()
    // chindagatoEnemigo.pintarChingamon()
    // fripezEnemigo.pintarChingamon()
    // estreñisaurioEnemigo.pintarChingamon()
    chingamonesEnemigos.forEach(function(chingamon){
        chingamon.pintarChingamon()
        revisarColision(chingamon)
    })
}

function enviarPosicion(x, y){
    fetch(`http://192.168.5.107:8080/chingamon/${jugadorId}/posicion`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y,
        })
    })
    .then(function (res){
        if(res.ok){
            res.json()
            .then(function({enemigos}){
                chingamonesEnemigos = enemigos.map(function(enemigo){
                    console.log(enemigo)
                    console.log(enemigos)
                    let chingamonEnemigo
                    const chingamonNombre = enemigo.chingamon.nombre || console.log(enemigo.Chingamon)
                    
                    if(chingamonNombre === "Doguego"){
                        chingamonEnemigo = new Chingamon(
                            "Doguego", 
                            "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/46693f92-060f-44ea-94f4-5a8a2c78c55c/DreamShaper_v5_fire_dog_small_pet_pokemon_style_anime_lookign_0.jpg", 
                            5,
                            "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/cd03cc0e-ecf5-431a-a841-fb2502aee028/variations/Default_fire_dog_small_pet_pokemon_style_anime_lookign_0_cd03cc0e-ecf5-431a-a841-fb2502aee028_0.png",
                            enemigo.id
                        )

                    }
                    else if(chingamonNombre === "Pepitas"){
                        chingamonEnemigo = new Chingamon(
                            "Pepitas", 
                            "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/af3a277b-909a-49e5-90cc-576c02525594/DreamShaper_v5_earth_monster_small_anime_looking_throws_seeds_0.jpg", 
                            5,
                            "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/982bbaee-e754-4a7a-82e6-f00a38394d31/variations/Default_earth_monster_small_anime_looking_throws_seeds_0_982bbaee-e754-4a7a-82e6-f00a38394d31_0.png",
                            enemigo.id
                        )

                    }
                    else if(chingamonNombre === "Gacharco"){
                        chingamonEnemigo = new Chingamon(
                            "Gacharco", 
                            "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/85df02a1-d2f7-484b-b9d9-78dea44bc8cd/DreamShaper_v5_water_monster_small_anime_looking_throws_water_0.jpg", 
                            5,
                            "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/50e7c756-55b9-4a3f-ba05-f78927b9d366/variations/Default_water_monster_small_anime_looking_throws_water_high_pr_0_50e7c756-55b9-4a3f-ba05-f78927b9d366_0.png",
                            enemigo.id
                        )

                    }
                    else if(chingamonNombre === "Chindagato"){
                        chingamonEnemigo = new Chingamon(
                            "Chindagato", 
                            "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/ba3bcea2-49a2-4a56-9038-527ce1d5dd6c/DreamShaper_v5_fire_and_earth_monster_small_cat_anime_looking_0.jpg", 
                            5,
                            "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/af75467c-fead-4239-9f49-c58df9d1baf9/variations/Default_fire_and_earth_monster_small_cat_anime_looking_chibi_c_0_af75467c-fead-4239-9f49-c58df9d1baf9_0.png",
                            enemigo.id
                        )

                    }
                    else if(chingamonNombre === "Fripez"){
                        chingamonEnemigo = new Chingamon(
                            "Fripez", 
                            "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/7df5eb6c-5bae-476c-a3f9-3a38b3cd4527/DreamShaper_v5_fire_and_water_monster_small_fish_looking_anime_0.jpg", 
                            5,
                            "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/948d4118-9a23-48c4-bdd0-ae0325455ce0/variations/Default_fire_and_water_monster_small_fish_looking_anime_lookin_0_948d4118-9a23-48c4-bdd0-ae0325455ce0_0.png",
                            enemigo.id
                        )

                    }
                    else if(chingamonNombre === "Estreñisaurio"){
                        chingamonEnemigo = new Chingamon(
                            "Estreñisaurio", 
                            "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/dad2fa2a-002c-46f8-ac7c-e1f0656609c8/DreamShaper_v5_fire_and_water_monster_small_dinosaur_looking_a_0.jpg", 
                            5,
                            "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/d2dfd118-6ecf-4e24-8e96-42f5a7c97a44/variations/Default_fire_and_water_monster_small_dinosaur_looking_anime_lo_0_d2dfd118-6ecf-4e24-8e96-42f5a7c97a44_0.png",
                            enemigo.id
                        )

                    }
                    else if (enemigo.mokepon != undefined) {
                        console.log("no hay enemigo")
                    }
                    else{
                        console.log("c:")
                    }

                    chingamonEnemigo.x = enemigo.x
                    chingamonEnemigo.y =  enemigo.y  

                    return chingamonEnemigo
                })
            })
        }
    })
}

function moverArriba(){
    mascotaJugadorObjeto.velocidadY = -15
}
function moverIzquierda(){
    mascotaJugadorObjeto.velocidadX = -15
}
function moverAbajo(){
    mascotaJugadorObjeto.velocidadY = 15
}
function moverDerecha(){
    mascotaJugadorObjeto.velocidadX = 15;
}
function detenerMovimiento(){
    mascotaJugadorObjeto.velocidadX = 0;
    mascotaJugadorObjeto.velocidadY = 0;
}
function sePresionoUnaTecla(event){
    switch (event.key) {
        case "ArrowUp":
            moverArriba()
            break
        case "ArrowDown":
            moverAbajo()
            break
        case "ArrowLeft":
            moverIzquierda()
            break
        case "ArrowRight":
            moverDerecha()
            break    
        default:

            break;
    }
}
function iniciarMapa(){
    mascotaJugadorObjeto =obtenerObjetoMascota(mascotaJugador)
    intervalo = setInterval(pintarCanvas, 50)
    console.log(mascotaJugadorObjeto, mascotaJugador)
    window.addEventListener("keydown", sePresionoUnaTecla)
    window.addEventListener("keyup", detenerMovimiento)
}
function obtenerObjetoMascota(){
    for(let i = 0; i < chingamones.length; i++) {
        if(mascotaJugador === chingamones[i].nombre){
            return chingamones[i]
        }        
    }
}
function revisarColision(enemigo){
    const arribaEnemigo = enemigo.y
    const izquierdaEnemigo = enemigo.x
    const abajoEnemigo =enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho

    const arribaMascota = mascotaJugadorObjeto.y
    const izquierdaMascota = mascotaJugadorObjeto.x
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho

    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ){
        return;
    }
    detenerMovimiento()
    clearInterval(intervalo)
    console.log("se detecto una colision" +enemigo+" "+enemigoId);
    enemigoId = enemigo.id
    console.log(enemigoId)
    sectionSeleccionarAtaque.style.display = "flex";
    sectionVerMapa.style.display = "none"
    // alert("Tu " +mascotaJugadorObjeto.nombre+ " ha chocao con un " + enemigo.nombre+ " shalvaje :o")

    seleccionarMascotaEnemigo(enemigo)

}

window.addEventListener("load", iniciarJuego)