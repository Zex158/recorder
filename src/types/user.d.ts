declare interface IRole {
  roleType: 0 | 1 | 2 | 3
  roleName: string
}

declare interface IUser {
  role: IRole
  userName: string
  userId: string
}
type ICurrentUser = IUser | null
