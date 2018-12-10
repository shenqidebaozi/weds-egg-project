// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportSchool from '../../../app/service/school';

declare module 'egg' {
  interface IService {
    school: ExportSchool;
  }
}
