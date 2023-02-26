import {ArrowLeft, ArrowRight, Document, Home, IconBase, Moon, Sun} from '@shared/ui/icons'
import {ComponentMeta, ComponentStory} from '@storybook/react'

export const MoonIcon: ComponentStory<typeof IconBase> = (args) => <Moon {...args} />
export const SunIcon: ComponentStory<typeof IconBase> = (args) => <Sun {...args} />
export const ArrowLeftIcon: ComponentStory<typeof IconBase> = (args) => <ArrowLeft {...args} />
export const ArrowRightIcon: ComponentStory<typeof IconBase> = (args) => <ArrowRight {...args} />

export const HomeIcon: ComponentStory<typeof IconBase> = (args) => <Home {...args} />
export const DocumentIcon: ComponentStory<typeof IconBase> = (args) => <Document {...args} />

const meta: ComponentMeta<typeof IconBase> = {
  title: 'shared/Icons',
  component: IconBase,
  argTypes: {
    className: {control: 'text'},
  },
}
export default meta
