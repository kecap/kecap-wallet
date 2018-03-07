import { define } from '@xinix/xin';
import { Middleware } from '@xinix/xin/components/middleware';
import jwt from 'jsonwebtoken';

export class Login extends Middleware {
  get props () {
    return Object.assign({}, super.props, {
      defaultTitle: {
        type: String,
        value: 'Unknown',
      },
    });
  }

  callback (options) {
    return async (ctx, next) => {
      let token = jwt.decode(window.localStorage.token);
      let uri = ['/login', '/register'];
      if (!uri.includes(ctx.uri) && token == null) {
        ctx.app.navigate('/login');
        return;
      }
      if (token) {
        window.sessionUsername = token.username;
      }
      // if (uri.includes(ctx.uri)) {
      //   ctx.app.$$('ui-drawer').style.display = 'none';
      // } else {
      //   ctx.app.$$('ui-drawer').style.display = '';
      // }

      await next();
    };
  }
}
define('my-login-middleware', Login);
