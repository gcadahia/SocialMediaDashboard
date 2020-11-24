# Social Media Dashboard App

Simple Social Media Dashboard made with React. The challenge was to build it from a static desktop mockup and get it looking as close to the design as possible, keeping in mind simplicity and ease-of-use.

The users should be able to:

- View the optimal layout for the site depending on their device's screen size

- See hover states for all interactive elements on the page

- Toggle color theme to their preference

- View more information about a specific social media account through a modal, using the library https://recharts.org/en-US/examples/SimpleLineChart

## About the process & tools

The main goal was to provide a simple UI solution, focusing on design and functionality.

### CSS and Styles

The app features Tailwind CSS that provides utility classes and a way to keep a declarative building approach, consistency, customization and a tiny build. It also makes it easy to inplement a 'Dark Mode' color scheme trough its API.

Custom CSS classes were also used, to fine-tune details and match the mockup design.

The desigred style-guide was matched using the 'Inter' font and a 'Color Scheme' inplemented with CSS Custom props to grant ease-of-customization.

### Data and Fake API

The data displayed in the Social Dashboard comes from a JSON file that serves as a Fake API. Components fetch and map the values and display the data in each component.

This approach prevents using hard-coded values and makes it easy to switch to a real API in the future.
 

## React | Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
