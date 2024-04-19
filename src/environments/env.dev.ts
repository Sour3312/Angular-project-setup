import { environment as  defaultEnvironment} from "./env.default";

export const environment = {
  ...defaultEnvironment,
  appVersion: require('../../package.json').version + '-dev',
  appReleaseDate: require('../../package.json').versionReleaseDate,
  
  production: true,
  log: false,
  flags: {
    useNewHeader: false
  },

  //configuration
  apiKey: 'your_api_key',

  //api response timeout
  apiResponseTimeout: 6000,

  //auto refresh time interval in milliseconds
  infoRefreshInterval: 3000,

  //max image size in KB i.e. 1 MB
  maxImageSize: 1024,
  
  appBaseURL: 'https://sourabh.github.io/frontend/url',
  apiBaseUrl: 'https://sourabh.github.io/backend/url/',
  assetBaseURL: 'https://sourabh.github.io/frontend/url',
  liveLocationUrl: 'https://sourabh.github.io/frontend/public/url' //   (without authentication)
};
