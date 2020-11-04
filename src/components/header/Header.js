import { ExcelComponent } from '@core/ExcelComponent'
import { $ } from '@core/dom'
import { changeTitle } from '@/redux/actions'
import { ActiveRoute } from '../../core/routes/ActiveRoute'

export class Header extends ExcelComponent {
  static className = 'excel__header'

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input', 'click'],
      ...options
    })
  }

  toHTML() {
    const title = this.store.getState().title
    console.log('!STORE', this.store.getState())
    return `
    <input type="text" class="input" value="${title}">
    <div>
      <div class="button" data-button="remove">
        <span class="material-icons" data-button="remove">delete</span>
      </div>
      <div class="button" data-button="exit">
        <span class="material-icons" data-button="exit">exit_to_app</span>
      </div>
    </div> `
  }

  onClick(e) {
    const $target = $(e.target)
    if ($target.data.button === 'remove') {
      const decision = confirm('Do you realy want to delete this table?')
      if (decision) {
        localStorage.removeItem('excel:' + ActiveRoute.param)
        ActiveRoute.navigate('')
      }
    } else if ($target.data.button === 'exit') {
      ActiveRoute.navigate('')
    }
  }

  onInput(e) {
    const $target = $(e.target)
    this.$dispatch(changeTitle($target.text()))
  }
}