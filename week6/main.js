function isImageFileExtension(fileName) {
    return fileName.substring(fileName.lastIndexOf('.'))
}

console.log(isImageFileExtension('sample.jpg'))

function isImageFileExtension(fileName) {
    if (fileName === null || fileName === undefined) return false
    return (fileName.endsWith('png') ||
        fileName.endsWith('.jpg') ||
        fileName.endsWith('.jpeg') ||
        fileName.endsWith('.gif') ||
        fileName.endsWith('.svg'))
}

console.log(isImageFileExtension('sample.svg'))

const yeahman = 'kuy rai sus'
console.log(yeahman)
