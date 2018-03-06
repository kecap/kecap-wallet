import { define } from '@xinix/xin';
import { View } from '@xinix/xin/views';

import html from './my-walkthrough.html';
import './my-walkthrough.scss';

import('xin-ui/ui-slides');

export class MyWalkthrough extends View {
  get template () {
    return html;
  }
}
define('my-walkthrough', MyWalkthrough);
