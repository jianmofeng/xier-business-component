import { App } from "vue";
import SButton from "./button/index";
import ApiSelect from "./api-select/index.vue";

// 导出单独组件
export {  SButton, ApiSelect };

// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component(SButton.name, SButton);
    app.component(ApiSelect.name, ApiSelect);
  },

};