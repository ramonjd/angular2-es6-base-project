import { Component } from 'angular2/core'
import { RouteData } from 'angular2/router'
import template from './ErrorComponent.jade'

@Component({
  selector: 'error',
  template: template()
})
export class ErrorComponent {
  static get parameters() {
    return [[RouteData]]
  }
  constructor(data) {

    this.props = data.get('props')

  }
}
