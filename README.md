### About

One day, this will be a site with a huge filterable table full of common programming constructs written in different languages. Data will be stored here on GitHub and users will be able to add more constructs and languages via pull-requests... One day...

### Install dependencies

#### Quick-start

With Node.js installed, run the following one liner from the root of your Polymer Starter Kit download:

```sh
npm install -g gulp bower && npm install && bower install
```

### Development workflow

#### Compile TypeScript

Use `tsc` command or Atom built-in typescript support to build JavaScript files from TypeScript.

#### Serve / watch

```sh
gulp serve
```

This outputs an IP address you can use to locally test and another that can be used on devices connected to your network.

#### Build & Vulcanize

```sh
tsc
gulp
```

Build and optimize the current project, ready for deployment. This includes vulcanization as well as image, script, stylesheet and HTML optimization and minification.
