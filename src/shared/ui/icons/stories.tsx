import {IconBase, Moon, Sun} from '@shared/ui/icons'
import {ComponentMeta, ComponentStory} from '@storybook/react'

export const MoonIcon: ComponentStory<typeof IconBase> = (args) => <Moon {...args} />
export const SunIcon: ComponentStory<typeof IconBase> = (args) => <Sun {...args} />

const meta: ComponentMeta<typeof IconBase> = {
  title: 'shared/Icons',
  component: IconBase,
  argTypes: {
    className: {control: 'text'},
  },
}
export default meta
