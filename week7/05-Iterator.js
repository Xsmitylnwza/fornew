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
// มันรับเป็น callback function
keywords.forEach((keyword) => console.log(keyword.charAt(0)))
//string that contains the first charactor of each keyword
let result = ''
keywords.forEach((keyword) => result += keyword.charAt(0))
console.log(result)
mails.forEach((mail) => console.log(mail))

keywords.push('optional chaining')
console.log(keywords)
//2. all mail ids of mails array
let { id: id } = mails[1]
console.log(id)
const mailIds = []
mails.forEach((mail) => {
    mailIds.push(mail.id)
})
console.log(mailIds)

//3. return array that contains keywords include 'es' (case insensitive)
const esKeywords = keywords.filter(keyword => keyword.toLowerCase().includes('es'))
console.log(esKeywords)

//4. array that contains all senders'firstname
const mail_sender = mails.map(mail => mail.sender.firstname)
console.log(mail_sender)

//5. array that contains all mailids that start with 'logId-'
const logId = mails.map(mail => `LogId-${mail.id}`)
console.log(logId)