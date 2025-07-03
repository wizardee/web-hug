import type { Meta, StoryObj } from '@storybook/vue3'
import HButton from '@/components/button/HButton.vue'
import type { HButtonProps } from '@/manage/types/components/button'

const meta = {
  title: 'Components/HButton',
  component: HButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'link']
    },
    type: {
      control: 'select', 
      options: ['filled', 'outlined', 'transparent']
    },
    size: {
      control: 'select',
      options: ['xsm', 'sm', 'md', 'lg', 'xlg']
    },
    round: {
      control: 'select',
      options: ['circle', 'square', 'roundedSquare', 'roundedTop', 'roundedBottom', 'roundedLeft', 'roundedRight']
    },
    componentPseudoState: {
      control: 'select',
      options: ['default', 'hover', 'active', 'focused', 'selected']
    },
    text: { control: 'text' },
    preIconName: { control: 'text' },
    postIconName: { control: 'text' },
    isDisabled: { control: 'boolean' },
    noPadding: { control: 'boolean' },
  },
} satisfies Meta<typeof HButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    theme: 'primary',
    type: 'filled',
    size: 'md',
    round: 'roundedSquare',
    text: 'Button',
    isDisabled: false,
  },
}

export const Secondary: Story = {
  args: {
    theme: 'secondary',
    type: 'filled', 
    size: 'md',
    round: 'roundedSquare',
    text: 'Secondary Button',
  },
}

export const Outlined: Story = {
  args: {
    theme: 'primary',
    type: 'outlined',
    size: 'md', 
    round: 'roundedSquare',
    text: 'Outlined Button',
  },
}

export const WithIcons: Story = {
  args: {
    theme: 'primary',
    type: 'filled',
    size: 'md',
    round: 'roundedSquare', 
    text: 'Icon Button',
    preIconName: 'icons_blank',
    postIconName: 'icons_arrow_arrowhead_right',
  },
}

export const Sizes: Story = {
  args: {},
  render: () => ({
    components: { HButton },
    template: `
      <div class="flex gap-4 items-center">
        <HButton theme="primary" size="xsm" text="XSmall" />
        <HButton theme="primary" size="sm" text="Small" />
        <HButton theme="primary" size="md" text="Medium" />
        <HButton theme="primary" size="lg" text="Large" />
        <HButton theme="primary" size="xlg" text="XLarge" />
      </div>
    `,
  }),
}

export const Disabled: Story = {
  args: {
    theme: 'primary',
    type: 'filled',
    size: 'md',
    round: 'roundedSquare',
    text: 'Disabled Button',
    isDisabled: true,
  },
}