import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { AMERITRADE_AUTH_URL, AUTH_KEY } from "./constants";
import { Auth } from "./Auth";

const btnStyle = {
  padding: "20px",
  cursor: "pointer",
  borderRadius: "15px",
  fontSize: "18px"
};

const wrapperDivStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
}

const fetchUserPrincipals = async (token) => {
  // make request for user principals
}

const fetchUserAccounts = async (token) => {
  // make request for user accounts
}

const fetchUserPositions = async (token) => {
  // make request for user postions
}


function App() {
  const [auth, setAuth] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem(AUTH_KEY)) || {};
    setAuth(auth)

    return async () => {
      if (auth.access_token) {
        setLoading(true)
        // Continue with other requests using token
        const principals = await fetchUserPrincipals(auth.access_token);
        const accounts = await fetchUserAccounts(auth.access_token);
        const positions = await fetchUserPositions(auth.access_token);

        console.log({ principals, accounts, positions })
        setLoading(false)
      }
    }
  }, [])

  const handleComputeAction = async () => {
    setLoading(true)
    if (!Object.keys(auth).length) {
      window.open(AMERITRADE_AUTH_URL, '_blank');
    }
  }

  return (
    <>
      <Router>
        <Switch>
          <Route path='/auth/:code' component={Auth}/>
        </Switch>
      </Router>
      <div style={wrapperDivStyle}>
        <button style={btnStyle} onClick={handleComputeAction}>
          { loading ? 'Authenticating and loading...' : 'Compute User Postions' }
        </button>
      </div>
    </>
  );
}

export default App;
