import { define } from '@xinix/xin';
import { App } from '@xinix/xin/components';
import html from './my-app.html';
import 'xin-connect/connect-pool';

import './my-app.scss';
import './my-fetch-service';
import './my-login-middleware';

import '@xinix/xin/middlewares';
import 'xin-ui/ui-drawer';

export class MyApp extends App {
  get template () {
    return html;
  }

  get props () {
    return Object.assign({}, super.props, {
      accounts: {
        type: Array,
        value: () => (['1234567890']),
      },
      configUrl: {
        type: String,
        value: 'https://192.168.3.104:8443',
      },
    });
  }
}
define('my-app', MyApp);
