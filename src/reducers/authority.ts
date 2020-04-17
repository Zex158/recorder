import { USER_IS_LOGIN, setLoginAction, initAuthentication, INIT_AUTHENTICATION } from '@/actions/authority/authority'

export enum ILoginType {
  notLogin,
  originLogin,
  thirdPartyLogin,
}

const defaultAuthority: IAuthorityState = {
  logined: false,
  userId: '',
  loginFrom: null,
  loginType: ILoginType.notLogin,
}
const defaultCurrentUser: ICurrentUser = null
const defaultState = {
  authority: defaultAuthority,
  currentUser: defaultCurrentUser,
}

export default (state = defaultState, action: any) => {
  switch (action.type) {
    case USER_IS_LOGIN:
      return action.logined ? action.authority : Object.assign({}, state, defaultState)
    case INIT_AUTHENTICATION:
      return action.authority || defaultState
    default:
      return state
  }
}
