import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from './table.template'
import { resizeTable } from './table.resize'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown']
    })
  }

  toHTML() {
    return createTable(20)
  }

  onMousedown(e) {
    if (e.target.dataset.resize) {
      resizeTable(e)
    }
  }

  onMousemove() {
  
  }

  onMouseup() {
  
  }
}