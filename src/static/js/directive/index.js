import longPress from '@/static/js/directive/longPress';
import debounce from '@/static/js/directive/debounce';
import inputNumber from '@/static/js/directive/inputNumber';

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
