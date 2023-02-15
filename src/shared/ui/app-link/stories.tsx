import type {AppLinkTheme} from '@shared/ui/app-link'
import {AppLink as Link} from '@shared/ui/app-link'
import {ComponentMeta, ComponentStory} from '@storybook/react'

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />
Template.args = {
  children: 'Link',
}

export const Primary = Template.bind({})
Primary.args = {
  theme: 'primary' as AppLinkTheme,
  children: 'Link',
}

export const Secondary = Template.bind({})
Secondary.args = {
  theme: 'secondary' as AppLinkTheme,
  children: 'Link',
}

const meta: ComponentMeta<typeof Link> = {
  title: 'shared/AppLink',
  component: Link,
  argTypes: {
    className: {control: 'text'},
  },
}
export default meta
