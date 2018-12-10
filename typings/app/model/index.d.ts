// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportSchool from '../../../app/model/school';

declare module 'sequelize' {
  interface Sequelize {
    School: ReturnType<typeof ExportSchool>;
  }
}
