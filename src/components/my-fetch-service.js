import { define, Component } from '@xinix/xin';

class FetchService extends Component {
  async find (endpoint, criteria) {
    let res = await this.fetch(`api/${endpoint}`);
    return res.json();
  }

  async post (uri, body) {
    let res = await this.fetch(uri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return res.json();
  }

  fetch (...args) {
    return this.__app.$.apiPool.fetch(...args);
  }
}

define('my-fetch-service', FetchService);
