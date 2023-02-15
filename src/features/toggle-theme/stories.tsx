import {ToggleTheme as Toggle} from '@features/toggle-theme'
import {ComponentMeta, ComponentStory} from '@storybook/react'

export const ToggleTheme: ComponentStory<typeof Toggle> = () => <Toggle />

const meta: ComponentMeta<typeof Toggle> = {
  title: 'features/ToggleTheme',
  component: Toggle,
}

export default meta
