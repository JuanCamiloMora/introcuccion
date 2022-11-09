export interface Carta {
    Nombre:string,
    Imagen:string,
    TipoCarta:string,
    Nivel:number,
    Atributo:string,
    Tipo:string,
    Efecto:string,
    ATK:number,
    DEF:number
    
}

let carta = {
    Nombre:"Mago oscuro",
    Imagen:"https://i.pinimg.com/474x/3c/18/2e/3c182e3e864f30efeecf158e32bf013c.jpg",
    Tipocarta:"Monstruo Normal",
    Nivel:7,
    Atributo:"Oscuridad",
    Tipo:"Lanzador de Conjuros",
    Efecto:"El más grande de los magos en cuanto al ataque y la defensa",
    ATK:2500,
    DEF:2100
}

let cartas: Carta[] = [
    {
        Nombre:"Mago oscuro",
        Imagen:"https://i.pinimg.com/474x/3c/18/2e/3c182e3e864f30efeecf158e32bf013c.jpg",
        TipoCarta:"Monstruo Normal",
        Nivel:7,
        Atributo:"Oscuridad",
        Tipo:"Lanzador de Conjuros",
        Efecto:"El más grande de los magos en cuanto al ataque y la defensa",
        ATK:2500,
        DEF:2100
    },
   //colocar todas las cartas en el arreglo
];