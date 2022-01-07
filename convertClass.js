class Person {
    constructor(name, age) { // parent 
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log('Person is eating')
    }
    sleep() {
        console.log('Person is Sleeping')
    }
}
// sub class
class Cricketer extends Person {
    constructor(name, age, type, country) {
        super(name, age) // bind two class
        this.name = name;
        this.age = age;
        this.type = type;
        this.country = country
    }
    play() {
        console.log(`${this.name} is Playing`)
    }

}
const Sakib = new Cricketer("Sakib", 34, 'AllROunder', 'bang')
Sakib.play()