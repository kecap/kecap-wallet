import { define } from '@xinix/xin';
import { View } from '@xinix/xin/views';

import html from './my-receipt.html';
import './my-receipt.scss';

import '../components/my-qrcode';
import('xin-ui/ui-reveal');
import('xin-ui/ui-textfield');

export class MyReceipt extends View {
  static get is () {
    return 'my-receipt';
  }

  get props () {
    return Object.assign({}, super.props, {
      title: {
        type: String,
        value: 'Receipt',
      },
      url: {
        type: String,
        value: '',
      },
      data: {
        type: Object,
      },
    });
  }

  get template () {
    return html;
  }

  save (evt) {
    evt.preventDefault();
    let data = {
      product: this.product,
      jumlah: this.amount,
    };
    this.set('data', JSON.stringify(data));
  }
}

define('my-receipt', MyReceipt);
