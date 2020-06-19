export const AUTH_KEY = 'AUTH';
export const CALLBACK_URL = process.env.REACT_APP_CALLBACK_URL;
export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

export const AMERITRADE_AUTH_URL = `https://auth.tdameritrade.com/auth?response_type=code&redirect_uri=${CALLBACK_URL}&client_id=${CLIENT_ID}%40AMER.OAUTHAP`;
