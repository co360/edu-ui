import queryString from 'query-string'
import axios from 'axios'
import { navigate } from 'gatsby'
import { appConfig } from '../common/config'
import {
  getLocalStorage,
  setLocalStorage,
  TOKEN_KEY,
  USER_DATA_KEY,
  isBrowser,
} from './localStorage'

export const handleAuthentication = async (provider = 'github') => {
  if (!isBrowser) {
    return
  }

  const callBackParams = queryString.parse(window.location.search)
  const requestURL = `${appConfig.strapiURL}/auth/${provider}/callback`

  try {
    const { data } = await axios.get(requestURL, { params: callBackParams })

    if (data.jwt) {
      setLocalStorage(TOKEN_KEY, data.jwt)
      setLocalStorage(USER_DATA_KEY, JSON.stringify(data.user))
      navigate('/signin')
    }
  } catch (e) {
    //
  }
}

export const isLoggedIn = () => {
  return getLocalStorage(TOKEN_KEY) ? true : false
}

export const getUser = () => {
  const user = getLocalStorage(USER_DATA_KEY)
  return isBrowser && user ? JSON.parse(user) : {}
}
