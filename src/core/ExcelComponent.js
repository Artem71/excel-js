import { DomListener } from "./DomListener";

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
  }


  // return layout of component
  toHTML() {
    return '<h1>Test</h1>'
  }

  init() {
    this.initDOMListeners()
  }

  destroy() {
    this.removeDOMListeners()
  }
}