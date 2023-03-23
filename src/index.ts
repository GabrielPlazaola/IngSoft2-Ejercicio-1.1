class Elemento {
    nombre: string;
    tamanio(){
        return this.nombre.length
    }
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
    tamanio():number{
        var tamaniocalculado: number = this.nombre.length;
        var i: number = 0;
        while (i < this.elementos.length){
            tamaniocalculado = tamaniocalculado + this.elementos[i].tamanio()
            i = i+1;
        }
        return tamaniocalculado;
    }
    constructor(nom:string){
        super();
        this.nombre = nom;
        this.elementos = [];
    }
}

class Archivo extends Elemento{
    tipo: string;
    constructor(){
        super()
    }
}

export class Foto extends Archivo{
    dimensiones: string;
    constructor(nom:string, tip:string, dim:string){
        super()
        this.nombre=nom;
        this.tipo=tip;
        this.dimensiones=dim;
    }
}

export class Video extends Archivo{
    duracion: string;
    constructor(nom:string, tip:string, dur:string){
        super()
        this.nombre=nom;
        this.tipo=tip;
        this.duracion=dur;
    }
}
