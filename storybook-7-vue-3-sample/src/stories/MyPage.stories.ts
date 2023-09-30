import MyPage from '../components/MyPage.vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

type Story = StoryObj<typeof MyPage>;

const meta: Meta<typeof MyPage> = {
  title: 'MyPage',
  component: MyPage,
  render: () => ({
    components: { MyPage },
    template: "<MyPage />",
  }),
  // PC、Mobile それぞれのビューポートを作成（高さは指定しない）
  parameters: {
    viewport: {
      pc: {
        name: 'Min PC Layout',
        styles: {
          width: '992px',
          height: '100%',
        },
      },
      mobile: {
        name: 'Min Mobile Layout',
        styles: {
          width: '375px',
          height: '100%',
        },
      },
    },
  },
};

export const Default: Story = {};

export default meta;