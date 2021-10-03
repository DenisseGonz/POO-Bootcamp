class Pokemon{
 
    //Atributos de la clase, El # ayuda a que en encapsulamiento, los datos sean privados
    #name = '';
    #type = '';
    #evolutions = [];

    //El constructor nos ayuda a inicializar los objetos o valores

    constructor(name,type,evolutions){
        this.#name=name;
        this.#type=type;
        this.#evolutions=evolutions;
    }

    //Aquí estan los métodos (funciones). A traves de los metodos get y set, nos ayudan con el encapsulamiento y es la forma de acceder a las variables ya privadas.
    set name(name){
        if(name==''){
            this.#name='No existe';
        }else{
            this.#name=name;
        }
    }
    set type(type){
        this.#type=type;
    }
    set evolutions(evolutions){
        this.#evolutions=evolutions;
    }
    get name(){
        return this.#name;
    }
    get type(){
        return this.#type;
    }
    get evolutions(){
        return this.#evolutions;
    }
    attack(){
        return `${this.#name}, esta atacando`
    }

    evolve(evolution = 0){
        //con evolution valida si el arreglo es vacio
        const evolve = this.#evolutions[evolution] || '';
        let message = 'No puedo evolucionar';

        if(evolve){
            message= `${this.#name} esta evolucionando a ${evolve}`;
            this.#name = evolve;
        }

        return message;
    }
}

class Typefire extends Pokemon{

    constructor(name,evolutions){
        super(name,'Fire',evolutions);
    }

    message(){
        return `Hola, soy ${this.name} y soy de tipo fuego.`; 
    }
}

const Charmander = new Typefire('Charmander',['Charmeleon','Charizard']);
console.log(Charmander.message());