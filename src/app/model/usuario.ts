export interface usuario {

    name:String,
    lastname:String,
    age:number,
    address:String,
    height:number;
    company:company
    
}

//para llamar la interfas creada
let usuario= {

    name:"Elon",
    lastname:"Musk",
    age:48,
    address:"Boston Street",
    height:182
    
}

//interfaz creada
export interface company{
    
    name:string,
    valve:number,
    location:Location
}

//para llamar la interfas creada
let company={

    name:"Tesla",
    valve:1000000000,
    
}

export interface Location
{
    location: {

        lat:string,
        lon:string
    }
}

//para llamar la interfas creada
let location ={

    lat:"55.87611",
    lon:"-23.65899"
}