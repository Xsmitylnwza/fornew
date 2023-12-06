import { CookieUtil } from "./myLib/cookieUtil.js"


// document.cookie = 'username=Chaimongkon'
// document.cookie = 'course=INT201'
// document.cookie = 'credit=3'
// const currentCookies = document.cookie
// console.log(currentCookies)
// console.log(CookieUtil.get('username'))

CookieUtil.set('username', 'Umapornzzz', new Date(2023, 11, 25))
CookieUtil.set('course', 'INT201', new Date(2023, 11, 31))
CookieUtil.set('credit', 'lnwza', new Date(2023, 11, 31))

document.cookie = 'KUY=NAHHEE'
console.log(CookieUtil.get('username'))
console.log(CookieUtil.get('course'))
console.log(CookieUtil.unset('credit'))
console.log(CookieUtil.get('credit'))

let smthing = document.querySelector('p>input')

smthing.addEventListener('input', function () {
    document.body.style.backgroundColor = smthing.value

})
