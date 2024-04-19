import { environment as defaultEnvironment } from './environment.defaults';

export const environment = {
  ...defaultEnvironment,
  appVersion: require('../../package.json').version + '-local',
  appReleaseDate: require('../../package.json').versionReleaseDate,

  // Data Encription
  dataEncription: false,
  requestDataEncription: true,

  //configuration
  apiKey: 'your_api_key',

  //api response timeout
  apiResponseTimeout: 60000,

  //auto refresh time interval in milliseconds
  infoRefreshInterval: 30000,

  //predefined image size in KB i.e. 1 MB
  maxImageSize: 1024,

  // BASE URLs
  appBaseURL: 'http://localhost:4200/',
  apiBaseUrl: 'https://localhost:9999',
  assetBaseURL: 'http://localhost:4200',
  liveLocationUrl: 'https://sourabh.github.io/frontend/public/url'  // (without authentication)
};
