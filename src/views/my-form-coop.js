import { define } from '@xinix/xin';
import { View } from '@xinix/xin/views';

import html from './my-form-coop.html';
import './my-home.scss';

import('xin-ui/ui-textfield');

export class FormCoop extends View {
  get props () {
    return Object.assign({}, super.props, {
      title: {
        type: String,
        value: 'Tambah Koperasi',
      },
      savings: {
        type: Array,
        value: () => ([]),
      },
    });
  }

  get template () {
    return html;
  }

  save (evt) {
    evt.preventDefault();
    this.__app.navigate('/listCoop');
  }
}
define('my-form-coop', FormCoop);
