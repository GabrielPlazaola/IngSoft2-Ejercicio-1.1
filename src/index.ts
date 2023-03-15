class Elemento {
    nombre: string;
  }

export class Carpeta extends Elemento{
    elementos: Array<Elemento>;
    agregaralista(x:Elemento) {
        this.elementos.push(x);
    }
    mostrarlista(){
        var list: Array<string>;
        list = []
        var i: number;
        i = 0;
        while (i != this.elementos.length){
            list.push(this.elementos[i].nombre);
            i = i+1;
        }
        return list
    }
    constructor(nom:string){
        super();
        this.nombre = nom;
        this.elementos = [];
    }
}

class Archivo extends Elemento{
    tamanio: string;
    tipo: string;
    constructor(){
        super()
    }
}

export class Foto extends Archivo{
    dimensiones: string;
    constructor(nom:string, tam:string, tip:string, dim:string){
        super()
        this.nombre=nom;
        this.tamanio=tam;
        this.tipo=tip;
        this.dimensiones=dim;
    }
}

export class Video extends Archivo{
    duracion: string;
    constructor(nom:string, tam:string, tip:string, dur:string){
        super()
        this.nombre=nom;
        this.tamanio=tam;
        this.tipo=tip;
        this.duracion=dur;
    }
}
