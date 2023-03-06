import {ComponentMeta, ComponentStory} from '@storybook/react'
import {AuthDialog, ToggleAuthDialogButton} from './index'

const Template: ComponentStory<typeof AuthDialog> = (args) => (
  <div>
    <ToggleAuthDialogButton />
    <AuthDialog {...args} />
  </div>
)

export const Default = Template.bind({})

const meta: ComponentMeta<typeof AuthDialog> = {
  title: 'feature/AuthDialog',
  component: AuthDialog,
  argTypes: {
    className: {control: 'text'},
  },
}
export default meta
