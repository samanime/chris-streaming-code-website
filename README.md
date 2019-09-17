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