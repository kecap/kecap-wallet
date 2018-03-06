import { define } from '@xinix/xin';
import { View } from '@xinix/xin/views';

import html from './my-register.html';

import('xin-ui/ui-reveal');
import('xin-ui/ui-textfield');

export class MyRegister extends View {
  static get is () {
    return 'my-register';
  }

  get props () {
    return Object.assign({}, super.props, {
      title: {
        type: String,
        value: 'Register',
      },
    });
  }

  get template () {
    return html;
  }

  doRegister (evt) {
    evt.preventDefault();

    this.__app.navigate('/');
  }
}
define('my-register', MyRegister);
