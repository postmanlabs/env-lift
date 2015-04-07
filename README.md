<img src="https://travis-ci.org/postmanlabs/env-lift.svg?branch=master" alt="Master Build Status" />

# env-lift

*env-lift* provides a NodeJS module to easily read configurations from environment variables. The module makes it super
easy to abstract configuration loading from environment in an organised and namespaced manner.


## Installing env-lift

The easiest way to install env-lift is from the NPM registry. Switch to your project directory and run the following
command. Once installation completes, refer to the usage guidelines or the examples directory to use it in your project.

```terminal
npm install env-lift --save
```

## Usage

The best way to understand how to use this module is to refer to examples. A couple of them is located within the
/examples directory and here we would elaborate on a few use cases.

### A simple use case where config is stored in an external JSON file

In this use-case, let us assume that you are storing your config in a simple javascript variable. For your production
server, you are possibly modifying the variables and running your application. In reality, the use-case could be that
you are fetching the configuration from a separate JSON file. But for all practical purposes, the example here could be
morphed to meet those scenarios.

__Original Code:__

```javascript
var config = {
    port: 80,
    environment: 'development',
    db: {
        host: 'localhost',
        user: 'root',
        password: ''
    }
};
```

__Updated code using env-lift:__

```javascript
var config = require('env-lift').load('my-app', {
    port: 80,
    environment: 'development',
    db: {
        host: 'localhost',
        user: 'root',
        password: ''
    }
});
```

At this stage, if you can override the values of the configuration using environment variables.

```terminal
export MY_APP_PORT=8080;
export MY_APP_DB_HOST="example.com";
```

Executing the above terminal exports before running your app would return port as 8080 and also return db host as
_example.com_.

## Some gotchas

- The keys are expected to be all uppercase alphanumeric.
- The first letter of the environment variable cannot be a number.
- If your key has non-alphanumeric characters, they are replaced by underscore character

## Contributing

Contribution is accepted in form of Pull Requests that passes Travis CI tests. You should install this repository using
`npm install -d` and run `npm test` locally before sending Pull Request.