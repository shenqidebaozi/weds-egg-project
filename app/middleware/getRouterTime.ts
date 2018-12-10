module.exports = () => {
    return async function getRouterTime(ctx, next) {
    const start = Date.now();
    await next();
   
    console.log(ctx.request.href,Date.now()-start);
// tslint:disable-next-line:eofline
}}