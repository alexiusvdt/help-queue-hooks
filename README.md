### Refactoring class components to hooks:
* turn the class component TicketControl into a function component
* turn all state in TicketControl into state variables created & managed by useState

*NOTE: where state lives is _not_ changing. Since we have multiple child components that need access to state, ticketControl will still hold state data. if this were a larger app we could include custom hooks, but this is so small it can stay where it is

# refactoring 
* update the class component declaration to function component
* comment out the constructor (for now, it will need a refactor & eventual removal)
* turn class methods into funcs by adding const declarations
* remove the render() method

# npm directives
* `npm install firebase@9` (firebase)
* `npm install date-fns@2` (date fns)
* `npm install -g firebase-tools` (firebase CLI)
* `npm install styled-components` (component styling)

# configuring firebase
* install as above
* add an .env and add to gitignore & commit before continuing!
* add an .env and add to gitignore & commit before continuing!
* find the code snippet from project homepage > cog > project settings > desired app > look for `firebaseConfig` var
* to the .env, create env constants for export:
  ```
  REACT_APP_FIREBASE_API_KEY = "YOUR-UNIQUE-CREDENTIALS"
  REACT_APP_FIREBASE_AUTH_DOMAIN = "YOUR-PROJECT-NAME.firebaseapp.com"
  REACT_APP_FIREBASE_PROJECT_ID = "YOUR-PROJECT-FIREBASE-PROJECT-ID"
  REACT_APP_FIREBASE_STORAGE_BUCKET = "YOUR-PROJECT-NAME.appspot.com"
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID = "YOUR-PROJECT-SENDER-ID"
  REACT_APP_FIREBASE_APP_ID = "YOUR-PROJECT-APP-ID"
  ```
* create `src/firebase.js` with the following code:
  ```
  import { initializeApp } from "firebase/app";
  import { getFirestore } from 'firebase/firestore';

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID 
  }

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    export default db;
  ```

## implement client-side routing
* `npm install react-router-dom@6`
* sketch the signin component
* modify the App.js component:
  * import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  * wrap everything in <Router> and add as many <Routes> beneath as needed


## firebase CLI
* `firebase login`
* `firebase projects:list`
* `firebase init hosting`
* work through the prompts:
  * when `what do you want to use as your public directory?` enter `build`
  * when `Configure as a single-page app (rewrite all urls to /index.html)?` enter `N`
  * `Set up automatic builds and deploys with GitHub? (y/N)` enter `N` for now
  * if `File public/index.html already exists. Overwrite? (y/N)` enter `N`
* now we have a `firebase.json`, note that "public" needs to have a value of "build"
* `npm run build` to verify no errors
* `firebase serve` to view localhost
* `firebase deploy --only hosting` to deploy
* firebase deploys to:
  * PROJECT_ID.web.app
  * PROJECT_ID.firebaseapp.com
  Where, PROJECT_ID is the name of your project. In the example code above, the name of the project is help-queue-dc855, so we'd be able to find our project at these locations:

    https://help-queue-dc855.web.app/
    https://help-queue-dc855.firebaseapp.com/

## redeploying

  *  Make the changes in your code.
  *  Run npm run build to create a build that's optimized for production.
  *  Optionally, run firebase serve to make sure your project works and looks as expected.
  *  Run firebase deploy --only hosting to deploy your project again.


## Styling
* [documentation](https://styled-components.com/docs)
* import `styled` from `styled-components`
* create a var that holds your styling:
  const HelpQueueHeader = styled.h1
    font-size: 20px
    etc
  ;
* call the component inside tags w/ the same name:
  ```<HelpQueueHeader>
    HelpQueue
  </HelpQueueHeader>```

* full example:
```
const StyledWrapper = styled.section`
  background-color: orange;
`;

function Header(){
  return (
    <StyledWrapper>
      ...
    </StyledWrapper>
  );
}```


## Important Note to Epicodus Students

This project contains all the code from the LearnHowToProgram.com [Section 2: React Fundamentals](https://www.learnhowtoprogram.com/react/react-fundamentals) coursework in which we created a Help Queue application in [React.js](https://reactjs.org/). 

It is meant to be used as a starter repo to continue the Help Queue project in three separate learning sections of [the _React_ course](https://www.learnhowtoprogram.com/react) on LearnHowToProgram.com: 

* Section 3 "React with Redux", starting in the lesson titled ["Setting up Our First Redux Project"](https://www.learnhowtoprogram.com/react/react-with-redux/setting-up-our-first-project).
* Section 4 "React with NoSQL", starting in the lessons titled ["Refactoring Help Queue to Use Hooks"](https://www.learnhowtoprogram.com/react/react-with-nosql/refactoring-help-queue-to-use-hooks).
* Section 5 "React with APIs", starting in the lesson title ["React Context"](https://www.learnhowtoprogram.com/react/react-with-apis/react-context)

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
