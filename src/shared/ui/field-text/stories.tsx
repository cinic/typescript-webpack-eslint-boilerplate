import {ComponentMeta, ComponentStory} from '@storybook/react'
import {FieldText} from './index'

const Template: ComponentStory<typeof FieldText> = (args) => <FieldText {...args} />

export const Default = Template.bind({})
Default.args = {
  value: 'text',
}

export const Disabled = Template.bind({})
Disabled.args = {
  value: 'text',
  disabled: true,
}

const meta: ComponentMeta<typeof FieldText> = {
  title: 'shared/FieldText',
  component: FieldText,
  argTypes: {
    className: {control: 'text'},
    onChange: {
      description: 'Функция-обработчик события onChange, принимает строку в качестве параметров',
    },
  },
}
export default meta
