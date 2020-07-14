
// let add = (x: number, y: number) => x + y // ts 会自动推断出数据类型

// let come: (x: number, y: number) => number
// come = (a, b) => a + b

// let obj: { x: number, y: number } = { x: 1, y: 2 }
// obj.x = 1

// let s1: symbol = Symbol()
// let s2 = Symbol()
// console.log(s1 === s2)
 
// let un: undefined = undefined
// let nu: null = null

enum role {
  reporter,
  developer,
  owner,
  guest
}

export default {
  role
}
