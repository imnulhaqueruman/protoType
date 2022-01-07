// function Person(name, age) {
//     let person = Object.create(Person.prototype)
//     person.name = name;
//     person.age = age;


//     return person

// } constructor function 
function Person(name, age) {
    ///let person = Object.create(Person.prototype) Than we don't need to create object with  Object.create
    this.name = name;
    this.age = age;


    // return person and don't need to return this child object 

}
Person.prototype = { // this is the property of function which is include in Person function and that is point an Object. 
        //we can access this method function from outside by using child
        // we contain in this property share common things of object.Prototype inherits this method from parent to child .
        eat() {
            console.log('Person is eating')
        },
        sleep() {
            console.log('Person is Sleeping')
        }
    }
    // const sakib = Person('Sakib', 35) // in here we can create instance of Person object by in book function 
    // const Tamim = Person('Tamim', 30)
const Sakib = new Person('Sakib', 34)
const Tamim = new Person('Tamim', 30)
console.log(sakib)
console.log(Tamim)
Tamim.eat()

function test() {

}
console.dir(test)