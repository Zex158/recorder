import { USER_IS_LOGIN, setLoginAction, INIT_AUTHENTICATION } from '@/actions/authority/authority'

export enum ILoginType {
  notLogin,
  originLogin,
  thirdPartyLogin,
}

const defaultState: IAuthorityState = {
  logined: false,
  userId: '',
  loginFrom: null,
  loginType: ILoginType.notLogin,
}

export default (state = defaultState, action: ReturnType<typeof setLoginAction>) => {
  switch (action.type) {
    case USER_IS_LOGIN:
      return action.logined ? action.authority : Object.assign({}, state, defaultState)
    case INIT_AUTHENTICATION:
      return action.authority || defaultState
    default:
      return state
  }
}
