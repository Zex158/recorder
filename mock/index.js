const example = require('./example')

const useProxy = process.env.proxy == 'true'
const proxyUrl = process.env.proxyUrl
let proxy = {}
console.log(useProxy, proxy)
if (useProxy) {
  proxy = {
    _proxy: {
      proxy: {
        //here to set proxy url
        '/api/(.*)': proxyUrl
      },
      changeHost: false
    }
  }
} else {
  proxy = {
    ...example
  }
}

module.exports = proxy
