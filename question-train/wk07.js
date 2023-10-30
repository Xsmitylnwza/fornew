//1. create function that reciept arr and return object with {sum:?, avg:?, min:?, max:?} ans in 01-warmup
const arr1 = [2, 4, 6, 8]
const arr2 = [1, 3, 5, 9]





//2. destructuring this object by following this question ans. in 02-destructuring
const mail = {
    sender: 'SIT, KMUTT',
    recipent: {
        firstname: 'Umaporn',
        lastname: 'Sup'
    },
    title: 'Welcome to KMUTT',
    sentDetail: {
        sentDate: new Date(Date.now()),
        host: {
            name: '@sit.kmutt'
        }
    }
}
//2.1 get firstname, lastname
const { recipent: { firstname: fname, lastname: lname } } = mail
console.log(fname, lname)



//2.2 get host name
const { sentDetail: { host: { name: name } } } = mail
console.log(name)


//3. crate object Person class with following requirement
// constructor have 3 field firstname,lastname,dateOfBirth ans. in 03-person 1.GetFullname 2.Isequal(another Person) 3.GetAge 4.ToString
class Person {
    constructor(firstname, lastname, dateOfBirth) {
        this.firstname = firstname
        this.lastname = lastname
        this.dateOfBirth = dateOfBirth
    }
}

//4. Loop with Array function ans. 05-Iterator
const keywords = ['destructuring', 'spread', 'rest', 'prototype', 'function']

const mails = [
    {
        id: 12323502,
        sender: {
            firstname: 'Umaporn',
            lastname: 'Sup'
        },
        subject: 'Welcome to SIT, KMUTT'
    },
    {
        id: 5588811,
        sender: {
            firstname: 'Tisanai',
            lastname: 'Chat'
        },
        subject: 'Reminder: INT201 Class'
    }
]

// 4.1 print all keyword with first index
let afindex = keywords.reduce((lnwza, keyword) => {
    return lnwza += keyword.charAt(0)
}, '')
console.log(afindex)


// 4.2 return a string that contain all first index of keywords
keywords.forEach((keyword) => console.log(keyword))



// 4.3 print all mail



// 4.4 get id from first array of mail
const fid = mails[0].id
console.log(fid)


// 4.5 create new array to collect all id of mails
const alldata = []
mails.forEach((mail) => {
    alldata.push(mail.id)
})
console.log(alldata)

// 4.6 return array that contains keywords include 'es' (case insensitive)
const wtf = keywords.filter((keyword) => keyword.toLowerCase().includes('es'))
console.log(wtf)


// 4.7 array that contains all senders'firstname
let senderfname = mails.map((mail) => {
    return mail.sender.firstname
})
console.log(senderfname)


// 4.8 array that contains all mailids that start with 'logId-'
let hahman = mails.map((mail) => {
    return `logId-${mail.id}`
})
console.log(hahman)

