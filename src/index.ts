function countBits(n: number): number {
    // n.toStrign(2).split('0').join('').length
    return n > 0 ? n.toString(2).split('').filter((n) => Number(n) > 0).length : 0
}
//console.log(countBits(1234))

function disemvowel(str: string): string {
    return str.split('').filter((chr) => ['a', 'e', 'o', 'i', 'u'].indexOf(chr.toLowerCase()) == -1).join('')
}
//console.log(disemvowel("This website is for losers LOL!")) // "Ths wbst s fr lsrs LL!"

function XO(str: string): boolean {
    str = str.toLowerCase()
    const oChar = 'o'
    const xChar = 'x'
    if (!str.includes(oChar) && !str.includes(xChar)) return true

    const o = []
    const x = []
    for (let i= 0; i < str.length; i++) {
        if (str[i] === oChar) {
            o.push(str[i])
        } else if (str[i] === xChar) {
            x.push(str[i])
        } 
    }
    console.log(o, x)
    return o.length === x.length
}


function order(words: string): any {
    // @ts-ignore
    // instead filter i can use match with RegExp for numbers
    return words.split(' ').sort((a, b) => a.split('').filter(Number) - b.split('').filter(Number))
}
//console.log(order("is2 Thi1s T4est 3a")) // "Thi1s is2 3a T4est"

function spinWords(string: string): string {
  return string.split(' ').map((w) => w.length > 4 ? w.split('').reverse().join('') : w).join(' ')
}
//console.log(spinWords("Hey fellow warriors"))

function likes(names: string[]): string {
    if (names.length === 1) return `${names.join('')} likes this`
    else if (names.length === 2) return `${names.join(' and ')} likes this`
    else if (names.length === 3) return `${names.slice(0, 2).join(',')}, ${names.pop()} like this`
    else if (names.length > 3) return `${names.slice(0, 2).join(', ')} and ${names.splice(2, names.length).length} like this`
    else return 'no one likes this'
}
console.log(likes(['peter', 'john', 'adam', 'smith', 'sam']))

function whoLikesIt(names: string[]): any {
    const n: string[] = []
    for (let i = 0; i < names.length; i++) {
        const temp = []
    }
    return `${n} like${!names.length && names.length === 1 ? 's' : ''} this`
}
console.log(whoLikesIt(['pete', 'sam', 'gin']))

function duplicateEncode(word: string): string {
    word = word.toLowerCase()
    const encode: string[] = []
    for (let i = 0, len = word.length; i < word.length; i++) {
        const indexes = i === len - 1 ? [0, len - 1] : [i + 1, len]
        if (String.prototype.substring.apply(word, indexes).includes(word[i])) encode.push(')') 
        else encode.push('(')
    }
    return encode.join('')
}
//console.log(duplicateEncode('din'))
//console.log(duplicateEncode('recede'))
//console.log(duplicateEncode('Success'))

/**
 *function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}
 *
 * */

function duplicate(word: string): string {
    let chars = word.toLowerCase().split('')
    const charcodes = chars.map(char => char.charCodeAt(0))
    return chars.map((char) => {
        const isDuplicated = charcodes.filter((code) => code === char.charCodeAt(0)).length > 1
        return isDuplicated ? ')' : '('
    }).join('')
}

const perform: number[] = []
const words = ['Success', '(( @']

words.forEach((w) => {
    console.log('d', duplicate(w))
}) 

console.log(String.prototype.substring.apply('recede', [2, 3]))

const word = 'ReVers EngineRIng'
const lower = () => word.toLowerCase()
const arrLower = () => word.split('').map(chr => chr.toLowerCase()).join('')

const values: number[] = []

const start = window.performance.now()
//console.time('lower')
lower()
//console.timeEnd('lower')
const end = window.performance.now()
const time = end - start
values.push(time)


const start1 = window.performance.now()
//console.time('arrLower')
arrLower()
//console.timeEnd('arrLower')
const end1 = window.performance.now()
const time1 = end1 - start1
values.push(time1)

console.log(values[0] > values[1]) 




