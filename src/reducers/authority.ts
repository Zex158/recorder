import { USER_IS_LOGIN, setLoginAction } from '@/actions/authority/authority'

const defaultState: IAuthorityState = {
  logined: false,
  loginFrom: null,
  userInfo: null,
  loginType: 0,
  modules: null,
}
export default (state = defaultState, action: ReturnType<typeof setLoginAction>) => {
  switch (action.type) {
    case USER_IS_LOGIN:
      return action.authority
    default:
      return state
  }
}
