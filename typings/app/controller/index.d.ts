// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportV1 from '../../../app/controller/v1';

declare module 'egg' {
  interface IController {
    v1: ExportV1;
  }
}
