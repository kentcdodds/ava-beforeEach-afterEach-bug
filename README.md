# ava-beforeEach-afterEach bug

The `test` directory has a `bug.js` and a `workaround.js`.

If you run: `npm install` and then `npm t` you'll get:

```
~/Developer/ava-beforeEach-afterEach-bug (master)
⛄  $ npm run test -s

  ✔ workaround › first log
  ✔ workaround › second log
  ✔ bug › first log
  ✖ bug › second log   
  t.true(console.log.calledOnce)
                     |          
                     false      
  

  1 test failed

  1. second log
  AssertionError: false === true
    Test.fn (test/bug.js:16:3)
    

```

For some reason, it appears that perhaps the cleanup function is not run between the two test runs.
