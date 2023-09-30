import MyButton from '../components/MyButton.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

type Story = StoryObj<typeof MyButton>;

const meta: Meta<typeof MyButton> = {
  title: 'MyButton',
  component: MyButton,
  render: (args) => ({
    components: { MyButton },
    setup() {
      return { args };
    },
    template: "<MyButton v-bind='args' />",
  }),
};

// 「ボタン」
export const Default: Story = {
  args: {
    label: 'ボタン',
  },
};

// 「ログイン」
export const Login: Story = {
  args: {
    label: 'ログイン',
  },
};

// 「会員登録」
export const SignUp: Story = {
  args: {
    label: '会員登録',
  },
};

export default meta;