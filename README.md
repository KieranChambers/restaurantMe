# 🍔 Restaurant Me

The idea for this project is to create a web application that allows users to retrieve a list of restaurants based on their location. Eventually we'll be able to filter the results based on the user's preferences through the UX. I would like to bake a randomizer into the application so that the user can get a random restaurant from the list when they're struggling to decide where to eat.

## Installation

1. Clone the repository.
2. Create an application on [Google Cloud Platform](https://console.cloud.google.com/).
3. Enable the [Places API](https://developers.google.com/places/web-service/intro) for your application.
4. Create a `.env` file in the root directory of the project and add your API key.

5. Run `'yarn'` to install dependencies or `'npm install'` if you don't have yarn installed.
6. Build the project by running `'yarn build'` or `'npm run build'`.
7. Install serve by running `'yarn global add serve'` or `'npm install -g serve'`.
8. Run `'serve -s build'` to start the server.
9. Open your browser and go to `'http://localhost:3000'`.

## Info

Currently you cannot change the search parameters through the UX. You can change the them in the `src/components/RestaurantHandler.js` file.

You can change `radius`, `type`, and `rating` as required.

\*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
