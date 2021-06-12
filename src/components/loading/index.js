import Vue from 'vue'
import Loading from '@/components/loading/Loading'

const constructor = Vue.extend(Loading)

const instance = new constructor()

instance.$mount()

document.body.appendChild(instance.$el)

export default instance
