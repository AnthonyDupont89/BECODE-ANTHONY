const user = {
    firstName: 'Anthony',
    lastName: 'Dupont',
    age: 35,
    printAge: function () {
        console.log(`${this.firstName} ${this.lastName} is ${this.age}`);
    },
    aYearHasPast: function () {
        return ++this.age;
    }
}

user.printAge();

user.aYearHasPast();
user.printAge();



