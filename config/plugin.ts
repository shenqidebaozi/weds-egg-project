import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
    emqtt:{
      enable:true,
      package:'egg-emqtt',
    },
    sequelize:{
      enable:true,
      package:'egg-sequelize'
    },
};

export default plugin;
