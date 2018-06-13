import { Component } from '@stencil/core';


@Component({
  tag: 'app-upload',
  styleUrl: 'app-upload.scss'
})
export class AppUpload {

  render() {
    return (
      <div class='app-upload'>
        <p>
          Let's upload this file
        </p>

        <stencil-route-link url='/profile/stencil'>
          <button>
            Profile page
          </button>
        </stencil-route-link>
      </div>
    );
  }
}
