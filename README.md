# Octopus Learning Platform Code Challenge

This project is a code challenge for building a learning platform called Octopus Learning Platform. The platform is designed to help users learn various topics through interactive courses. The project includes a frontend built with React and TypeScript, and a backend built with Node.js, Express, and TypeScript.

## Project Structure

```
octopus-invest/
|   package-lock.json
|   package.json
|   project_tree.txt
|   README.md
|   
+---backend
|   |   package-lock.json
|   |   package.json
|   |   tsconfig.json
|   |   
|   +---public
|   |   \---images
|   |           book.jpg
|   |           
|   \---src
|       |   index.ts
|       |   
|       \---routes
|               courses.ts
|               index.ts
|               userProgress.ts
|               
\---frontend
    |   package-lock.json
    |   package.json
    |   README.md
    |   tsconfig.json
    |   
    +---public
    |       index.html
    |       manifest.json
    |       robots.txt
    |       
    \---src
        |   App.css
        |   App.test.tsx
        |   App.tsx
        |   index.css
        |   index.tsx
        |   setupTests.ts
        |   types.ts
        |   
        +---components
        |       CourseCard.tsx
        |       
        +---context
        |       CoursesContext.tsx
        |       UserContext.tsx
        |       
        \---pages
                CoursesPage.tsx
```

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (>=14.x)
- [npm](https://www.npmjs.com/) (>=6.x)

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/nadiaki/octopus-invest.git
    cd octopus-invest
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

### Configuration 

1. Create an .env file in the backend directory and add the MongoDB connection details:

    ```bash
    DB_HOST=localhost
    DB_PORT=9000
    DB_USERNAME=octopus
    DB_PASSWORD=octopus-password
    DB_NAME=octopus
    ```

2. Start up the database

    ```bash
    docker-compose up
    ```

3. Compiling Typescript

Before running any commands, ensure that your TypeScript files are compiled into JavaScript. This can be done with:

    ```bash
    cd backend
    npx tsc
    cd ../
    ```

4. Running Migrations

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
     npx typeorm migration:create ./backend/src/database/migration/SeedUsers  
    ```