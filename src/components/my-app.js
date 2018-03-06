import { define } from '@xinix/xin';
import { App } from '@xinix/xin/components';
import html from './my-app.html';
import './my-app.scss';

import '@xinix/xin/middlewares';
import 'xin-ui/ui-drawer';

export class MyApp extends App {
  get template () {
    return html;
  }

  get props () {
    return Object.assign({}, super.props, {
      formMenus: {
        type: Array,
        value: () => {
          return [
            { label: 'Example', uri: '/form-example' },
          ];
        },
      },
      layoutMenus: {
        type: Array,
        value: () => {
          return [
            { label: 'Big List', uri: '/big-list' },
            { label: 'Mini List', uri: '/mini-list' },
            { label: 'Notifications', uri: '/notifications' },
            { label: 'Profile', uri: '/profile' },
            { label: 'Schedule', uri: '/schedule' },
          ];
        },
      },
    });
  }
}
define('my-app', MyApp);
