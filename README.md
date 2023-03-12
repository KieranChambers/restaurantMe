# 🍔 Restaurant Me

The idea for this project is to create a web application that allows users to retrieve a list of restaurants based on their location. Eventually we'll be able to filter the results based on the user's preferences through the UX. I would like to bake a randomizer into the application so that the user can get a random restaurant from the list when they're struggling to decide where to eat.

## Installation / Testing

1. Clone the repository.
2. Create an application on [Google Cloud Platform](https://console.cloud.google.com/).
3. Enable the [Places API](https://developers.google.com/places/web-service/intro) for your application.
4. Visit the cors-anywhere [demo](https://cors-anywhere.herokuapp.com/corsdemo) and click the `Request temprary access to the demo server` button to unlock access to the demo. Note this will only last for 24 hours / 50 requests per hour. You'll get a 429 (Too Many Requests) error if you hit the 50 per hour limit.
5. Create a `.env` file in the root directory of the project and add your API key.

6. Run `'yarn'` to install dependencies or `'npm install'` if you don't have yarn installed.
7. Run `'yarn start'` to start the development server or `'npm start'` if you don't have yarn installed.
8. Open your browser and go to `'http://localhost:3000'`.
9. Edit the code and have fun!

## Deployment

1. Build the project by running `'yarn build'` or `'npm run build'`.
2. Install serve by running `'yarn global add serve'` or `'npm install -g serve'`.
3. Run `'serve -s build'` to start the server.
4. Open your browser and go to `'http://localhost:3000'`.

## Info

Currently you cannot change the search parameters through the UX. You can change the them in the `src/components/RestaurantHandler.js` file.

You can change `radius`, `type`, and `rating` as required.

This is in the works and will be added soon.

## Troubleshooting

1. If you get a 403 (Forbidden) error when trying to access the API, make sure you have enabled the Places API for your application.
2. If you get a 403 (Forbidden) error using the cors-anywhere proxy, make sure you've visited the [cors demo](https://cors-anywhere.herokuapp.com/corsdemo) and clicked the `Request temprary access to the demo server` button to unlock access to the demo. Note this will only last for 24 hours OR 50 requests. After 50 requests you'll get a 429 (Too Many Requests) error.

\*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
