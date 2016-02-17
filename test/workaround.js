import test from 'ava'
import sinon from 'sinon'

let originalConsoleLog

test('first log', t => {
  setup()
  console.log('first')
  t.true(console.log.calledOnce)
  cleanup()
})

test('second log', t => {
  setup()
  console.log('second')
  t.true(console.log.calledOnce)
  cleanup()
})


function setup() {
  originalConsoleLog = console.log
  console.log = sinon.spy()
}

function cleanup() {
  console.log = originalConsoleLog
}



