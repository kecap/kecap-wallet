import { define } from '@xinix/xin';
import { View } from '@xinix/xin/views';
import { UILoading } from 'xin-ui/ui-loading';

import html from './my-login.html';
import './my-login.scss';
import('xin-ui/ui-reveal');
import('xin-ui/ui-textfield');

let fetchService = window.fetchService;

export class MyLogin extends View {
  static get is () {
    return 'my-login';
  }

  get props () {
    return Object.assign({}, super.props, {
      title: {
        type: String,
        value: 'Login',
      },
    });
  }

  get template () {
    return html;
  }

  async doLogin (evt) {
    evt.preventDefault();
    let { username, password } = this;
    let loading = await UILoading.show();
    let message = 'Login Failed';

    this.async(async () => {
      let results = await fetchService.post('auth/login', { username, password });
      if (!results.errors) {
        let { token } = results;
        window.localStorage.token = token;
        const headers = { Authorization: `Bearer ${window.localStorage.token}` };
        message = 'Login Successfull !!';
        window.apiPool.set('headers', headers);
        this.__app.navigate('/');
      }

      let { UISnackbar } = await import('xin-ui/ui-snackbar');
      await UISnackbar.show({ message });
      await loading.hide();
    });
  }
}
define('my-login', MyLogin);
