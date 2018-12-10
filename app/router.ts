import { Application } from 'egg';
import { EggShell } from 'egg-shell-decorators';
export default (app: Application) => {
  //emqtt路由 
  app.emqtt.route('test',app.mqtt.controller.dzbp.index);
  //egg-shell-decorators插件托管路由，以及生成接口swagger文档
  EggShell(app, {
    prefix: '/api',
    quickStart: true,
    swaggerOpt: {
      open: true,
      title: '示例',
      version: '1.0.0',
      host: '127.0.0.1',
      port: 7001,
      schemes: ['http'],
      paths: {
        outPath: './app/public/json/main.json',
        definitionPath: './definitions',
        swaggerPath: './swagger',
      },
    },
  });
};
