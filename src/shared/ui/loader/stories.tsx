import {Loader as LoaderComponent} from '@shared/ui/loader'
import {ComponentMeta, ComponentStory} from '@storybook/react'

export const Loader: ComponentStory<typeof LoaderComponent> = (args) => (
  <LoaderComponent {...args} />
)

const meta: ComponentMeta<typeof LoaderComponent> = {
  title: 'shared/Loader',
  component: LoaderComponent,
  argTypes: {
    className: {control: 'text'},
  },
}
export default meta
