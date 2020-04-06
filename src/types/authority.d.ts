declare interface IUserInfo {
  id: string
  name: string
}

declare interface IModule {
  moduleName: string
  moduleId: string
  isLeaf: boolean
  subModules?: IModule[]
}

declare interface IAuthorityState {
  logined: boolean
  loginType: 0 | 1 | 2
  loginFrom: string | null
  userId: string
}
