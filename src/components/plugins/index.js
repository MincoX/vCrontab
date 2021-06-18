import Pagination from '@/components/plugins/Pagination';
// import UserInfoUpdate from '@/components/plugins/UserInfoUpdate';

const plugins = {
  install: function (Vue) {
    Vue.component("Pagination", Pagination);
    // Vue.component("UserInfoUpdate", UserInfoUpdate);
  }
}

export default plugins;
