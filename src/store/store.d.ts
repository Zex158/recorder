declare interface IStoreState {
  route: {
    location: Location
    action: string
  }
  authority: IAuthorityState
  [propName: string]: any
}
