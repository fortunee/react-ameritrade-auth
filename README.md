### Ameritrade Authentication with React.
This is a simple app that basically allows you to authenticate via ameritrade API and make subsequent calls with the access_token returned from a successful authentiation.

> Note: Ensure you have created an app on Ameritrade developer platform to obtain a CLIENT_ID and set a CALLBACK_URL

## Setup 
- Create a `.env.local` file
- Add a `REACT_APP_CLIENT_ID` variable
- Add a `REACT_APP_CALLBACK_URL` variable
- See `.env.sample` file for example
- Run `yarn install`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
