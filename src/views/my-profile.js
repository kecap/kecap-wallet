import { define } from '@xinix/xin';
import { View } from '@xinix/xin/views';

import html from './my-profile.html';
import './my-profile.scss';

import('xin-ui/ui-slides');
import('xin-ui/ui-textfield');

export class MyProfile extends View {
  get props () {
    return Object.assign({}, super.props, {
      title: {
        type: String,
        value: 'Profile',
      },

      profile: {
        type: Object,
        value: () => ({
          name: 'Michael Jordan',
          birthdate: '1982-11-21',
          image: '../assets/images/profile/200x200jordan.png',
        }),
      },
    });
  }

  get template () {
    return html;
  }

  async doSave (evt) {
    evt.preventDefault();

    let { UISnackbar } = await import('xin-ui/ui-snackbar');
    await UISnackbar.show({ message: 'Profile saved' });
  }
}
define('my-profile', MyProfile);
