import { Controller } from 'egg';
import {
  Description, Get, IgnoreJwtAll, TagsAll
} from 'egg-shell-decorators';
@TagsAll('用户')
@IgnoreJwtAll
export default class SubOrderController extends Controller {
  //http://host:7001/api/v1/send
  @Get('/send')
  @Description('向指定设备发送消息')
  public async index({ query: { name, msg } }) {
    console.log(this.ctx.query);
    await this.app.emqtt.publish(name, msg, { qos: 0 });
    const school = await this.ctx.service.school.all();
    await this.app.emqtt.publish(name, JSON.stringify(school), { qos: 0 });
    return JSON.stringify(school);
  }
}
