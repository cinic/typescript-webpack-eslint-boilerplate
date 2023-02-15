import {ComponentMeta, ComponentStory} from '@storybook/react'
import {AboutPage as About} from './page'

export const AboutPage: ComponentStory<typeof About> = () => <About />

const meta: ComponentMeta<typeof About> = {
  title: 'pages/AboutPage',
  component: About,
}
export default meta
