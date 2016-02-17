import test from 'ava'
import sinon from 'sinon'

let originalConsoleLog

test.beforeEach(setup)
test.afterEach(cleanup)

test('first log', t => {
  console.log('first')
  t.true(console.log.calledOnce)
})

test('second log', t => {
  console.log('second')
  t.true(console.log.calledOnce)
})


function setup() {
  originalConsoleLog = console.log
  console.log = sinon.spy()
}

function cleanup() {
  console.log = originalConsoleLog
}


