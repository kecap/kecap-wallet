import { define } from '@xinix/xin';
import { View } from '@xinix/xin/views';

import html from './my-payment.html';
import './my-payment.scss';

import('xin-ui/ui-reveal');
import('xin-ui/ui-textfield');

export class MyPayment extends View {
  static get is () {
    return 'my-payment';
  }

  get props () {
    return Object.assign({}, super.props, {
      title: {
        type: String,
        value: 'Payment',
      },
    });
  }

  get template () {
    return html;
  }
}
define('my-payment', MyPayment);
