import {ComponentMeta, ComponentStory} from '@storybook/react'
import {MainPage as Main} from './page'

export const MainPage: ComponentStory<typeof Main> = () => <Main />

const meta: ComponentMeta<typeof Main> = {
  title: 'pages/MainPage',
  component: Main,
}
export default meta
