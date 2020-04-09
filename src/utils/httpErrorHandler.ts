import axios from 'axios'
import { message } from 'antd'

export const init = () => {
  axios.interceptors.response.use(
    (response) => {
      if (response.data.success) {
        return response.data
      } else {
        message.error(response.data.error, 5)
      }
    },
    (error) => {
      if (error.response) {
        if (error.response.status === 401) {
          message.warn('not login !')
        } else if (error.response.status === 403) {
          message.warn('no permission !')
        } else if (error.response.status === 404) {
          message.warn('not found !')
        } else {
          message.warn('unexpected exception!')
        }
      } else {
        message.warn('unexpected exception!')
      }
      return Promise.reject(error)
    },
  )
}
