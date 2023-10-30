// const mail = {
//     sender: 'SIT, KMUTT',
//     recipent: 'Umaporn Sup',
//     title: 'Welcome to KMUTT',
//     sentDate: new Date(Date.now())
// }

// // Object destructuring ต้องอ้างชื่อ property ให้ตรงกันเท่านั้น
// let { recipent } = mail
// let { sentDate, title: header } = mail //sentDate, header
// console.log(recipent)
// console.log(sentDate)
// console.log(header)


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

//firstname, lastname
let {
    recipent: { firstname: kuy, lastname: key }
} = mail
console.log(kuy)
console.log(key)
// host name
let { sentDetail: { host: { name: kuyyai } } } = mail
console.log(kuyyai)