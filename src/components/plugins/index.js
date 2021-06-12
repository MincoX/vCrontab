import ComponentA from "./Component1";

const plugins = {
  install: function (Vue) {
    Vue.component("component-a", ComponentA);
    //   Vue.component("componen-b", ComponentB);
  }
}
export default plugins;
