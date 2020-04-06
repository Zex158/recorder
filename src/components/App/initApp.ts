import axios from 'axios'
import { getAppinfo, getAppConfig } from '@/services/appinfo'
import { authenticate, getCurrentUser, getCurrentUserModule, getCurrentUserTrace } from '@/services/authority'

export const initApp = async (saveAppInfo: any, saveUserInfo: any) => {
  await getAppInitialData(saveAppInfo)
    .then((response) => {
      console.log('get app info success')
      return response.authentication
    })
    .then((authentication) => {
      console.log('get user info success')
      if (
        !authentication[0] &&
        typeof authentication[1] === 'object' &&
        authentication[1].success &&
        typeof authentication[1].data === 'object' &&
        authentication[1].data.logined
      ) {
        return getLoginUserInfo(authentication[1].data.userId, saveUserInfo)
      }
      return
    })
}

export const getAppInitialData = (callback: any) => {
  return axios.all([getAppinfo(), getAppConfig(), authenticate()]).then(
    axios.spread((appinfo, appconfig, authentication) => {
      callback({
        appinfo,
        appconfig,
        authentication,
      })
      return {
        appinfo,
        appconfig,
        authentication,
      }
    }),
  )
}

export const getLoginUserInfo = (userId: string, callback: any) => {
  return axios
    .all([
      getCurrentUser(),
      getCurrentUserModule({
        config: {
          params: { userId },
        },
      }),
      getCurrentUserTrace({
        config: {
          params: { userId },
        },
      }),
    ])
    .then(
      axios.spread((currentUser, userModule, userTrace) => {
        callback({
          currentUser,
          userModule,
          userTrace,
        })
        return {
          currentUser,
          userModule,
          userTrace,
        }
      }),
    )
}
