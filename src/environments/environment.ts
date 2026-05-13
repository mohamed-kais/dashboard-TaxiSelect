export const environment = {
  production: false,

  apiUrls: {

    // ======================================================
    // SMS TAXI
    // ======================================================

    smsTaxi: '/api/taxi-client/api',

    smsClient: '/api/taxi-client/api',

    smsOut: '/api/api',

    smsTaxidelete: '/api',

    smsAuth: '/api',

    // ======================================================
    // TAXI SELECT
    // ======================================================

    taxiSelect: '/api/taxi-client/api',

    // ======================================================
    // OTHER SERVICES
    // ======================================================

    fleet: '/api/fleet-api',

    discovery: '/api/discovery',

    apiGateway: '/api/api-gateway'
  },

  // ======================================================
  // WEBSOCKETS
  // ======================================================

  wsBaseUrl: 'ws://41.225.11.231:8981/ws',

  adminWsBaseUrl: 'ws://41.225.11.231:8981/admin-ws'
};
