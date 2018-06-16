import { Component, State } from '@stencil/core'

@Component({
  tag: 'app-email',
  styleUrl: 'app-email.scss',
})
export class AppEmail {
  @State() value: string
  @State() selectValue: string

  handleSubmit(e) {
    e.preventDefault()
  }

  handleChange(e) {
    this.value = e.target.value

    if (e.target.validity.typeMismatch) {
    }
  }

  handleSelect(e) {
    this.selectValue = e.target.value
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <label>
          Email:
          <input
            type="email"
            value={this.value}
            onInput={e => this.handleChange(e)}
          />
        </label>

        <select value={this.selectValue} onInput={e => this.handleSelect(e)}>
          <option value="personal">Personal</option>
          <option value="work">Work</option>
          <option value="both">Both ;D</option>
        </select>

        <input type="submit" value="Submit" />

        <stencil-route-link url="/">
          <button>Back</button>
        </stencil-route-link>
      </form>
    )
  }
}
