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
  // ここにまとめて args を定義
  args: {
    label: 'ボタン',
    variant: 'primary',
    size: 'medium',
  },
};

export const Default: Story = {};

export default meta;