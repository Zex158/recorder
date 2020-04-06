export const USER_IS_LOGIN = Symbol()
export const INIT_AUTHENTICATION = Symbol()

export const setLoginAction = (logined: Boolean, authority?: IAuthorityState) => ({
  type: USER_IS_LOGIN,
  logined,
  authority,
})

export const initAuthentication = (authority?: IAuthorityState) => ({
  type: INIT_AUTHENTICATION,
  authority,
})
