import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
})
export class AppRoot {
  //title for header
  @Prop() heading: string

  render() {
    return (
      <div>
        <header class="header">
          <stencil-route-link url="/" class="header__title-link">
            <h1 class="header__title">{this.heading}</h1>
          </stencil-route-link>
        </header>

        <main>
          <stencil-router>
            <stencil-route url="/" component="app-home" exact={true} />
            <stencil-route url="/capture-email" component="app-email" />
            <stencil-route url="/upload-file" component="app-upload" />
          </stencil-router>
        </main>
      </div>
    )
  }
}
