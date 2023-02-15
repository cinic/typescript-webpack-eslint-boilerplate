import {ComponentMeta, ComponentStory} from '@storybook/react'
import {PageError as Page} from '@widgets/page-error'

export const PageError: ComponentStory<typeof Page> = (args) => <Page {...args} />

const meta: ComponentMeta<typeof Page> = {
  title: 'widgets/PageError',
  component: Page,
  argTypes: {
    className: {control: 'text'},
  },
}
export default meta
