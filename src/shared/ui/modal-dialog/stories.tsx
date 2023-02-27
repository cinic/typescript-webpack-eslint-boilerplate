import {ModalDialog as ModalDialogComponent} from '@shared/ui/modal-dialog'
import {ComponentMeta, ComponentStory} from '@storybook/react'

export const ModalDialog: ComponentStory<typeof ModalDialogComponent> = (args) => (
  <ModalDialogComponent {...args} />
)

ModalDialog.args = {
  children: (
    <div>
      <h2>Translate</h2>
    </div>
  ),
}

const meta: ComponentMeta<typeof ModalDialogComponent> = {
  title: 'shared/ModalDialog',
  component: ModalDialog,
  argTypes: {
    className: {control: 'text'},
  },
}
export default meta
