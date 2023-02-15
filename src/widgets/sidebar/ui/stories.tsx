import {ComponentMeta, ComponentStory} from '@storybook/react'
import {Sidebar as Bar} from '@widgets/sidebar'

export const Sidebar: ComponentStory<typeof Bar> = (args) => <Bar {...args} />

const meta: ComponentMeta<typeof Bar> = {
  title: 'widgets/Sidebar',
  component: Bar,
  argTypes: {
    className: {control: 'text'},
  },
}
export default meta
