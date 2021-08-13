
import * as AllComponents from './components/index';

// Vue 3.x only
export default {
  install: (app) => {
    Object.entries(AllComponents).forEach(([componentName, component]) => {
      app.component(componentName, component);
    });
  }
}


