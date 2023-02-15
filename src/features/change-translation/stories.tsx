import {ChangeTranslation as Translation} from '@features/change-translation'
import {ComponentMeta, ComponentStory} from '@storybook/react'

// eslint-disable-next-line
// @ts-ignore
export const ChangeTranslation: ComponentStory<typeof Translation> = (args) => (
  <Translation {...args} />
)

const meta: ComponentMeta<typeof Translation> = {
  title: 'features/ChangeTranslation',
  component: Translation,
}

export default meta
