import longPress from '@/static/js/directives/longPress';
import debounce from '@/static/js/directives/debounce';
import inputNumber from '@/static/js/directives/inputNumber';

const directives = {
    longPress,
    debounce,
    inputNumber,
}

export default {
    install(Vue) {
        Object.keys(directives).forEach(key => {
            Vue.directive(key, directives[key])
        })
    }
}
