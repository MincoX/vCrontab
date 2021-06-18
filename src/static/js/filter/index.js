import { formatDate } from '@/static/js/filter/filters'  

const filters = {
    formatDate,
}

export default {
    install(Vue) {
        Object.keys(filters).forEach(key => {
            Vue.filter(key, filters[key])
        })
    }
}
