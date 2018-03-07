import { define } from '@xinix/xin';
import { View } from '@xinix/xin/components/view';

import html from './my-qrbilling.html';
import './my-qrbilling.scss';

import '../components/my-qrcode';
import('xin-ui/ui-reveal');
import('xin-ui/ui-textfield');

export class MyQrBilling extends View {
  get props () {
    return Object.assign({}, super.props, {
      billing: {
        type: Object,
      },
    });
  }

  get template () {
    return html;
  }

  focusing (parameters) {
    super.focusing(parameters);

    this.async(() => {
      let billing = this.__app.__qrbilling;
      if (!billing) {
        let { account = '', amount = 0 } = parameters;
        amount = Number(amount);

        billing = { account, amount };
      }

      this.__app.set('__qrbilling', null);
      this.set('billing', billing);
    }, 300);
  }
}

define('my-qrbilling', MyQrBilling);
