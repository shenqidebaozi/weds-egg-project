'use strict';

module.exports = (app) => {
    app.beforeStart(async () => {
        await app.model.sync({ forece: false });
        //sync true 每次启动都重新生成表，false改动生成
    });
};
