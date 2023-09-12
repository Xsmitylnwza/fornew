// primitive parameter passing

function double(a) { // a = m, a = 5
    return a * 2
}
let m = 5
console.log(m) // 5
console.log(double(m)) // 10

// object parameter passing
function update(a) {
    //a=n, a=memory address of n because a accept array object
    a[0] = 555
}

const n = [1, 2, 3]
console.log(update(n))
console.log(n) //[ 555, 2, 3 ]