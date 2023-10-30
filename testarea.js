const person = {
    personid: 1, firstname: 'somsak', lastname: 'jaidee',
    helloworld: function () {
        console.log(`HELLO WORLD!!! ${this.firstname}`)

    }
}
const student = Object.create(person)
const studentcopy = person

console.log(student === person)
console.log(studentcopy === person)
person.helloworld();

const msg = {
    sender: 'Somsak',
    recipient: 'Pornsuda',
    content: {
        header: 'Reminder our party',
        body: 'Let see you in the party'
    }
}

const { sender, content: { header } } = msg

console.log(sender)
console.log(header)


const arrow1 = (a1, a2) => {
    return a1 + a2
}

console.log(arrow1(50, 100))



