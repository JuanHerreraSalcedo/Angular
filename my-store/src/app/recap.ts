const username: string = 'Juanherre'; //un solo tipo

const username1: string | number = 'Juan';  //un dos tipos de valores tanto numerico como escrito


const sum = (a: number, b: number) =>{
    return a + b;
}
sum(1,3);


class Persona { 
    age: number;
    lastName: string;

    constructor(age: number,lastName: string){
        this.age = age;
        this.lastName = lastName;
    }
}

const juan = new Persona(22, 'Herrera');
juan.age;