function echo(msg) {
    return msg
}
function sum(...nums) {
    let total = 0
    for (const num of nums) {
        total += num
    }
    return total
}
const MAX_VALUE = 100
// Common JS
// module.exports = { echo: echo, sum: sum }
// module.exports = { echo, sum, MAX_VALUE }

// EX module สำหรับ Browser
export { sum as default, echo, MAX_VALUE }