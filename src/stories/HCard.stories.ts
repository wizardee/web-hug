import type { Meta, StoryObj } from '@storybook/vue3'
import HItemCard from '@/components/card/HItemCard.vue'
import HLayoutCard from '@/components/card/HLayoutCard.vue'
import HButton from '@/components/button/HButton.vue'
import HTextDisplay from '@/components/text/HTextDisplay.vue'

const meta = {
  title: 'Components/HCard',
  component: HItemCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HItemCard>

export default meta
type Story = StoryObj<typeof meta>

export const ItemCard: Story = {
  render: () => ({
    components: { HItemCard, HButton, HTextDisplay },
    template: `
      <div style="width: 320px;">
        <HItemCard :headerProps="{ text: '카드 제목' }">
          <template #body>
            <div style="padding: 16px 0;">
              <HTextDisplay text="카드 본문 내용입니다. 여기에 다양한 컨텐츠를 넣을 수 있습니다." />
            </div>
          </template>
          <template #footer>
            <div style="display: flex; gap: 8px; justify-content: flex-end; padding-top: 16px;">
              <HButton theme="secondary" type="outlined" size="sm" text="취소" />
              <HButton theme="primary" size="sm" text="확인" />
            </div>
          </template>
        </HItemCard>
      </div>
    `,
  }),
}

export const LayoutCard: Story = {
  render: () => ({
    components: { HLayoutCard, HTextDisplay },
    template: `
      <div style="width: 400px;">
        <HLayoutCard>
          <template #body>
            <div style="padding: 24px;">
              <h3 style="margin: 0 0 16px 0; font-size: 18px; font-weight: bold;">레이아웃 카드</h3>
              <HTextDisplay text="레이아웃 카드는 기본적인 카드 스타일을 제공합니다. 헤더나 푸터 없이 깔끔한 컨테이너 역할을 합니다." />
            </div>
          </template>
        </HLayoutCard>
      </div>
    `,
  }),
}

export const WithHeaderSlots: Story = {
  render: () => ({
    components: { HItemCard, HButton, HTextDisplay },
    template: `
      <div style="width: 350px;">
        <HItemCard>
          <template #header-above>
            <div style="background: #f5f5f5; padding: 8px 16px; font-size: 12px; color: #666;">
              상단 헤더
            </div>
          </template>
          <template #header-pre>
            <div style="padding: 8px;">📋</div>
          </template>
          <template #header-mid>
            <HTextDisplay text="제목과 아이콘" className="h-font-bold h-typo-heading-4" />
          </template>
          <template #header-post>
            <HButton theme="link" size="sm" text="더보기" />
          </template>
          <template #body>
            <div style="padding: 16px 0;">
              <HTextDisplay text="다양한 헤더 슬롯을 활용한 카드 예제입니다." />
            </div>
          </template>
        </HItemCard>
      </div>
    `,
  }),
}

export const CardStates: Story = {
  render: () => ({
    components: { HItemCard, HTextDisplay },
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <div style="width: 200px;">
          <HItemCard :headerProps="{ text: '기본 카드' }">
            <template #body>
              <div style="padding: 12px 0;">
                <HTextDisplay text="기본 상태의 카드입니다." />
              </div>
            </template>
          </HItemCard>
        </div>
        
        <div style="width: 200px;">
          <HItemCard 
            :headerProps="{ text: '커스텀 스타일' }"
            :styles="{ backgroundColor: '#f8f9fa', borderColor: '#e9ecef' }"
          >
            <template #body>
              <div style="padding: 12px 0;">
                <HTextDisplay text="커스텀 스타일이 적용된 카드입니다." />
              </div>
            </template>
          </HItemCard>
        </div>
      </div>
    `,
  }),
}

export const ComplexCard: Story = {
  render: () => ({
    components: { HItemCard, HButton, HTextDisplay },
    template: `
      <div style="width: 400px;">
        <HItemCard>
          <template #header-above>
            <div style="background: linear-gradient(90deg, #4f46e5, #7c3aed); padding: 12px 16px; color: white; font-size: 14px;">
              프리미엄 플랜
            </div>
          </template>
          <template #header-mid>
            <div style="padding: 16px 0 8px 0;">
              <h2 style="margin: 0; font-size: 24px; font-weight: bold;">₩29,000</h2>
              <p style="margin: 4px 0 0 0; color: #666; font-size: 14px;">월 구독료</p>
            </div>
          </template>
          <template #body>
            <div style="padding: 16px 0;">
              <ul style="margin: 0; padding: 0; list-style: none;">
                <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✅ 무제한 프로젝트</li>
                <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✅ 고급 분석 도구</li>
                <li style="padding: 8px 0; border-bottom: 1px solid #eee;">✅ 우선 고객 지원</li>
                <li style="padding: 8px 0;">✅ API 액세스</li>
              </ul>
            </div>
          </template>
          <template #footer>
            <div style="padding-top: 16px;">
              <HButton 
                theme="primary" 
                size="md" 
                text="지금 시작하기" 
                className="w-full"
                :styles="{ width: '100%' }"
              />
            </div>
          </template>
          <template #footer-below>
            <div style="text-align: center; padding: 12px; font-size: 12px; color: #666;">
              언제든지 취소 가능
            </div>
          </template>
        </HItemCard>
      </div>
    `,
  }),
}