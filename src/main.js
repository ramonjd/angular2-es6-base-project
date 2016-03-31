import 'zone.js/dist/zone'
import 'zone.js/dist/long-stack-trace-zone'
import 'reflect-metadata'
import { bootstrap } from 'angular2/platform/browser'
import { enableProdMode } from 'angular2/core'
import { ROUTER_PROVIDERS } from 'angular2/router';
import { AppComponent } from './app/AppComponent'

if (window.__ENV__ === 'prod') {
  enableProdMode()
}

bootstrap(AppComponent, [
  ROUTER_PROVIDERS
])
