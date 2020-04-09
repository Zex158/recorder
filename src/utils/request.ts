import axios from 'axios'
import { message } from 'antd'
import { awaitWrap } from '@/utils/util'

export const defaultCustomConfig: IAxiosCustomConfig = {
  showLoading: false,
}
const getFunc = (url: string, config: any) => {
  return axios.get(url, config)
}

const postFunc = (url: string, config: any) => {
  return axios.post(url, config)
}

export const get = async (url: string, option: any = { custom: defaultCustomConfig }) => {
  if (option.custom === undefined) {
    option.custom = defaultCustomConfig
  }
  if (option.custom.showLoading) {
    let key = Math.random()
    message.loading({ content: 'loading', key })

    const [error, response] = await awaitWrap(getFunc(url, option.config))

    if (!error) {
      message.success({ content: 'loaded success', key })
    } else {
      message.error({ content: 'loaded failed', key })
    }

    return [error, response]
  } else {
    const [error, response = {}] = await awaitWrap(getFunc(url, option.config))

    return [error, response]
  }
}

export const post = async (url: string, option: any = { custom: defaultCustomConfig }) => {
  if (option.custom === undefined) {
    option.custom = defaultCustomConfig
  }
  if (option.custom.showLoading) {
    let key = Math.random()
    message.loading({ content: 'loading', key })

    const [error, response] = await awaitWrap(postFunc(url, option.config))

    if (!error) {
      message.success({ content: 'loaded success', key })
    } else {
      message.error({ content: 'loaded failed', key })
    }

    return [error, response]
  } else {
    const [error, response = {}] = await awaitWrap(postFunc(url, option.config))

    return [error, response]
  }
}
