const axios = require('axios')

// count how many times we have sent our request
let count = 0

// async funciton so we can 'await' a promise and not have to use callbacks
const main = async () => {

  // send our web request and print out the result
  const resp = await axios.get('https://google.com')
  console.log(resp.data)

  // increment a counter and exit if we've met our target
  if (++count === 5) return

  // after 1 second, call this function again
  setTimeout(main, 1000)
}

main()
