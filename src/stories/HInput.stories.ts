import type { Meta, StoryObj } from '@storybook/vue3'
import { within, userEvent } from '@storybook/testing-library'
import HInput from '@/components/input/HInput.vue'
import type { HInputProps } from '@/manage/types/components/input'
import { ref } from 'vue'

const meta = {
  title: 'Components/HInput',
  component: HInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    labelPosition: {
      control: 'select',
      options: ['left', 'top']
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    mask: { control: 'text' },
    isDisabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    isPassword: { control: 'boolean' },
    hasButton: { control: 'boolean' },
    hasMessage: { control: 'boolean' },
    debounce: { control: 'number' },
  },
} satisfies Meta<typeof HInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Input Label',
    placeholder: '입력하세요',
    size: 'md',
    labelPosition: 'left',
  },
  render: (args) => ({
    components: { HInput },
    setup() {
      const inputModel = ref('')
      return { args, inputModel }
    },
    template: `
      <div style="width: 300px;">
        <HInput v-bind="args" v-model:input-model="inputModel" />
        <p style="margin-top: 8px; font-size: 12px; color: #666;">
          입력된 값: {{ inputModel }}
        </p>
      </div>
    `,
  }),
}

export const WithValidation: Story = {
  args: {
    label: '이메일',
    placeholder: 'example@email.com',
    size: 'md',
    hasMessage: true,
    validationRules: [
      { type: 'required', message: '이메일을 입력해주세요.' },
      { type: 'email', message: '올바른 이메일 형식이 아닙니다.' }
    ]
  },
  render: (args) => ({
    components: { HInput },
    setup() {
      const inputModel = ref('')
      return { args, inputModel }
    },
    template: `
      <div style="width: 300px;">
        <HInput v-bind="args" v-model:input-model="inputModel" />
      </div>
    `,
  }),
}

export const Password: Story = {
  args: {
    label: '비밀번호',
    placeholder: '비밀번호를 입력하세요',
    isPassword: true,
    size: 'md',
  },
  render: (args) => ({
    components: { HInput },
    setup() {
      const inputModel = ref('')
      return { args, inputModel }
    },
    template: `
      <div style="width: 300px;">
        <HInput v-bind="args" v-model:input-model="inputModel" />
      </div>
    `,
  }),
}

export const WithMask: Story = {
  args: {
    label: '전화번호',
    placeholder: '010-0000-0000',
    mask: '###-####-####',
    size: 'md',
  },
  render: (args) => ({
    components: { HInput },
    setup() {
      const inputModel = ref('')
      return { args, inputModel }
    },
    template: `
      <div style="width: 300px;">
        <HInput v-bind="args" v-model:input-model="inputModel" />
        <p style="margin-top: 8px; font-size: 12px; color: #666;">
          입력된 값: {{ inputModel }}
        </p>
      </div>
    `,
  }),
}

export const WithSearchButton: Story = {
  args: {
    label: '검색',
    placeholder: '검색어를 입력하세요',
    hasButton: true,
    size: 'md',
  },
  render: (args) => ({
    components: { HInput },
    setup() {
      const inputModel = ref('')
      const onClickSearch = () => {
        alert(`검색: ${inputModel.value}`)
      }
      return { args, inputModel, onClickSearch }
    },
    template: `
      <div style="width: 300px;">
        <HInput v-bind="args" v-model:input-model="inputModel" @on-click-search="onClickSearch" />
      </div>
    `,
  }),
}

export const Sizes: Story = {
  args: {},
  render: () => ({
    components: { HInput },
    setup() {
      const smallModel = ref('')
      const mediumModel = ref('')
      const largeModel = ref('')
      return { smallModel, mediumModel, largeModel }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
        <HInput label="Small" size="sm" v-model:input-model="smallModel" placeholder="Small input" />
        <HInput label="Medium" size="md" v-model:input-model="mediumModel" placeholder="Medium input" />
        <HInput label="Large" size="lg" v-model:input-model="largeModel" placeholder="Large input" />
      </div>
    `,
  }),
}

export const States: Story = {
  args: {},
  render: () => ({
    components: { HInput },
    setup() {
      const normalModel = ref('')
      const disabledModel = ref('Disabled input')
      const readonlyModel = ref('Readonly input')
      return { normalModel, disabledModel, readonlyModel }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
        <HInput label="Normal" v-model:input-model="normalModel" placeholder="Normal input" />
        <HInput label="Disabled" v-model:input-model="disabledModel" :isDisabled="true" />
        <HInput label="Readonly" v-model:input-model="readonlyModel" :readonly="true" />
      </div>
    `,
  }),
}

export const TypingTest: Story = {
  args: {
    label: 'Type Test',
    placeholder: 'Type something...',
    size: 'md',
    type: 'text',
  },
  render: (args) => ({
    components: { HInput },
    setup() {
      const inputModel = ref('')
      return { args, inputModel }
    },
    template: `
      <div style="width: 300px;">
        <HInput v-bind="args" v-model:input-model="inputModel" data-testid="input-field" />
        <p style="margin-top: 8px; font-size: 12px; color: #666;">
          입력된 값: {{ inputModel }}
        </p>
      </div>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId('input-field').querySelector('input');
    
    if (input) {
      // 입력 필드 클릭 및 포커스
      await userEvent.click(input);
      
      // 텍스트 입력
      await userEvent.type(input, 'Hello Storybook!');
      
      // 잠시 대기
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 텍스트 지우기
      await userEvent.clear(input);
      
      // 새로운 텍스트 입력
      await userEvent.type(input, 'Interaction Test 성공!');
    }
  },
}