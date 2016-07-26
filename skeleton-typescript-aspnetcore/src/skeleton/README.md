# Aurelia with ASP.NET Core using TypeScript

This skeleton works both with and without Visual Studio; however, the steps for getting up and running are different for these two scenarios. Please follow the correct set of instructions based on whether or not you are using Visual Studio.

First, there are a set of prerequisites you will need whether or not you are using Visual Studio. Make sure to install these prerequisites before proceeding.

- [NodeJS](http://nodejs.org/) >=4.0.0 This provides the platform on which the build tooling runs. This may be downloaded and installed from the NodeJS website.
- NPM >=3.0.0 This is installed with NodeJS, but if you install a 4.x version of NodeJS, you may have to update this.
- jspm, gulp, and typings. These three tools may be installed by running `npm install -g jspm gulp typings` from a command line after installing NodeJS and NPM
  > **Note:** Sometimes jspm queries GitHub to install packages, but GitHub has a rate limit on anonymous API requests. If you receive a rate limit error, you need to configure jspm with your GitHub credentials. You can do this by executing `jspm registry config github` and following the prompts. If you choose to authorize jspm by an access token instead of giving your password (see GitHub `Settings > Personal Access Tokens`), `public_repo` access for the token is required.

## Running the App in Visual Studio 2015

Additional Prerequisites:
- Visual Studio 2015 with Update 3
- [ASP.NET Core](https://www.microsoft.com/net/core#windows) must be downloaded and installed. The directions for doing this are [here](https://www.microsoft.com/net/core#windows).

1. Open the solution file `skeleton-typescript-aspnetcore.sln`. This file is located up two directories from the file. Visual Studio will automatically run `npm install`, `jspm install`, and `typings install` when you first open the solution. You may rerun these commands at any time by running `npm install` from the same directory this readme file is in.
2. Open `Task Runner Explorer`. 
3. The project is ready to be run when `Task Runner Explorer` shows that it is running the `gulp watch` command. 
4. Press `F5` or click the `Run` button in Visual Studio. Visual Studio will launch your browser for you and navigate to the correct URL.


## Running The App without Visual Studio

Additional Prerequisites:
- [ASP.NET Core](https://www.microsoft.com/net/core#windows) must be downloaded and installed. The directions for doing this are [here](https://www.microsoft.com/net/core#windows). You only need to download and install the `.NET Core SDK for Windows`.

To run the app, follow these steps.

1. Install the npm devdependencies, jspm dependencies, and the typings .d.ts files. From the project folder (`{root}/src/skeleton/`), execute the following command:
  ```shell
  npm install
  ```

  This command will install the npm dependencies, and then run `jspm install -y` and `typings install` for you. If you do not desire for this behavior, you may edit or remove the `postinstall` script in the `package.json` file. 
  >**Note:** Windows users, if you experience an error of "unknown command unzip" you can solve this problem by doing `npm install -g unzip` and then re-running `jspm install`.

6. Execute the following command:

  ```shell
  dotnet restore
  ```

7.  Build the project:

  ```shell
  gulp build
  dotnet build
  ```

8. To run the app, execute the following command:

  ```shell
  dotnet run
  ```

9. If you want the changes you are making to be reflected in the browser you can run `gulp watch` in a second terminal window and refresh the page in your browser.

10. Browse to [http://localhost:5000](http://localhost:5000) to see the app. You can make changes in the code found under `src` and the browser should auto-refresh itself as you save files. (Note: It's possible that a port other than 5000 will be used if there's already something running there. Double check the port number shown on the console after the "dotnet run" to be sure.)

## Bundling

Bundling is performed by [Aurelia Bundler](http://github.com/aurelia/bundler). A gulp task is already configured for that. Use the following command to bundle the app:

  ```shell
    gulp bundle
  ```

You can also unbundle using the command bellow:

  ```shell
  gulp unbundle
  ```

To start the bundled app, execute the following command:

  ```shell
    gulp serve-bundle
  ```
#### Configuration

The configuration is done by ```bundles.js``` file.

##### Optional
Under ```options``` of ```dist/aurelia``` add ```rev: true``` to add bundle file revision/version.

## Running The Unit Tests

To run the unit tests, first ensure that you have followed the steps above in order to install all dependencies and successfully build the library. Once you have done that, proceed with these additional steps:

1. Ensure that the [Karma](http://karma-runner.github.io/) CLI is installed. If you need to install it, use the following command:

  ```shell
  npm install -g karma-cli
  ```
2. Install Aurelia libs for test visibility:

```shell
jspm install aurelia-framework
jspm install aurelia-http-client
jspm install aurelia-router
```
3. You can now run the tests with this command:

  ```shell
  karma start
  ```

## Running The E2E Tests
Integration tests are performed with [Protractor](http://angular.github.io/protractor/#/).

1. Place your E2E-Tests into the folder ```test/e2e/src```
2. Install the necessary webdriver

  ```shell
  gulp webdriver-update
  ```

3. Configure the path to the webdriver by opening the file ```protractor.conf.js``` and adjusting the ```seleniumServerJar``` property. Typically its only needed to adjust the version number.

4. Make sure your app runs and is accessible

  ```shell
  gulp watch
  ```

5. In another console run the E2E-Tests

  ```shell
  gulp e2e
  ```

## Exporting bundled production version
A gulp task is already configured for that. Use the following command to export the app:

  ```shell
    gulp export
  ```
The app will be exported into ```export``` directory preserving the directory structure.
#### Configuration
The configuration is done by ```bundles.js``` file.
In addition, ```export.js``` file is available for including individual files.
