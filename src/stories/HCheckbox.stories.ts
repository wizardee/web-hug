import type { Meta, StoryObj } from '@storybook/vue3'
import HCheckbox from '@/components/checkbox/HCheckbox.vue'
import type { HCheckboxProps } from '@/manage/types/components/checkbox'
import { ref, computed } from 'vue'

const meta = {
  title: 'Components/HCheckbox',
  component: HCheckbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    isDisabled: { control: 'boolean' },
    isCircle: { control: 'boolean' },
  },
} satisfies Meta<typeof HCheckbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 'default-checkbox',
  },
  render: (args) => ({
    components: { HCheckbox },
    setup() {
      const checkboxModel = ref([])
      return { args, checkboxModel }
    },
    template: `
      <div>
        <HCheckbox v-bind="args" v-model:checkbox-model="checkboxModel" />
        <p style="margin-top: 16px; font-size: 12px; color: #666;">
          선택된 값: {{ checkboxModel }}
        </p>
      </div>
    `,
  }),
}

export const WithText: Story = {
  args: {
    value: 'terms-agreement',
  },
  render: (args) => ({
    components: { HCheckbox },
    setup() {
      const checkboxModel = ref([])
      return { args, checkboxModel }
    },
    template: `
      <div>
        <HCheckbox v-bind="args" v-model:checkbox-model="checkboxModel" />
      </div>
    `,
  }),
}

export const CircleStyle: Story = {
  args: {
    value: 'circle-checkbox',
    isCircle: true,
  },
  render: (args) => ({
    components: { HCheckbox },
    setup() {
      const checkboxModel = ref([])
      return { args, checkboxModel }
    },
    template: `
      <div>
        <HCheckbox v-bind="args" v-model:checkbox-model="checkboxModel" />
      </div>
    `,
  }),
}

export const Disabled: Story = {
  args: {
    value: 'disabled-checkbox',
    isDisabled: true,
  },
  render: (args) => ({
    components: { HCheckbox },
    setup() {
      const checkboxModel = ref(['disabled-checkbox']) // 선택된 상태로 시작
      return { args, checkboxModel }
    },
    template: `
      <div>
        <HCheckbox v-bind="args" v-model:checkbox-model="checkboxModel" />
      </div>
    `,
  }),
}

export const CheckboxGroup: Story = {
  args: {},
  render: () => ({
    components: { HCheckbox },
    setup() {
      const hobbies = ref([])
      return { hobbies }
    },
    template: `
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 16px; font-weight: bold;">취미 선택</h3>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <HCheckbox text="독서" value="reading" v-model:checkbox-model="hobbies" />
          <HCheckbox text="영화 감상" value="movies" v-model:checkbox-model="hobbies" />
          <HCheckbox text="운동" value="exercise" v-model:checkbox-model="hobbies" />
          <HCheckbox text="요리" value="cooking" v-model:checkbox-model="hobbies" />
          <HCheckbox text="게임" value="gaming" v-model:checkbox-model="hobbies" />
        </div>
        <div style="margin-top: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>선택된 취미:</strong> {{ hobbies.join(', ') || '없음' }}
        </div>
      </div>
    `,
  }),
}

export const MixedStates: Story = {
  args: {},
  render: () => ({
    components: { HCheckbox },
    setup() {
      const selectedItems = ref(['item2'])
      const disabledSelectedItems = ref(['item5'])
      return { selectedItems, disabledSelectedItems }
    },
    template: `
      <div>
        <h3 style="margin: 0 0 16px 0; font-size: 16px; font-weight: bold;">다양한 상태</h3>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <HCheckbox text="기본 체크박스" value="item1" v-model:checkbox-model="selectedItems" />
          <HCheckbox text="미리 선택된 체크박스" value="item2" v-model:checkbox-model="selectedItems" />
          <HCheckbox text="원형 체크박스" value="item3" v-model:checkbox-model="selectedItems" :isCircle="true" />
          <HCheckbox text="비활성화된 체크박스 (체크 안됨)" value="item4" v-model:checkbox-model="selectedItems" :isDisabled="true" />
          <HCheckbox text="비활성화된 체크박스 (체크됨)" value="item5" v-model:checkbox-model="disabledSelectedItems" :isDisabled="true" />
        </div>
      </div>
    `,
  }),
}

export const FormExample: Story = {
  args: {},
  render: () => ({
    components: { HCheckbox },
    setup() {
      const agreements = ref([])
      const isValid = computed(() => agreements.value.includes('required'))
      
      const handleSubmit = () => {
        if (isValid.value) {
          alert('폼이 제출되었습니다!')
        } else {
          alert('필수 약관에 동의해주세요.')
        }
      }
      
      return { agreements, isValid, handleSubmit }
    },
    template: `
      <div style="width: 320px;">
        <h3 style="margin: 0 0 16px 0; font-size: 16px; font-weight: bold;">회원가입 약관 동의</h3>
        <div style="display: flex; flex-direction: column; gap: 12px; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <HCheckbox 
            text="(필수) 이용약관에 동의합니다" 
            value="required" 
            v-model:checkbox-model="agreements" 
          />
          <HCheckbox 
            text="(선택) 마케팅 정보 수신에 동의합니다" 
            value="marketing" 
            v-model:checkbox-model="agreements" 
          />
          <HCheckbox 
            text="(선택) 이벤트 알림 수신에 동의합니다" 
            value="events" 
            v-model:checkbox-model="agreements" 
          />
          
          <button 
            @click="handleSubmit"
            :disabled="!isValid"
            :style="{
              marginTop: '16px',
              padding: '8px 16px',
              backgroundColor: isValid ? '#4f46e5' : '#ccc',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: isValid ? 'pointer' : 'not-allowed'
            }"
          >
            회원가입
          </button>
        </div>
        
        <div style="margin-top: 12px; font-size: 12px; color: #666;">
          동의 현황: {{ agreements.join(', ') || '없음' }}
        </div>
      </div>
    `,
  }),
}