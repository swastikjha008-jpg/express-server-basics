# Express Server Basics

A beginner backend practice repository built with Node.js and Express.

This repo currently contains two small learning exercises:

- `index.js`: a basic in-memory users API
- `server.js`: a JWT auth practice API

## What This Repo Covers

- Creating an Express server
- Parsing JSON requests
- Basic route handling
- In-memory data storage
- Simple middleware usage
- Password hashing with `bcrypt`
- JWT-based authentication

## Files

```text
express-server-basics/
|-- index.js
|-- server.js
|-- package.json
|-- README.md
```

## Current Status

Right now, `npm start` and `npm run dev` run `index.js`.

That means the default runnable project in this repo is the basic users API, not the auth API in `server.js`.

## Run The Basic Users API

```bash
npm install
npm start
```

Server URL:

```text
http://localhost:3000
```

### Basic Users API Endpoints

```http
GET /
GET /users
POST /users
DELETE /users/:id
```

Example request body for creating a user:

```json
{
  "name": "Swastik"
}
```

## Auth API Note

`server.js` contains a separate authentication practice server with:

- signup
- login
- password hashing
- JWT token generation
- protected route access

At the moment, this auth version is not wired as the default start script in `package.json`.

## Suggestions For This Repo

- Keep only one project per repo for clarity
- If this repo should be the auth project, update `package.json` to run `server.js`
- If this repo should stay as Express basics, move the auth API into a separate repo
- Add missing dependencies for `server.js` if you want that version to run directly

## Learning Note

This is a practice repo for backend fundamentals, so in-memory storage is used and data resets when the server restarts.

## Author

Swastik Jha
