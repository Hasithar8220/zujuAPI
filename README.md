# Fixtures API

## Overview

This project provides APIs to support the frontend for the Fixtures module. The Fixtures module includes endpoints for retrieving fixture listings and a calendar view with match dates.

### Features

- Fixture Listing: Get a list of fixtures with tournament name, home & away teams, and match scores.
- Fixtures Calendar: View a calendar with clickable dates for matches.

## Hosted API (not available at the moment)

- The hosted API is available at [testapi.zuju.com]

## Local Development

To run the API server locally, follow the instructions below.

### Prerequisites

- Node.js (version X.X.X)
- MySQL database

### Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/Hasithar8220/zujuAPI.git
    ```

2. Change into the project directory:

    ```bash
    cd your-repository
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Set up the database:

    - Create a MySQL database and update the configuration in `config.json`.
    - Execute the database schema script found in `db/create_schema.sql`.
    - Populate data if needed by running `db/populate_data.sql`.

5. Create a `.env` file in the project root with the following content:

    ```plaintext
    PORT=3179
    NODE_ENV=dev
    HOST = localhost
    USER = root
    PASSWORD = ''
    DB = zuju
    ```

    Update the values as needed.

6. API level configurations. Add below properties in config.json file:

    ```bash
    "ISDEV": true,
    "pageSize": 10
    ```    

7. Run the API server:

    ```bash
    npm start
    ```

    The server will start at `http://localhost:3179`.

### Unit Tests

Unit tests:

```bash
    npm test
    ```

### Integration tests
To test the API locally, you can use tools like [Postman](https://www.postman.com/) or web browser to load GET requests.

#### Example Endpoints:

- Fixture Listing: `GET http://localhost:3178/fixtures`
- Fixtures Calendar: `GET http://localhost:3178/fixtures/calendar`

## API Documentation

API documentation is not available in this README. Refer to [Insert_Documentation_Link_Here] for detailed API documentation.

## Next Steps

If you have any questions or need further assistance, feel free to contact [Hasi] at [ariyaratha@gmail.com].

Happy coding!
