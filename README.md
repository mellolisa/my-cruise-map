# Neighborhood Map Project

This is a Udacity project that demonstrates creating a React application, integrating it with Google Maps and also another 3rd party service (World Weather Online).

In my project, I am showing the cruise ports from an upcoming cruise along with the hours for when the ship will be arriving and departing from port, and it pulls sunrise and sunset iformation from World Weather Online.

The rubric for this project is located here: https://review.udacity.com/#!/rubrics/1351/view

## How to run the application

To get started using the application right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

The main page of the application is at the root (http://localhost:3000/), and it is a single page application, so there are no other routes.

The page defaults with the sidebar closed and all location markers on the map. You can click each marker for more information. Some of them are close together, so feel free to zoom in!

When you open the sidebar, you can see the cruise ports in a list view along with some buttons to filter the list in various ways. You can select the items from the list to also open the information box on the map.

The filter options are to show continental US only, Easter Carribean only, ABC Islands only or display all locations.

I hope you enjoy executing my project - it was challenging and fun to create!

## Acknowledgments

Sidebar Functionality
https://www.cssscript.com/off-canvas-side-nav-with-adaptive-main-content/

Load Map
https://hackernoon.com/implement-google-maps-in-reactjs-5bc218074689

Google-map-react Library
https://github.com/google-map-react

Hints for infobox trianlge
http://michaelsoriano.com/customize-google-map-info-windows-infobox/

Special thank you to Coach Jason Michael White who got me out of a couple of tight spots!

## Create React App Docs

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
