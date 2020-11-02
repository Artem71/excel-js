import { ExcelComponent } from '@core/ExcelComponent'
import { $ } from '@core/dom'
import { changeTitle } from '@/redux/actions'

export class Header extends ExcelComponent {
  static className = 'excel__header'

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input'],
      ...options
    })
  }

  toHTML() {
    const title = this.store.getState().title
    console.log('!STORE', this.store.getState())
    return `
    <input type="text" class="input" value="${title}">
    <div>
      <div class="button">
        <span class="material-icons">delete</span>
      </div>
      <div class="button">
        <span class="material-icons">exit_to_app</span>
      </div>
    </div> `
  }

  onInput(e) {
    const $target = $(e.target)
    this.$dispatch(changeTitle($target.text()))
  }
}