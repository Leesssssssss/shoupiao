'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1521438991860_9768';

  // add your config here
  config.middleware = [];

  config.security = {
    csrf: {
    enable: false,
    },
    // domainWhiteList: ['http://ss.hhp.im:8080']
    domainWhiteList: ['localhost:8080']    
  };

  exports.mysql = {
    // database configuration
    client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: 'lis961221',
      // database
      database: 'mysql',    
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

  exports.static = {
    prefix: '/'
  }

  return config;
};
