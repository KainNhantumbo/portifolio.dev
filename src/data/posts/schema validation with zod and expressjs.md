---
topic: 'Security'
createdAt: '2023-11-09'
title: 'Schema Validation with Zod and Express.js'
excerpt: "They say “Never trust user input” - I know that this may sound extreme, but it is an important security principle in programming. Today, we will learn together how to implement Zod in a Express.js application."
---

This article will explain the concept of schema validation, explore the features of Zod, and demonstrate Zod validation, and its usage to ensure robust data integrity in Express applications.

Proper schema validation can help to prevent errors, improve performance, and ensure data security.

## Understanding schema validation

**Schema validation** is the process of verifying that incoming data conforms to a set of predefined rules or specifications, known as a schema.This is used to ensure the quality of data, to prevent errors, and to improve the performance of applications. So, validation is particularly crucial when dealing with user inputs, API responses, or any external data source and typically encompass a range of criteria, like as shown below:

- Data types: Specifying the expected type of data, such as strings, numbers, booleans, arrays, objects, etc.
- Format constraints: Defining rules for the format of data, such as valid email addresses, phone numbers, dates, and more.
- Structure: Ensuring the correct structure of nested objects, arrays, and their respective properties.
- Validation conditions: Specifying conditions under which data is considered valid or invalid.

## The need for validation library

### What is Zod?

**Zod** is, according to its documentation, a TypeScript-first schema declaration and validation library, Created by Colin McDonnell. Unlike Yup, Zod is TypeScript-first which means it has a lot of features for TypeScript developers.

Zod comes with some really great features like:

- Works in Node.js and browsers (including IE 11)
- Zero dependencies
- Works with JavaScript too
- Static type inference: Zod can automatically infer the TypeScript type of a data structure based on its schema.

Zod provides a declarative way to define and validate data schemas using a clean and intuitive syntax. Zod is heavily influenced by TypeScript’s type system, which makes it particularly appealing to TypeScript developers.

### Why do we need Zod?

Some developers might reason, Why we need Zod when we are already using Typescript. Well, Typescript helps with static type checking, but it only does this at compile time. After the build process, the type safety of Typescript disappears and Zod solves this problem.

With Zod, you can create a schema and use it to verify form inputs and user input at runtime.

## Why do we need to validate API Calls?

API Calls validation helps you getting the right data that you want. For example, you want your users to have a strong password(e.g. at least 6 characters), you can use something like Zod or Yup and prevent users from entering a short password(less than 6 characters). Also, doing validation on the server makes your server much more secure, because no one can open the developer tools, go through your code and figure out how to beat your validation.

**_Let's dive in with a practical examples:_**

First, go and create an empty directory and navigate into it:

```bash
mkdir schema-validation-with-zod-and-expressjs
cd schema-validation-with-zod-and-expressjs
```

Then, initialize a Node.js project and add the necessary dependencies:

```bash
npm init -y
npm install express zod
```

Next, add the following script to our `package.json` file.

```json
{
  // ...
  "scripts": {
    "dev": "node app.js"
  }
  // ...
}
```

Now let's start an Express.js server.
Create a file called `app.js` at the root of the project:

```js
const express = require('express');

const app = express();

app.use(express.json());

app.listen(8080, () => console.log(`Ready on http://localhost:${8080}`));
```

Then run the Express.js server (you can access it at http://localhost:8080).

```bash
npm run dev
```

Next, we can start working with Zod.
Let's first import `z` from `zod` and add a simple login schema.

```js
const express = require('express');
const { z } = require('zod');

const app = express();

app.use(express.json());

const LoginSchema = z.object({
  // In this example we will only validate the request body.
  body: z.object({
    email: z.string().email(),
    password: z.string().min(6)
  })
});
```

Now we are going to create our middleware for Zod validation.

```js
// ...

const validate = (schema) => (req, res, next) => {
  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params
    });

    next();
  } catch (err) {
    return res.status(400).send(err.errors);
  }
};

// ...
```

Finally, we are going to create a route(`/login`) for POST requests, which we will use our `validate` middleware to perform the validation of the request body.

```js
// ...

// pass LoginSchema to validate middleware
app.post('/login', validate(LoginSchema), (req, res) => {
  return res.json({ ...req.body });
});

// ...
```

The final code would be as follows:

```js
const express = require('express');
const { z } = require('zod');

const app = express();

app.use(express.json());

const LoginSchema = z.object({
  // In this example we will only validate the request body.
  body: z.object({
    // email should be valid
    email: z.string().email(),
    // password should be at least 6 characters
    password: z.string().min(6)
  })
});

const validate = (schema) => (req, res, next) => {
  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params
    });

    next();
  } catch (err) {
    return res.status(400).send(err.errors);
  }
};

app.post('/login', validate(LoginSchema), (req, res) => {
  return res.json({ ...req.body });
});

app.listen(8080, () => console.log(`> Ready on http://localhost:${8080}`));
```

### Final thoughts

Schema validation is a critical part of any software development process, ensuring data integrity and consistency.

Zod provides a simple and powerful solution for schema validation in TypeScript projects. With its intuitive syntax, built-in validation rules, and support for custom validation, Zod makes it easy to define and validate data structures.

When using Zod for schema validation, developers can reduce errors, improve code quality, and build more robust applications

In this guide, We learned how to validate our Express.js REST API Calls using Zod.

I hope this article helped you understanding how schema validation works. See yaa!
