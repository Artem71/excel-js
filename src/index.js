import './module.js'
import './scss/index.scss'

console.log('entry point')

async function start() {
  console.log('test 4')
  await Promise.resolve()
}

start()
