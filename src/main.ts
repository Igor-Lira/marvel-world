import { createApp, h }  from 'vue'
import router from './router'
import App from './App.vue'
import stored from  '../stored/index'

const app = createApp({
    render: ()=>h(App)
})
app.use(router)
app.use (stored)
app.mount('#app')

