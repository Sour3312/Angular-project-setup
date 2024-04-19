import { environment as defaultEnvironment } from './environment.defaults';

export const environment = {
  ...defaultEnvironment,
  appVersion: require('../../package.json').version,
  appReleaseDate: require('../../package.json').versionReleaseDate,
  
  production: true,
  log: false,
  flags: {
    useNewHeader: false
  },

  //configuration
  apiKey: 'your_api_key',

  //api response timeout
  apiResponseTimeout: 60000,

  //auto refresh time interval in milliseconds
  infoRefreshInterval: 30000,

  //predefined image size in KB i.e. 1 MB
  maxImageSize: 1024,
  
  appBaseURL: 'https://sourabh.github.io/frontend/prod/url',
  apiBaseUrl: 'https://sourabh.github.io/srv/backend/prod/url/',
  assetBaseURL: 'https://sourabh.github.io/frontend/prod/url',
  liveLocationUrl: 'https://sourabh.github.io/frontend/prod/public/url'  // (without authentication)
};
