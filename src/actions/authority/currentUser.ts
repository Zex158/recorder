export const CURRENT_USER = Symbol()

export const setCurrentUser = (user?: ICurrentUser) => ({
  type: CURRENT_USER,
  user,
})
