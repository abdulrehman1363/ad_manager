import {
    HOST
} from './host.js'

export const URL_CONFIG = {
    API_URL: HOST.API_URL,
    APP_URL: HOST.APP_URL,
    CORE_API_URL: HOST.CORE_API_URL,
    OAUTH_API_URL: HOST.OAUTH_API_URL,
    BASE_PATH: HOST.BASE_PATH,
    CORE_URL: HOST.CORE_URL
};

export const APP_NAME = 'CoinX';
export const LOGO_IMG_PATH = HOST.APP_URL +'images/logo.png';
export const SITE_IMG_PATH = HOST.APP_URL +'images/';

export const APP_ENDPOINTS = {
    SanctumCSRFCookie: "sanctum/csrf-cookie",
    LoginUser: "login",
    LogoutUser: "logout",
};

export const API_ENDPOINTS = {
    GetUser: "/user"
};
