import { AppConfig } from './../../environments/environment';

interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '4w3jna5rABqiECWVDPULdutnPOuuTAcW',
  domain: 'lightningassets.eu.auth0.com',
  callbackURL: AppConfig.callbackurl,
};
