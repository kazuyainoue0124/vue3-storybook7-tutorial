import { Decorator, Parameters } from "@storybook/vue3";
import i18n from "../src/i18n";
import { setup } from '@storybook/vue3';

export const parameters = {
    // Viewport addon で使用される設定
    viewport: {
      // プリセットをアプリケーションの仕様に合わせて定義
      viewports: {
        pc: {
          name: "Min PC Layout",
          styles: {
            width: "992px",
            height: "100%",
          },
        },
        mobile: {
          name: "Min Mobile Layout",
          styles: {
            width: "375px",
            height: "100%",
          },
        },
      },
      // すべてのストーリーでデフォルト PC ビューを使用する
      defaultViewport: 'pc',
    },
  };
  
  export const decorators: Decorator[] = [
    () => {
      return {
        template:
          '<div style="margin: 5em; border: 1px solid; border-color: white"><story /></div>',
      };
    },
  ];

  export const globalTypes = {
    locale: {
      name: 'Locale',
      description: '多言語設定',
      defaultValue: 'ja',
      toolbar: {
        icon: 'globe',
        items: ['ja', 'en'],
      },
    },
  };

// app が Vue インスタンスにあたるので Vue I18n インスタンスを注入する
// 同一の Vue インスタンスに対して setup 関数は複数回実行されるため、すでに注入済みかを確認する
setup((app) => {
  if (!app.__VUE_I18N__) {
    app.use(i18n);
  }
});