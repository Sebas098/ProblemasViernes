let planeta1={
    nombre:"Tierra",
    latitud:80.5,
    longitud:109.10,
    nivelOxigeno:0.05,
    volumenAgua:0.75

}

let planeta2={
    nombre:"Namek",
    latitud:180.5,
    longitud:19.10,
    nivelOxigeno:0.8,
    volumenAgua:0.09 

}

//PREPARANDO LAS ENTRADAS
let planetas=Array(planeta1,planeta2)

function analizarPlanetas(planetas){
    //recorrer un Arreglo
    let mapa=planetas.map(function(planeta ){
        return(planeta.volumenAgua)
    })

    let suma=0
    mapa.forEach(function(volumenAgua){
        suma=suma+volumenAgua
    })
    return suma
}

console.log(analizarPlanetas(planetas))