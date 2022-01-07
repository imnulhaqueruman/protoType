function Person(name, age) { // parent class 
    this.name = name;
    this.age = age;
}
// sub class of Person 
function Cricketer(name, age, type, country) {
    Person.call(this) // bind two function and inheritance this property to Person 
    this.name = name;
    this.age = age;
    this.type = type;
    this.country = country
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

Cricketer.prototype = Object.create(Person.prototype) // create new object by calling this
Cricketer.prototype.constructor = Cricketer // overRide constructor function beacuse by default cricketer constructor doesn't call  Person.call(this) but when its overRight than it includes.
Cricketer.prototype.play = function() {
    console.log(`${this.name} is Playing`)
}
const Sakib = new Cricketer("Sakib", 34, 'AllROunder', 'bang')