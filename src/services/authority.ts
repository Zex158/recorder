import { get } from '@/utils/request'

export const authenticate = async (config?: any) => {
  return await get('/api/authentication', config)
}

export const getCurrentUser = async (config?: any) => {
  return await get('/api/currentUser', config)
}

export const getCurrentUserModule = async (config?: any) => {
  return await get('/api/currentUserModule', config)
}

export const getCurrentUserTrace = async (config?: any) => {
  return await get('/api/currentUser/trace', config)
}
