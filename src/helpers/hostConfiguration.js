function readHostConfiguration() {
    // const environment = process.env.NODE_ENV;
    // if (document.getElementById('config')) {
    //   return JSON.parse(document.getElementById('config').innerHTML)[environment].host;
    // }
    return 'https://jsonplaceholder.typicode.com/';
  }
  export const API_ROOT = readHostConfiguration();