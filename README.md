# XY Inc GPS System
[![Build Status](https://travis-ci.org/sabino/xy-inc.svg?branch=master)](https://travis-ci.org/sabino/xy-inc)

A RESTful API for managing Points-of-Interest for XY Inc.

See the API's [documentation](DOCS.md).

## Commands

```bash
npm test # test using Jest
npm run test:unit # run unit tests
npm run test:integration # run integration tests
npm run coverage # test and open the coverage report in the browser
npm run lint # lint using ESLint
npm run dev # run the API in development mode
npm run prod # run the API in production mode
npm run docs # generate API docs
```

## Playing locally

First, you will need to install and run [MongoDB](https://www.mongodb.com/) in another terminal instance.

```bash
$ mongod
```

Then, run the server in development mode.

```bash
$ npm run dev
Express server listening on http://0.0.0.0:9000, in development mode
```

Now you can use the `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9` token (it's usually greater than this) to call user protected APIs. For example, you can create a new `article` API using `yo rest:api` and make the `POST /articles` endpoint only accessible to authenticated users. Then, to create a new article you must pass the `access_token` parameter.
```bash
curl -X POST http://0.0.0.0:9000/articles -i -d "title=Awesome Article&content=Yeah Baby&access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
```

It will return something like:
```bash
HTTP/1.1 201 Created
...
{
  "id": "47d21fbfbgfa1a6c2347a5d9",
  "name": "Lanchonete",
  "x": 10,
  "y": 20,
  "createdAt": "2016-09-13T15:22:39.846Z",
  "updatedAt":"2016-09-13T15:22:39.846Z"
}
```