import {ComponentMeta, ComponentStory} from '@storybook/react'
import {NotFoundPage as NotFound} from './page'

export const NotFoundPage: ComponentStory<typeof NotFound> = () => <NotFound />

const meta: ComponentMeta<typeof NotFound> = {
  title: 'pages/NotFoundPage',
  component: NotFound,
}
export default meta
