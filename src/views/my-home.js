import { define } from '@xinix/xin';
import { View } from '@xinix/xin/views';

import html from './my-home.html';
import './my-home.scss';

import('xin-ui/ui-modal');
import('xin-ui/ui-slides');

export class MyHome extends View {
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
    });
  }

  get template () {
    return html;
  }

  focused () {
    let savings = [{
      coopName: 'Koperasi Payung Bersama',
      simpananPokok: '12900',
      simpananWajib: '23000',
    }];
    this.set('savings', savings);
  }

  doLogin (evt) {
    evt.preventDefault();

    this.__app.navigate('/');
  }

  formCoop () {
    this.__app.navigate('/formCoop');
  }

  history () {
    this.__app.navigate('/history');
  }
}
define('my-home', MyHome);
