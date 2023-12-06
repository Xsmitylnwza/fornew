function isImageFileExtension(fileName) {
    return /.jpg$|.png$|.jpeg$|.gif$|.svg$/.test(fileName)
}

console.log(isImageFileExtension('afa.svg'))

function isImageFileExtension2(fileName) {
    return /[a-z]/.test(fileName)
}
console.log(isImageFileExtension2('a'))


const fruit = ['apple', 'mango', 'orange', 'grape']
//4.return boolean to check whether fruits collection startwiths vowel character
console.log(fruit.some((fza) => /^[aeiou]/.test(fza)))