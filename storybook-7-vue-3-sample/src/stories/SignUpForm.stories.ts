import SignUpForm from '../components/SignUpForm.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

type Story = StoryObj<typeof SignUpForm>;

const meta: Meta<typeof SignUpForm> = {
  title: 'SignUpForm',
  component: SignUpForm,
  render: (args) => ({
    components: { SignUpForm },
    setup() {
      return { args };
    },
    template: '<SignUpForm />',
  }),
};

export const Default: Story = {};

export default meta;