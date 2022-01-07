class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log('Person is eating')
    }
    sleep() {
        console.log('Person is Sleeping')
    }
    play() {
        console.log(`${this.name} is Playing`)
    }

}
const Sakib = new Person('Sakib', 34)
const Tamim = new Person('Tamim', 30)
Tamim.play()