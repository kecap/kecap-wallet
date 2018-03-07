import { define, Component } from '@xinix/xin';
import QRCode from 'qrcode';

import '@xinix/xin/middlewares';
import 'xin-ui/ui-drawer';

export class MyQrCode extends Component {
  get props () {
    return Object.assign({}, super.props, {
      data: {
        type: Object,
        observer: 'observeData(data)',
      },
    });
  }

  observeData (data) {
    this.innerHTML = '';
    if (data) {
      data = typeof data === 'object' ? JSON.stringify(data) : data;
      let width = this.offsetWidth;
      let canvas = document.createElement('canvas');
      QRCode.toCanvas(canvas, data, { width }, err => {
        if (err) {
          this.fire('error', err);
          return;
        }

        this.appendChild(canvas);
        this.fire('rendered');
      });
    }
  }
}

define('my-qrcode', MyQrCode);
