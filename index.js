const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

const jugadores = []

class Jugador{
    constructor(id){
        this.id = id
    }

    asignarChingamon(chingamon){
        this.chingamon = chingamon
    }

    actualizarPosicion(x, y){
        this.x = x
        this.y = y
    }

    asignarAtaques(ataques){
        this.ataques = ataques
    }
}

class Chingamon{
    constructor(nombre){
        this.nombre = nombre
    }
}

app.get("/unirse", (req, res)=>{
    const id = `${Math.random()}`
    const jugador = new Jugador(id)

    jugadores.push(jugador)

    res.setHeader("Access-Control-Allow-Origin", "*")

    res.send(id)
})

app.post("/chingamon/:jugadorId", (req, res)=>{
    const jugadorId = req.params.jugadorId || ""
    const nombre = req.body.chingamon||""
    const chingamon = new Chingamon(nombre)
    
    const jugadorIndex = jugadores.findIndex((jugador)=>jugadorId===jugador.id)

    if(jugadorIndex>= 0){
        jugadores[jugadorIndex].asignarChingamon(chingamon)
    }

    console.log(jugadores)
    console.log(jugadorId)
    res.send({jugadorIndex})
})

app.post("/chingamon/:jugadorId/posicion", (req, res) => {
    const jugadorId = req.params.jugadorId || "";
    const x = req.body.x || 0;
    const y = req.body.y || 0;
  
    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id);
  
    if (jugadorIndex >= 0) {
      jugadores[jugadorIndex].actualizarPosicion(x, y)
    };
  
    const enemigos = jugadores.filter((jugador) => jugadorId !== jugador.id)


    res.send({
        enemigos,
        response: "response",
        enemigosLog : console.log(enemigos),
      });
    // not sending response to browser
  })

  app.post("/chingamon/:jugadorId/ataques", (req, res)=>{
    const jugadorId = req.params.jugadorId || ""
    const ataques = req.body.ataques || []

    const jugadorIndex = jugadores.findIndex((jugador)=>jugadorId===jugador.id)

    if(jugadorIndex>= 0){
        jugadores[jugadorIndex].asignarAtaques(ataques)
    }

    res.send({jugadorIndex})
})
  

app.listen(8080, ()=>{
    console.log("servidor funcionando")
})