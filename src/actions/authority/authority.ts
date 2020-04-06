export const USER_IS_LOGIN = Symbol()

export const setLoginAction = (authority: IAuthorityState) => ({
  type: USER_IS_LOGIN,
  authority,
})
