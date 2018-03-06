import { define } from '@xinix/xin';
import { View } from '@xinix/xin/views';

import html from './my-list-coop.html';
import './my-home.scss';

export class ListCoop extends View {
  get props () {
    return Object.assign({}, super.props, {
      title: {
        type: String,
        value: 'List Koperasi',
      },
      lists: {
        type: Array,
        value: () => ([]),
      },
    });
  }

  get template () {
    return html;
  }

  focused () {
    let lists = [{
      coopName: 'Koperasi Payung Bersama',
      totalMember: 97,
    }, {
      coopName: 'Koperasi Payung 2',
      totalMember: 76,
    }];
    this.set('lists', lists);
  }

  edit (list) {
    console.log(list);
    this.__app.navigate('/formCoop/');
  }
}
define('my-list-coop', ListCoop);
