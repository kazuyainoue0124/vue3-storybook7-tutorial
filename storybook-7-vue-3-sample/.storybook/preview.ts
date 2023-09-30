import { Decorator, Parameters } from "@storybook/vue3";
import i18n from "../src/i18n";
import { setup } from '@storybook/vue3';

export const parameters: Parameters = {};
export const decorators: Decorator[] = [];

// app が Vue インスタンスにあたるので Vue I18n インスタンスを注入する
// 同一の Vue インスタンスに対して setup 関数は複数回実行されるため、すでに注入済みかを確認する
setup((app) => {
  if (!app.__VUE_I18N__) {
    app.use(i18n);
  }
});