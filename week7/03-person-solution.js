class Person {
    //constructor
    constructor(firstname, lastname, dateOfBirth) {
        this.firstname = firstname
        this.lastname = lastname
        this.dateOfBirth = dateOfBirth
    }
    getFullName() {
        //return string in the format 'lastName, firstName'
        return `${this.lastname}, ${this.firstname}`
    }
    // compare this firstName and lastName to the specified another person object.
    // Return false if the fullName are different and true, if it is the same (case insensitive)
    isEqual(anotherPerson) {
        return (this.firstname.toLowerCase() === anotherPerson.firstname.toLowerCase() &&
            this.lastname.toLowerCase() === anotherPerson.lastname.toLowerCase())
    }
    //return age by calculating from dateOfBirth
    getAge() {
        // returns the number of milliseconds
        const currentDateMilli = Date.now()
        console.log(currentDateMilli)
        const yeahbro = new Date(currentDateMilli)
        console.log(yeahbro)
        const birthDateMilli = this.dateOfBirth.getTime()
        const diffMilli = currentDateMilli - birthDateMilli
        const ddd = new Date(diffMilli)
        console.log(ddd)
        console.log(currentDateMilli, birthDateMilli, diffMilli)
        const diffDate = new Date(diffMilli)
        return diffDate.getFullYear() - 1970
    }
    //return a string representing fullName and age
    toString() {
        return `${this.getFullName()}, ${this.getAge()}`
    }

}

const p1 = new Person('Umaporn', 'Sup', new Date(2004, 4, 24))
const p2 = new Person('Chaimongkon', 'Zapzap', new Date(1980, 12, 10))
console.log(p1.getFullName())
console.log(p2.getFullName())
console.log(p2.isEqual(p1))
console.log(p1.isEqual(p1))
console.log(p1.getAge())