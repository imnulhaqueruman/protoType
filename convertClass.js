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
    eat() { /// Polymorphism .. when child class over right parent class method then use polymorphism 
        super.eat()
        console.log(`${this.name} is Playing`)
    }
    play() {
        console.log(`${this.name} is Playing`)
    }

}
const Sakib = new Cricketer("Sakib", 34, 'AllROunder', 'bang')
Sakib.eat()