# Reservations Idemia App

This is a Reservation Idemia application built with ReactJS, TypeScript and RxJs. It allows search Reservation by Date of departure and last name. It will coneect to a live API made in AWS API Gateway with AWS Lambda.

## Installation

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/jbpadilha/reservationAWSRXJS.git`
2. Navigate to the project directory: `cd reservationAWSRXJS`
3. Install the dependencies: `npm install`

## Usage

To start the application, run the following command:

```
npm run start
```

This will start the development server, and you can access the app in your browser at `http://localhost:3000`.


## Folder Structure

The project follows a specific folder structure to organize the code:

- `src`: The root folder of the application.
  - `components`: Contains reusable components used throughout the app.
  - `__test__`: Contains tests components
  - `config`: Contains configurations.
  - `helpers`: Contains utility functions and helper modules.
  - `interfaces`: Contains interfaces.
  - `models`: Contains TypeScript interfaces and types used in the app.
  - `server`: Contains server-related files.
  - `store`: Contains Redux related files.

## Design Pattern

The app uses the Adapter design pattern to connect to the API. The `Adapter` module utilizes Axios, a popular HTTP client, to make requests to the API and handle the response. This pattern provides a layer of abstraction and allows for easier integration with different APIs.

## Unit Testing

Unit tests are implemented using React Testing Library and Jest. The tests ensure that the components and functionality of the Reservation Idemia app work as expected. To run the tests, use the following command:

```
npm run test
```

## Contributing

Contributions to the Reservation Idemia app are welcome! If you have any suggestions, improvements, or bug fixes, please open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code for personal or commercial purposes.

## Contact

If you have any questions or need further assistance, please feel free to contact the project maintainer at [jbpadilha@gmail.com](mailto:jbpadilha@gmail.com).

Thank you for using the Reservation Idemia app!