/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
/**@important */
//Essa parte foi adicionada para permitir o uso do $router dentro do options api
import { ComponentCustomProperties } from 'vue'
import { Router, RouteLocationNormalizedLoaded } from 'vue-router'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $router: Router
    $route: RouteLocationNormalizedLoaded
  }
}