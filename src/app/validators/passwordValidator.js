export function passwordValidator(name) {
  return function(control) {
    var regex = /password|shit|bitch|admin/g
    if (control.value && regex.test(control.value)) {
      return {[name] : true}
    }
  }
}
