import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1544447507324_4374';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };
  config.emqtt={
    client:{
      host:'mqtt://47.104.191.69',
      username:'server',
      password:'admin',
      clientId:'weds-egg',
      options: {
        keepalive: 60,
        protocolId: 'MQTT',
        protocolVersion: 4,
        clean: true,
        reconnectPeriod: 1000,
        connectTimeout: 30 * 1000,
        rejectUnauthorized: false,
      },
      msgMiddleware: [ 'msg2json' ],
    }
  };
  config.sequelize = {
    dialect: 'postgres', // support: mysql, mariadb, postgres, mssql
    database: 'postgres',
    host: '94.191.78.55',
    port: 5432,
    username: 'postgres',
    password: '123456',
  };
  config.middleware = ['getRouterTime'];//中间件
  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
