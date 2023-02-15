import {ComponentMeta, ComponentStory} from '@storybook/react'
import {Navbar as Bar} from '@widgets/navbar'

export const Navbar: ComponentStory<typeof Bar> = (args) => <Bar {...args} />

const meta: ComponentMeta<typeof Bar> = {
  title: 'widgets/Navbar',
  component: Bar,
  argTypes: {
    className: {control: 'text'},
  },
}
export default meta
