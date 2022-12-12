let number = 0

const increment = () => {
  number += 1
  let message = `Incremented to ${number}`

  return () => {
    console.log(message)
    console.log(`Number: ${number}`)
  }
}

const log3 = increment()
log3()
const log2 = increment()


log2()