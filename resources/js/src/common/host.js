let app_url = '';
let app_api_url = '';
let core_api_url = '';
let base_path = '';
let core_url = '';
let oauth_api_url = '';
switch (process.env.NODE_ENV) {
    case 'development':
        app_url = 'http://localhost/ad_manager/public/';
        core_url = 'http://localhost/ad_manager/public/';
        base_path = 'ad_manager/public/';
        break;

    default:
        app_url = '';
        core_url = '';
        break;
}
app_api_url = app_url + 'api/v1';
core_api_url = core_url + 'api/v1';
oauth_api_url = app_url + 'oauth';
export const HOST = {
    API_URL: app_api_url,
    CORE_API_URL: core_api_url,
    APP_URL: app_url,
    BASE_PATH: base_path,
    OAUTH_API_URL: oauth_api_url,
    CORE_URL: core_url,

}
