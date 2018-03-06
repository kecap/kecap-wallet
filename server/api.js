const Bundle = require('bono');
const luwak = require('luwak');
const luwakNightmare = require('luwak-nightmare');
const jwt = require('jsonwebtoken');

const Ig = require('alexis');
const secret = 'rahasia123';

class Api extends Bundle {
  constructor () {
    super();
    this.get('/', ctx => 'hello');
    this.get('/history', this.history.bind(this));
  }

  history (ctx) {
    let { username } = jwt.decode(ctx.headers.authorization.slice(7));
  }

  // findOneApp (ctx) {
  //   let { username: owner } = jwt.decode(ctx.headers.authorization.slice(7));
  //   let { id } = ctx.query;
  //   let manager = ctx.norm;
  //   return manager.runSession(async (session) => {
  //     let result = await session.factory('template', { owner, id }).single();
  //     return result;
  //   });
  // }

  // async saveTemplate (ctx) {
  //   let { username: owner } = jwt.decode(ctx.headers.authorization.slice(7));
  //   let { scrapURL: url, selectedObject: query, appName, endpoint } = await ctx.parse();
  //   let manager = ctx.norm;

  //   return manager.runSession(async (session) => {
  //     let template = { owner, appName, endpoint, url, query: JSON.parse(query) };
  //     let criteria = { owner, appName, endpoint };
  //     let check = await session.factory('template', criteria).all();
  //     if (check.length < 1) {
  //       await session.factory('template').insert(template).save();
  //     } else {
  //       await session.factory('template', criteria).set(template).save();
  //     }
  //     return { success: true };
  //   });
  // }
}

module.exports = Api;
