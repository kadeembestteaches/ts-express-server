# TypeScript Express Startup Server

This project is a boilerplate for setting up a TypeScript Express server with ES module support. It includes configurations for TypeScript, `ts-node`, `nodemon`, and Jest for testing.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Configuration](#configuration)
- [Running Tests](#running-tests)

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

Ensure you have Node.js installed. You can download it from [Node.js](https://nodejs.org/).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ts-express-server.git
   cd ts-express-server

## Installation

2. Install dependencies:
```bash
   npm install
```

## Running the Development Server

To run the server in development mode with live reloading:
```bash
npm run dev
```
The server will start and listen on the port defined in your .env file or default to port 3000.

## Building the Project

To build the project for production:
```bash
npm run build
```

### Starting the Production Server

After building the project, you can start the production server with:
```bash
npm run start
```
## Project Structure

ts-express-server/
├── dist/                      # Compiled JavaScript files
├── helpers/
│   ├── add-js-extension.ts    # Script to add .js extension to import statements
│   ├── expressErrorLib.ts     # Custom error classes
│   └── utils.ts               # Utility functions
|   └── utils.test.ts          # Test for Utility functions
├── routers/
│   ├── userRouter.ts          # User router
│   └── userRouters.test.ts    # Tests for user router
├── config.ts                  # Configuration file
├── app.ts                     # Express app setup
├── server.ts                  # Entry point to start the server
├── .gitignore                 # Git ignore file
├── package.json               # NPM package configuration
├── tsconfig.json              # TypeScript configuration
└── jest.config.js             # Jest configuration



## Scripts

The following scripts are available in the `package.json`:

- `build`: Compiles the TypeScript files and runs the script to add `.js` extensions.
- `dev`: Runs the server in development mode with live reloading using `nodemon`.
- `start`: Starts the compiled server in production mode.
- `test`: Runs the test suite using Jest.
- `test:watch`: Runs the test suite in watch mode.


## Running Tests

To run the test suite:
```bash
npm run test
```

To run tests in watch mode:
```bash
npm run test:watch
```