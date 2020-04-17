import { CURRENT_USER, setCurrentUser } from '@/actions/authority/currentUser'
import { ILoginType } from './authority'
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

export default (state = defaultState, action: ReturnType<typeof setCurrentUser>) => {
  switch (action.type) {
    case CURRENT_USER:
      return action.user
    default:
      return state
  }
}
