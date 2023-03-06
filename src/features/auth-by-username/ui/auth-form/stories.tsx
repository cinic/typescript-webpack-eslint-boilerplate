import {ComponentMeta, ComponentStory} from '@storybook/react'
import {AuthForm} from './index'

const Template: ComponentStory<typeof AuthForm> = (args) => <AuthForm {...args} />

export const Default = Template.bind({})

const meta: ComponentMeta<typeof AuthForm> = {
  title: 'feature/AuthForm',
  component: AuthForm,
  argTypes: {
    className: {control: 'text'},
  },
}
export default meta
