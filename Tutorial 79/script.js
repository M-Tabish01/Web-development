// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal;

class animal{
    constructor(name){
        this.name = name
        console.log("Object is created")
    }
    eats(){
        console.log("Kha raha hoon ");
        
    }
    jumps(){
        console.log("Kood raha hoon ");
        
    }
}

class Lion extends animal {
    constructor(name){
        super(name)
        // this.name = name
        console.log("Object is created and he is a LION........")
    }
    eats(){
        console.log("Roar and Eating ");
        super.eats()
        
    }
}

let a = new animal("Bunny")
let l = new Lion("Sher")
console.log(l);
