import { define } from '@xinix/xin';
import { View } from '@xinix/xin/views';

import html from './my-expense.html';
import './my-expense.scss';
import 'xin-qr-scanner';

import('xin-ui/ui-modal');
import('xin-ui/ui-slides');

let fetchService = window.fetchService;
export class MyExpense extends View {
  get props () {
    return Object.assign({}, super.props, {
      title: {
        type: String,
        value: 'Home',
      },
      logo: {
        type: String,
        value: 'http://koperasi.png',
      },
      savings: {
        type: Array,
        value: () => ([]),
      },
      qrData: {
        type: String,
      },
    });
  }

  get template () {
    return html;
  }

  focused () {
    super.focused();
  }

  async handler (evt) {
    let results = await fetchService.post('api/billing', { data: this.qrData });
    console.log(results);
  }

}
define('my-expense', MyExpense);
