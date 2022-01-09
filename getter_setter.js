class Person {
    constructor(name, age) { // parent 
        this.name = name;
        this.age = age;
    }
    eat() { // method
        console.log('Person is eating')
    }
    sleep() {
        console.log('Person is Sleeping')
    }
    get getAge() { // getter  it works like function but it will access by users as like properties
        return this.age
    }
    set setAge(age) { // setter 
        this.age = age
    }
    static equalAge() { // it is the built in method of Person class not object 
        console.log('I am 20 years old')
    }
}
let Emon = new Person('Emon', 35);
console.log(Person.equalAge())
Emon.setAge = 21
console.log(Emon)
console.log(Emon.getAge)