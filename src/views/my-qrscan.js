import { define } from '@xinix/xin';
import { View } from '@xinix/xin/views';

import html from './my-qrscan.html';
import './my-qrscan.scss';
import 'xin-qr-scanner';

import('xin-ui/ui-modal');
import('xin-ui/ui-slides');

const fetchService = window.fetchService;

export class MyQrScan extends View {
  get props () {
    return Object.assign({}, super.props, {
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
define('my-qrscan', MyQrScan);
