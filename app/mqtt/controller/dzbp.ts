module.exports = (app) => {
    return class ServerController extends app.Controller {
      async index(){
        console.log(this.ctx.req);
        await this.app.emqtt.publish(this.ctx.req.message.name, '收到消息内容为:'+this.ctx.req.message.msg, { qos: 0 });
      }
    };
  };