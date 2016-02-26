# aurelia-skeleton-navigation-webpack

[![ZenHub](https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png)](https://zenhub.io)
[![Join the chat at https://gitter.im/aurelia/discuss](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/aurelia/discuss?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This skeleton is part of the [Aurelia](http://www.aurelia.io/) platform. It sets up a standard navigation-style app using gulp to build your ES6 code with the Babel compiler. Karma/Protractor/Jasmine testing is also configured.

> To keep up to date on [Aurelia](http://www.aurelia.io/), please visit and subscribe to [the official blog](http://blog.durandal.io/). If you have questions, we invite you to [join us on Gitter](https://gitter.im/aurelia/discuss). If you would like to have deeper insight into our development process, please install the [ZenHub](https://zenhub.io) Chrome Extension and visit any of our repository's boards. You can get an overview of all Aurelia work by visiting [the framework board](https://github.com/aurelia/framework#boards).

## Getting started
Clone this repository, navigate to the directory where your clone is located and then hit

```
npm install
```

followed by 

```
npm run dev
```

You can now browse the skeleton app at http://localhost:3000. Changes in the code 
will automatically reload the app.

To make a development bundle (output to /build):

```
npm run build
```

To make a production bundle (output to /dist):

```
npm run prod
```

To run the unit tests:

```
npm run test
```

TODO: e2e tests are not working yet