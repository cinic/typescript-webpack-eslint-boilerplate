import {ButtonIcon as BtnIcon} from '@shared/ui/button'
import {Moon} from '@shared/ui/icons'
import {ComponentMeta, ComponentStory} from '@storybook/react'

export const ButtonIcon: ComponentStory<typeof BtnIcon> = (args) => (
  <BtnIcon {...args}>
    <Moon />
  </BtnIcon>
)

const meta: ComponentMeta<typeof BtnIcon> = {
  title: 'shared/Buttons',
  component: BtnIcon,
  argTypes: {
    className: {control: 'text'},
    onClick: {},
  },
}
export default meta
