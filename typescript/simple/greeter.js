class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
function greeter(person) {
    return "Hello," + person.firstName + " " + person.lastName;
}
// let user = "Jane User";
// let user = [1, 2, 3]; // this won't compile
// let user = { firstName: "Jane", lastName: "Doe" }
let user = new Student("Jane", "M.", "Doe");
console.log(greeter(user));
