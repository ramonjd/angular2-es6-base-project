if (process.env.BROWSER) {
    require('../scss/AppComponent.scss')
}

import { Component } from 'angular2/core'
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router'
import template from './AppComponent.jade'
import { FormComponent } from './components/form/FormComponent'
import { createRouter } from '../router'

const props = {
      form : {
        title : 'Form',
        fields : [
          {
            id : 'username',
            name : 'username',
            placeholder : 'Enter your username',
            label : 'Username',
            type : 'text'
          },
          {
            id : 'password',
            name : 'password',
            placeholder : 'Enter your password',
            label : 'Password',
            type : 'password'
          }
        ]
      },
      error : {
        title : 'Error'
      }
    }

@Component({
  selector: 'app',
  directives: [FormComponent, ROUTER_DIRECTIVES],
  template: template()
})
@RouteConfig(createRouter(props))
export class AppComponent {
  constructor() {

  }
  ngOnInit() {

  }
}
