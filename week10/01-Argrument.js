function ops(n1, n2, ...n3) {
    console.log(arguments.length)
    arguments[0] = 555
    console.log(arguments[2])
    for (const argu of arguments) {
        console.log(argu) // 1, true, 'xyz
    }
    console.log('n3:', n3)
}

ops(1, true, 'xyz', 10.5) // actual parameters, arguments object stores
// collections at actual parameters


//example use rest argruments
function sum(...nums) {
    return nums.reduce((total, current) => total + current, 0)
}

console.log(sum(1, 2, 4, 5, 6, 7))


// if send undefined เราจะต้อง set ค่่า defualt ให้มันโดยการเช็คถึงแม้เราจะส่ง undefined เข้ามามันก็จะ set Default ให้
function ops2(n1 = 'F', n2 = 'false', n3 = 'unknown') {
    return { n1, n2, n3 }
}
console.log(ops2('A', 'C+'))
console.log(ops2())
console.log(ops2(undefined, undefined, undefined))
console.log(ops2(null, null, null))
console.log(ops2('A', undefined, 'Somchai'))

function sum2(num1, num2, num3) {
    return num1 + num2 + num3
}
let nums2 = [5, 20, 15]
//spread parameter
console.log(sum2(...nums2))
console.log(sum2(nums2)) // กลายเป็น concat ไป 