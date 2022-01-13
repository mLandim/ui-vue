import { createApp } from 'vue'
import App from './App.vue'
// import SyaraUi from '../dist/syara-ui.common'
// import SyaraUi from '../dist/syara-ui.umd'
import SyaraUi from '../src/index'
import '../dist/syara-ui.css'

console.log(SyaraUi)
createApp(App).use(SyaraUi).mount('#app')
