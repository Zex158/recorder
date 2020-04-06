const example = require('./example')
const useProxy = process.env.USE_PROXY == 'true'
const proxyUrl = process.env.PROXY_URL
let proxy = {}
console.log(useProxy, proxy)
if (useProxy) {
  proxy = {
    _proxy: {
      proxy: {
        //here to set proxy url
        '/api/(.*)': proxyUrl,
      },
      changeHost: false,
    },
  }
} else {
  proxy = {
    ...example,
  }
}

module.exports = proxy
