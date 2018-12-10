'use strict';

module.exports = (app) => {
  const { STRING, INTEGER } = app.Sequelize;

  // tslint:disable-next-line:variable-name
  const School = app.model.define('bz_school', {
    schoolId: { type: INTEGER, primaryKey: true, autoIncrement: true },
    schoolName: STRING,
    schoolPrincipal: STRING,
    schoolAdd: STRING,
    schoolEmail: STRING,
    schoolTell: STRING,
    schoolWebsite: STRING,
  });
  return School;
};
