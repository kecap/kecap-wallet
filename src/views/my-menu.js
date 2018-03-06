import { define } from '@xinix/xin';
import { View } from '@xinix/xin/views';

import html from './my-menu.html';
import './my-menu.scss';

export class MyMenu extends View {
  static get is () {
    return 'my-menu';
  }

  get props () {
    return Object.assign({}, super.props, {
      title: {
        type: String,
        value: 'Menu',
      },
      menus: {
        type: Array,
        value: () => ([]),
      },
    });
  }

  get template () {
    return html;
  }
}
define('my-menu', MyMenu);
