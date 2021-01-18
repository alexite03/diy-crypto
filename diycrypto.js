export function caesarEncrypt(msg, shift) {
    console.log(msg)
const charCodes = []
for (let i = 0; i < msg.lenght; i++) {
    charCodes.push(msg[i].charCodesAt(0))
}
    console.log(charCodes)
for (let i = 0; i < charCodes.lenght; i++) {
    charCodes[i] = charCodes[i] + shift
}
    console.log(charCodes)
let result = ""
for (let i = 0; i < charCodes.length; i++) {
    result = result + String.fromCharCode(charCodes[i])
}
    console.log(result)
return result

}