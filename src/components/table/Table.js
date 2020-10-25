import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from './table.template'
import { resizeTable } from './table.resize'
import { shouldResize } from './table.function'

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
    if (shouldResize(e)) {
      resizeTable(e, this.$root)
    }
  }

  onMousemove() {
  
  }

  onMouseup() {
  
  }
}