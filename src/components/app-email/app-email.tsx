import { Component } from '@stencil/core'

@Component({
  tag: 'app-email',
  styleUrl: 'app-email.scss',
})
export class AppEmail {
  render() {
    return (
      <div class="app-email">
        <p>email section</p>
        <stencil-route-link url="/">
          <button>Back</button>
        </stencil-route-link>
      </div>
    )
  }
}
