import { ErrorComponent } from './app/components/error/ErrorComponent'
import { FormComponent } from './app/components/form/FormComponent'

export function createRouter(props) {
  const { form, error } = props
  return  [
    { path: '/', component: FormComponent, name: 'Form', useAsDefault: true, data : { props : form }},
    { path: '/error', component: ErrorComponent, name: 'Error', data : { props : error }}
  ]
}
