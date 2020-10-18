import { ExcelComponent } from '@core/ExcelComponent'

export class Formula extends ExcelComponent {
  static className = 'excel__formula' // Статическое поле т.к. мы будем иметь к нему доступ без создания экземпляра

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click']
    })
  }

  toHTML() {
    return `
    <div class="info">fx</div>
    <div class="input" contenteditable="true" spellcheck="false"></div>
    `
  }

  onInput(e) {
    console.log(this.$root)
    console.log('onInput Formula', e.target.textContent.trim())
  }

  onClick(e) {
    console.log(e)
  }
}