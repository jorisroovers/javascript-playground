
interface Person {
    firstName: string;
    lastName: string;
}

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

function greeter(person: Person) {
    return "Hello," + person.firstName + " " + person.lastName;
}

// let user = "Jane User";
// let user = [1, 2, 3]; // this won't compile
// let user = { firstName: "Jane", lastName: "Doe" }
let user = new Student("Jane", "M.", "Doe");

console.log(greeter(user));