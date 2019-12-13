# Control a WebView from React Native

## Note

This app has only been tested on Android with Windows as a dev environment because I do not currently own a MacBook. It is not intended to work with iOS.

This app uses React Native v0.60 due to instability during the gradle build step in v0.61.

## Run the app

1. Clone this repository.
2. Prepare your computer to develop with React Native on Android by following the official [guide](https://facebook.github.io/react-native/docs/getting-started). Stop just before the section titled "Running your React Native application".
3. Run `npm install && npm run android` in your terminal. This should install the app on the device.

## Develop

The project uses WebPack to bundle the web app. I've committed a prebuilt bundle to make it easier to get started. To make changes to the web app, run `npm run web`, make changes, and re-build the app. If this were a full-scale project, I would add a dev mode so that the WebView would load a URL on the local network and not require a re-build to see changes.

The first time you open the app in Android Studio, import it as a new Gradle project. From there you will be able to use intellisense.

## Screenshot (Android)

![](https://i.ibb.co/TbknP7W/Screenshot-20191213-142657-webviewtest.jpg)
