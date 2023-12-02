---
topic: 'Front-end Development'
createdAt: '2023-11-27'
title: 'Use SERVE Package to Serve Locally Your Front-end Applications'
excerpt: 'Vercel has a pretty useful package called serve, that can be very handy to test and preview your local applications build'
---


In this small post, I will talk about a little NPM Package I use to preview builds before deploying my apps.

Without much, let's quick dive into this...

Some times you are trying out a new application with some HTML and you realize that to run your app, you need to have a server. With this package you don't have to always to get into the process of setting a simple HTTP server to able to run your application.

Now if you are only going to work with HTML files and don’t really have to connect to a database then this is a quick and easy solution rather than setting up a web server using various tools.

`serve` is a NPM package that converts our current working directory into an virtual directory i.e. the directory is hosted under localhost.

Assuming Node is pre-installed on your local machine, you can open the terminal and install `serve` globally:

```bash
npm install --global serve
```

You can now navigate to the directory were your application files are located and hit `serve .` on your terminal. Thats it now your local directory is being hosted on localhost.

The default port is `3000` but you can specify the port using the below command:

```bash
serve .  -p [port_number]
```
Now, open your browser and type localhost:[port_number] to access your hosted application.

Don't forget too refer to the official documentation or type `serve -h` to show the available command options.

You can find the `serve` package on NPM [here](https://www.npmjs.com/package/serve).

Thanks for reading!


