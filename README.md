# s3-uploader

> Browser based S3 file upload, using signed upload tokens.

Demo at https://tomfa.github.io/s3-uploader

----

Code in this repository can be used as a basis for implementing direct S3 upload for your website users, by providing them with a one-time upload token. 

In this repository, aws secret and access keys are provided through the UI. For a production service, your keys should be stored on server, not in client. `src/lib/aws/auth.js` contains most of the logic that should then be moved.

**Related documention**: https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-UsingHTTPPOST.html

## Development

### Setup
```
yarn
```
Install dependencies defined in `package.json`

### Start local server
```
yarn start
```
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Run tests
```
yarn test
```
Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Build
```
yarn build
```

Builds the app for production to the `build` folder.

## Deploy
```
yarn deploy
```
Deploys to `homepage` specified in `package.json` – You'll need access to the corresponding github repository.
