// enhanced object literals
const person = {
    name: "Jared",
    age: 28,
    greeting() {
        return `Hi, my name is ${this.name}. I am ${this.age} years old.`;
    },
    introduction() {
        return `Nice to meet you, my name is ${this.name}.`
    }
};

console.log(person.greeting(), person.introduction());