import { define } from '@xinix/xin';
import { View } from '@xinix/xin/views';

import html from './my-expense.html';
import './my-expense.scss';
import jsQR from 'jsqr';

import('xin-ui/ui-modal');
import('xin-ui/ui-slides');

export class MyExpense extends View {
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
    super.focused();
    let video = document.createElement('video');
    let canvasElement = this.$.canvas;
    let canvas = canvasElement.getContext('2d');

    function drawLine (begin, end, color) {
      canvas.beginPath();
      canvas.moveTo(begin.x, begin.y);
      canvas.lineTo(end.x, end.y);
      canvas.lineWidth = 4;
      canvas.strokeStyle = color;
      canvas.stroke();
    }

    // Use facingMode: environment to attemt to get the front camera on phones
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } }).then(function (stream) {
      video.srcObject = stream;
      video.setAttribute('playsinline', true); // required to tell iOS safari we don't want fullscreen
      video.play();
      window.requestAnimationFrame(tick);
    });

    function tick () {
      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        canvasElement.hidden = false;
        canvasElement.height = video.videoHeight;
        canvasElement.width = video.videoWidth;

        // let scale = window.innerWidth / video.videoWidth;
        // canvasElement.width = window.innerWidth;
        // canvasElement.height = scale * video.videoHeight;

        // alert(video.videoWidth+'>>'+video.videoHeight);

        canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
        let imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
        let code = jsQR(imageData.data, imageData.width, imageData.height);
        if (code) {
          drawLine(code.location.topLeftCorner, code.location.topRightCorner, '#FF3B58');
          drawLine(code.location.topRightCorner, code.location.bottomRightCorner, '#FF3B58');
          drawLine(code.location.bottomRightCorner, code.location.bottomLeftCorner, '#FF3B58');
          drawLine(code.location.bottomLeftCorner, code.location.topLeftCorner, '#FF3B58');
          if (code.data) {
            alert(code.data);
          }
        }
      }
      window.requestAnimationFrame(tick);
    }
  }
}
define('my-expense', MyExpense);
