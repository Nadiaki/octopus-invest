
# Monorepo Fullstack Template

This monorepo template includes a frontend built using Create React App with the TypeScript template and a backend built with Node.js, Express, and TypeScript. This template provides a starting point for developing full-stack applications with separate frontend and backend codebases.

## Project Structure

monorepo-template/
├── .gitignore
├── frontend/
│ ├── node_modules/
│ ├── public/
│ ├── src/
│ ├── package.json
│ └── tsconfig.json
├── backend/
│ ├── node_modules/
│ ├── src/
│ ├── package.json
│ └── tsconfig.json
├── package.json
└── README.md

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (>=14.x)
- [npm](https://www.npmjs.com/) (>=6.x)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/nadiaki/octopus-invest.git
   cd octopus-invest

2. **Install Dependencies**
This needs to be done separately for front and back end folders as well as root 

    ```npm install


3. **Starting the Development Servers**

    ```npm start

This will start:

The frontend server at `http://localhost:3000`
The backend server at `http://localhost:3001`

4. **Frontend**
The frontend is built using Create React App with the TypeScript template. All frontend-related code is located in the frontend directory.

Scripts:

npm start --prefix frontend: Starts the frontend development server.
npm run build --prefix frontend: Builds the frontend application for production.
npm test --prefix frontend: Runs the frontend tests.
npm run eject --prefix frontend: Ejects the Create React App configuration.

5. **Backend**
The backend is built using Node.js, Express, and TypeScript. All backend-related code is located in the backend directory.

Scripts:

npm start --prefix backend: Starts the backend development server using ts-node.
npm run build --prefix backend: Compiles the TypeScript code to JavaScript.
npm test --prefix backend: Runs the backend tests using Jest.