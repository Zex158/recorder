import { get } from '@/utils/request'

export const getAppinfo = async (config?: any) => {
  return await get('/api/appinfo', config)
}

export const getAppConfig = async (config?: any) => {
  return await get('/api/appconfig', config)
}
