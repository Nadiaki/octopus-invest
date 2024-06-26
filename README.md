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

### Starting the Development Servers

1. **Start the Servers**

    ```bash
    npm run start
    ```

    This will start:
    - The backend server at `http://localhost:3001`
    - The frontend server at `http://localhost:3000`

## Frontend

The frontend is built using Create React App with the TypeScript template. All frontend-related code is located in the `frontend` directory.

**Scripts:**

- `npm start --prefix frontend`: Starts the frontend development server.
- `npm run build --prefix frontend`: Builds the frontend application for production.
- `npm test --prefix frontend`: Runs the frontend tests.
- `npm run eject --prefix frontend`: Ejects the Create React App configuration.

## Backend

The backend is built using Node.js, Express, and TypeScript. All backend-related code is located in the `backend` directory.

**Scripts:**

- `npm start --prefix backend`: Starts the backend development server using ts-node.
- `npm run build --prefix backend`: Compiles the TypeScript code to JavaScript.
- `npm test --prefix backend`: Runs the backend tests using Jest.

## Usage

The project should open a new browser tab but if it doesn't, navigate to [http://localhost:3000](http://localhost:3000) to see the frontend.
