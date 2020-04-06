const appinfo = require('./appInfo')
const user = require('./user')
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
    ...appinfo,
    ...user,
  }
}

module.exports = proxy
