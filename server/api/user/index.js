'use strict';
let user = require("./user.controller");
const koa = require('koa');
const app = new koa();
const router = require('koa-router')();

router.get('/', book.find);
// router.post('/', book.create);

app.use(router.routes())
  .use(router.allowedMethods());
module.exports = app
