// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportGetRouterTime from '../../../app/middleware/getRouterTime';

declare module 'egg' {
  interface IMiddleware {
    getRouterTime: typeof ExportGetRouterTime;
  }
}
