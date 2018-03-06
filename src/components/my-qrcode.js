import { define, Component } from '@xinix/xin';
import html from './my-qrcode.html';
import QRCode from 'qrcode';

import './my-qrcode.scss';
import '@xinix/xin/middlewares';
import 'xin-ui/ui-drawer';

export class MyQrCode extends Component {
  get template () {
    return html;
  }

  get props () {
    return Object.assign({}, super.props, {
      imgSrc: {
        type: String,
      },
      data: {
        type: Object,
        observer: 'observeData(data)',
      },
    });
  }

  async observeData (data) {
    if (data) {
      console.log(data);
      let url = await QRCode.toDataURL(data);
      this.set('imgSrc', url);
      return;
    }
    this.set('imgSrc', '');
  }
}

define('my-qrcode', MyQrCode);
