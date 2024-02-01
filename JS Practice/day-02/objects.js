
//creating an object

const person = {
    firstName: "Jared",
    lastName: "LastName",
    age: 25,
    hobbies: ["bee keeping", "frontend dev", "astronomy", "CrossFit"],
    homeTown: "Home Hill",
    workAddress: {
        Street: "Airport Blvd",
        City: "Boulder",
        State: {
            longName: "Colorado",
            shortName: "CO"
        }
    },
    greet: function () {
        console.log("Ciao, mi chiamo " + this.firstName + ".It is a pleasure to meet you!");
    }
};


//method is ONLY inside an Object (acts like an Object property), a function can be anywhere...
console.dir(person);
console.log(person.hobbies);
console.log(person);


// Modifying object properties
// const only makes it so that the main content of the variable is the same
person.lastName = 'Smith';
console.log(person.lastName);

// Adding new properties to the object
person.nationality = 'Australian';
console.log(person);
console.log(person.nationality);

console.log(person.greet);
person.greet();

// Adding new methods to the object
person.introduce = function () {
    console.log(
        "I am " +
        this.firstName +
        " " +
        this.lastName +
        ". I am " +
        this.age +
        " years old."
    );
};
// Calling the new method
person.introduce()

// Destructuring (object > variables)
const { firstName, lastName, age, hobbies } = person;
console.log(firstName, lastName, age, hobbies);

// Assigning an object to a variable
const test = {}

// Assigning parts of objects to separate variables
const { address, nationality } = person
console.log(address);