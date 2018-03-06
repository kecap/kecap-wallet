import { define } from '@xinix/xin';
import { View } from '@xinix/xin/views';

import html from './my-history.html';
import './my-home.scss';

import('xin-ui/ui-textfield');

export class MyHistory extends View {
  get props () {
    return Object.assign({}, super.props, {
      title: {
        type: String,
        value: 'Aktifitas',
      },
      history: {
        type: Array,
        value: () => ([]),
      },
    });
  }

  get template () {
    return html;
  }

  save (evt) {

  }
}
define('my-history', MyHistory);
