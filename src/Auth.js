import React, { useEffect } from 'react';
import axios from 'axios';
import { AUTH_KEY, CALLBACK_URL, CLIENT_ID } from './constants';

const Auth = ({ match, history }) => {
  useEffect(() => {
    const reqOptions = {
      url: 'https://api.tdameritrade.com/v1/oauth2/token',
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      form: {
          'grant_type': 'authorization_code',
          'access_type': 'offline',
          'code': match.params.code, 
          'client_id': CLIENT_ID + "@AMER.OAUTHAP",
          'redirect_uri': CALLBACK_URL
      }

    }

    axios(reqOptions)
      .then((response) => {
        localStorage.setItem(AUTH_KEY, JSON.stringify(response))
        history.push('/')
      }).catch(e => console.error(e))
  }, [history, match])

  return (
    <div>
      Authenticating...
    </div>
  )
}

export { Auth };
