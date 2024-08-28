

class Animal {
    constructor(name, gender){
        this.name = name;
        this.gender = gender;
    }

    // get name(){
    //     return this.name;
    // }

    eats() {
        return (this.name, 'eats');
    }

    sleeps() {
        return (this.name, 'sleeps');
    }
}

class Goat extends Animal{
    constructor(name, gender){
        super(name, gender);
    }

    eats(){
        console.log(this.name, 'grass');
    }

}
let animal = new Goat('Goat', 'Male' );
animal.eats();


class Lion{
    #name = '';
        #showname(){
        console.log(this.#name);
    }
}

let l = new Lion('Lion');
l.name