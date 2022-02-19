import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App.vue'
import router from './router'
import store from "@/store";
import "bootstrap/dist/js/bootstrap.js"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowDown,faArrowsH,faArrowUp ,faArrowDownLong} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faArrowDown,faArrowUp,faArrowsH,faArrowDownLong)


const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(store).use(router).mount('#app')
