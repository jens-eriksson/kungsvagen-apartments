// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:1337/' ,
  firebase: {
    apiKey: "AIzaSyDYVbvWqWIxIU_oyWkAahFk4ZVMQoWPY4g",
    authDomain: "kungsvagen-apartments.firebaseapp.com",
    databaseURL: "https://kungsvagen-apartments.firebaseio.com",
    projectId: "kungsvagen-apartments",
    storageBucket: "kungsvagen-apartments.appspot.com",
    messagingSenderId: "984906743888",
    appId: "1:984906743888:web:96470e58aff8d80fca5155",
    measurementId: "G-BL0EHYLNJ4"
  }
};


/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
