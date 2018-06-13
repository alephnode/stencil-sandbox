import { Component } from '@stencil/core'

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <p>select a utility component</p>
        <stencil-route-link url="/upload-file">
          <button>upload file</button>
        </stencil-route-link>
        <stencil-route-link url="/capture-email">
          <button>capture email</button>
        </stencil-route-link>
      </div>
    )
  }
}
