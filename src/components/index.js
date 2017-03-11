import {Main as App} from './main'
import Building from './building.vue'
import {InvList} from './inventory'
import 'element-ui/lib/theme-default/index.css'
import Vue from 'vue'

components = [
  App, Building, InvList 
]

const install = function(Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return;
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  components.map(component => {
    Vue.component(component.name, component);
  });

};

export {App, Building, InvList}