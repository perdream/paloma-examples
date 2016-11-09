'use strict';

const Paloma = require('paloma');
const app = new Paloma();
const usage = require('../usage');

app.controller('indexCtrl', function* (ctx, next, indexService) {
  let name = yield indexService.getName();
  ctx.body = `Hello, ${name}`;
});

app.service('indexService', function () {
  this.getName = function* () {
    return 'paloma';
  };
});

app.route({
  method: 'GET',
  path: '/',
  controller: 'indexCtrl'
});

app.listen(3000, () => {
  usage('curl http://localhost:3000', 'Hello, paloma');
});