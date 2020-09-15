Hi!  I'm excited to share my app Stay Tuned with you.
This app allows music lovers to organize their favorite YouTube Videos into a 
variety of playlists.  It's easy for our favorite tune to get lost in the shuffle. Stay Tuned can help organize your music videos to keep the party going!

How to Start the App:
1.  Either fork this repository to create your own local repository or clone it down to run it.
2.  After making sure you are in the /src directory in the terminal (if not, cd into it), run npm install in the project directory in the terminal to install the necessary packages to allow the app to function properly.
3.  Run json-server -p 5002 -w staytuned.json in the project directory's api folder in order to initiate the database. These steps will let you run a json server with the trip.json which will allow all of the fetch calls in modules to interact with that data.
4.  In a separate terminal window, start the app by running npm start which will run the app in the development mode by opening http://localhost:3000 in browser.

Login/Register:
When the user starts the app, the first page they will see is the login/register page prompting them to press one of the two buttons.

If the user has already registered for an account and is returning to the app, they can select the login button, which will take them to a page where they will prompted for their email and password. To view an account with playlists use login:  MaryHouston@email.com password:  78910

If they are a first time user, they should register for an account, which will direct them to a page prompting them for a name, email, and password.

After login, you're ready to create a playlist with YouTube videos!  You'll select create a playlist, where you'll find the option to Create a New Song.  Choose a song from YouTube and create your new song to add to your playlist!







This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
