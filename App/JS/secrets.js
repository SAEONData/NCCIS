'use strict'

import { ssoBaseURL } from './config/serviceURLs.js'
import { siteBaseURL } from './config/serviceURLs.js'

let config = {
  client_id: 'CCIS_React_Client',
  redirect_uri: `${siteBaseURL}#/callback#`,
  post_logout_redirect_uri: `${siteBaseURL}#/logout`,
  silent_redirect_uri: `${siteBaseURL}silent_renew.html`,
  response_type: 'id_token token',
  scope: 'openid profile email SAEON_CCIS_Web_API',
  authority: ssoBaseURL,
  automaticSilentRenew: true,
  filterProtocolClaims: false,
  loadUserInfo: true,
  silentRequestTimeout: 30000
}

export const userManagerConfig = config