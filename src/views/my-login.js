import { define } from '@xinix/xin';
import { View } from '@xinix/xin/views';

import html from './my-login.html';
import './my-login.scss';

import('xin-ui/ui-reveal');
import('xin-ui/ui-textfield');

export class MyLogin extends View {
  static get is () {
    return 'my-login';
  }

  get props () {
    return Object.assign({}, super.props, {
      title: {
        type: String,
        value: 'Login',
      },
    });
  }

  get template () {
    return html;
  }

  doLogin (evt) {
    evt.preventDefault();

    this.__app.navigate('/');
  }
}
define('my-login', MyLogin);
