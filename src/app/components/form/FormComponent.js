if (process.env.BROWSER) {
    require('../../../scss/FormComponent.scss')
}

import { Component, EventEmitter } from 'angular2/core'
import { FormBuilder, Validators, FORM_DIRECTIVES, NgClass, NgFor} from 'angular2/common'
import { RouteData } from 'angular2/router'
import { passwordValidator } from '../../validators/passwordValidator'
import template from './FormComponent.jade'

@Component({
  selector: 'app-form',
  directives: [FORM_DIRECTIVES, NgClass, NgFor],
  template: template()
})
export class FormComponent {
  //  attach a static getter parameter to your class to provide the ES6-specific equivalent of Dependency Injection
  static get parameters() {
    return [[FormBuilder], [RouteData]]
  }

  constructor(builder, data) {

    this.props = data.get('props')

    this.AppFormModel = builder.group({
      username : ['', Validators.required],
      password : ['', Validators.compose([Validators.required, passwordValidator('invalidPassword')])]
    })

    this.AppFormModel.valueChanges.subscribe(data => console.log('AppFormModel changes', data))
  }
  ngOnInit() {
    console.log('oninit', this.props)
  }
  onSubmit(post) {
    this.output = JSON.stringify(this.AppFormModel.value, null, 4)
  }
}
