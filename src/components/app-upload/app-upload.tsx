import { Component, State } from '@stencil/core'

@Component({
  tag: 'app-upload',
  styleUrl: 'app-upload.scss',
})
export class AppUpload {
  @State() userName: string
  componentWillLoad() {
    fetch('https://api.github.com/users/srmward')
      .then(resp => resp.json())
      .then(({ login }) => (this.userName = login))
      .then(() => console.log(this.userName))
  }
  render() {
    return (
      <div class="app-upload">
        <p>{this.userName}</p>

        <stencil-route-link url="/">
          <button>Back</button>
        </stencil-route-link>
      </div>
    )
  }
}
