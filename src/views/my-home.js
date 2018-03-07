import { define } from '@xinix/xin';
import { View } from '@xinix/xin/components/view';

import html from './my-home.html';
import './my-home.scss';

import('xin-ui/ui-modal');
import('xin-ui/ui-slides');
import('xin-ui/ui-textfield');

export class MyHome extends View {
  get props () {
    return Object.assign({}, super.props, {
      billing: {
        type: Object,
        value: () => ({ amount: 0 }),
      },
    });
  }

  get template () {
    return html;
  }

  doCreateBilling (evt) {
    if (evt) {
      evt.preventDefault();
    }

    let { beneficiary, amount } = this.billing;
    amount = Number(amount);
    if (!amount) {
      return;
    }

    if (!beneficiary) {
      beneficiary = this.__app.accounts[0];
    }

    this.__app.set('__qrbilling', { beneficiary, amount });
    this.__app.navigate('/qrbilling');
  }
}
define('my-home', MyHome);
