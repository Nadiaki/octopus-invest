# Octopus Learning Platform Code Challenge

This project is a code challenge for building a learning platform called Octopus Learning Platform. The platform is designed to help users learn various topics through interactive courses. The project includes a frontend built with React and TypeScript, and a backend built with Node.js, Express, and TypeScript.

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (>=14.x)
- [npm](https://www.npmjs.com/) (>=6.x)

### Installation

1. Clone the repository

    ```bash
    git clone https://github.com/nadiaki/octopus-invest.git
    cd octopus-invest
    ```

2. Start up the database

    ```bash
    docker-compose up
    ```

3. Run the helper script
This helper script will install dependencies, compile typescript and run migrations. You can use it and skip the next steps to starting the development servers, or ignore it and continue with step 4 in this section

    ```bash
    npm run initialize
    ```

4. Install Dependencies

    ```bash
    npm install
    ```

5. Compile Typescript

Before running any migration commands, ensure that your TypeScript files are compiled into JavaScript. This can be done with:

    ```bash
    cd backend
    npx tsc
    cd ../
    ```

6. Run Migrations

    ```bash
    npx typeorm migration:run -d ./backend/typeorm.config.js
    ```

### Starting the Development Servers

1. **Start the Servers**

    ```bash
    npm run start
    ```

    This will start:
    - The backend server at `http://localhost:3001`
    - The frontend server at `http://localhost:3000`


## Usage

The project should open a new browser tab but if it doesn't, navigate to [http://localhost:3000](http://localhost:3000) to see the frontend.

To create a new migration use: 

    ```bash
     npx typeorm migration:create ./backend/src/database/migration/[Your Migration Name Here]  
    ```