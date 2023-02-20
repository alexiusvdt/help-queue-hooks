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
* `npm install firebase@9`

# configuring firebase
* install as above
* add an .env and add to gitignore & commit before continuing!
* add an .env and add to gitignore & commit before continuing!
* find the code snippet from project homepage > cog > project settings > desired app > look for `firebaseConfig` var


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
