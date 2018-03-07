import { define } from '@xinix/xin';
import { View } from '@xinix/xin/components/view';

import html from './my-register.html';
import { UILoading } from 'xin-ui/ui-loading';

import('xin-ui/ui-reveal');
import('xin-ui/ui-textfield');

export class MyRegister extends View {
  static get is () {
    return 'my-register';
  }

  get props () {
    return Object.assign({}, super.props, {
      title: {
        type: String,
        value: 'Register',
      },
    });
  }

  get template () {
    return html;
  }

  async doRegister (evt) {
    evt.preventDefault();
    let { email, fullname, username, password } = this;
    let loading = await UILoading.show();
    let message = 'Data saved';

    this.async(async () => {
      let results = await fetchService.post('auth/register', { email, fullname, username, password });
      if (results.success) {
        await UISnackbar.show({ message });
        this.__app.navigate('/');
      }
      let { UISnackbar } = await import('xin-ui/ui-snackbar');
      await loading.hide();
    });
  }
}
define('my-register', MyRegister);
