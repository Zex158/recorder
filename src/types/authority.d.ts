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
declare enum ILoginType {
  notLogin,
  originLogin,
  thirdPartyLogin,
}

declare interface IAuthorityState {
  logined: boolean
  loginType: ILoginType
  loginFrom: string | null
  userInfo: IUserInfo | null
  modules: IModule[] | null
}
