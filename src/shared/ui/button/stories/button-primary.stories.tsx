import {ButtonPrimary as Btn} from '@shared/ui/button'
import {ComponentMeta, ComponentStory} from '@storybook/react'

export const ButtonPrimary: ComponentStory<typeof Btn> = (args) => <Btn {...args} />
ButtonPrimary.args = {
  children: 'ButtonPrimary',
}

const meta: ComponentMeta<typeof Btn> = {
  title: 'shared/Buttons',
  component: ButtonPrimary,
  argTypes: {
    className: {control: 'text'},
    onClick: {},
  },
}
export default meta
