declare enum languages {
  'zh-CN' = 'zh-CN',
  'en-US' = 'en-US',
}

declare interface appinfo {
  version: string
  productType: string
  languages: languages
}
