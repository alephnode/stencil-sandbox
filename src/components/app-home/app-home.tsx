import { Component } from '@stencil/core';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <p>
          Welcome to the app.
          <stencil-route-link url='/upload'>
          <button>
            Upload File
          </button>
        </stencil-route-link>
        </p>
      </div>
    );
  }
}
