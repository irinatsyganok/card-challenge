
`To build the app, run: `  npm run build  `the webpack will then build all scripts assets and bundle them up into a minified bundle`


`To start the app in dev mode, run: `  npm run start `this will spin up webpack dev server in watch mode. The dev server watches out for changes and hot reloads the app when necessary to reflect them, which removes the need to stop, build and restart the app every time. The app runs at http://localhost:8080/`

`To test the app, run: ` npm run test 

# Technology Decisions

`I built the server using Node.js and chose Express as a framework. The front end is implemented using React. I considered using Redux for state management, but in the end went with React setState({}) option and vanilla JavaScript, as for this task it is a more compact solution.
For testing, I used Jest and Enzyme. 
I have implemented Jest test runner with report coverage, which runs every time. 
I chose Jest as a test runner, because it is pre-configured to be used with React. Jest can also snapshot test components, which produces a serializable value of the React tree. Component snapshots are committed as a part of the codebase, to be used as a benchmark on subsequent test runs. 
I chose Enzyme as a testing utility for React, because it makes it easier to manipulate and traverse React components.`

# Design Decisions:
`I tried to keep the design as modular as possible so that components can be reused. I initially created Button and Title components, but then chose to use standard html elements for a more compact solution.`

# What would I do if I had more time:
`I would increase test coverage. I would manage state using Redux store, which would also allow me to separate presentation and functionality. I would also implement server side rendering to improve performance. `




