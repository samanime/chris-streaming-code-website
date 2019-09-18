# Chris Streaming Code - Main Website

The main website for Chris Streaming Code

## Prerequisites

### Node

You must have a modern version of Node.js installed.

### Required Environment Variables

To run, you must have at least the `MONGO_CONNECT_STRING` provided as there is no working default for it.

Depending on the value of `MONGO_CONNECT_STRING`, you may have to provide `MONGO_USERNAME` and `MONGO_PASSWORD` as
well.

See [Environment Variables](#environment-variables) below.

## Running

Make sure you have the prerequisites above met.
    
### Quick Start

    npm install
    npm run build
    npm start
    
### Running for Development

If you want to run all necessary commands in one terminal, with watch, you can run:

    npm run dev
    
If you'd like to run the commands separately, run each of the following in different terminals:

    npm run server:run:watch
    npm run server:build:watch
    npm run client:build:watch
    npm run public:build:watch

### NPM Scripts

    - `start` - Runs the server. Must be built already.
    - `build` - Builds the project.
    - `dev` - Runs the server and builds the project in watch mode.
    - `client:build` - Builds the client
    - `client:build:watch` - Builds the client in watch mode.
    - `server:run` - Runs the server. Must be built already.
    - `server:run:watch` - Runs the server. Restarts if there are any changes.
    - `server:build` - Builds the server.
    - `server:build:watch` - Builds the server in watch mode.
    - `public:build` - Copies the public directory for the build.
    - `public:build:watch` - Copies the public directory for the build and watches for more changes.

## Configuration

### Environment Variables

  - `MONGO_CONNECT_STRING` - The Mongo connection URL with placeholders <username> and <password>, or the real username
    and password. Examples: 
        - mongodb+srv://<username>:<password>@my.mongodb-host.com
        - mongodb+srv://myUser:myPassword@my.mongodb-host.com
  - `MONGO_USERNAME` - The username to substitute for `<username>` in `MONGO_CONNECT_STRING`. 
    Not needed if there isn't anything to substitute.
  - `MONGO_PASSWORD` - The password to substitute for `<password>` in `MONGO_CONNECT_STRING`.
    Not needed if there isn't anything to substitute.
  - `MONGO_DATABASE` - Default: chris-streaming-code. The database name.
  - `PORT` - Default: 8000. The port for the server to listen on.
    
All environment variables can optionally be prefixed with `CSC_`. If they exist with the prefix, they take precedence 
over the non-prefixed version.