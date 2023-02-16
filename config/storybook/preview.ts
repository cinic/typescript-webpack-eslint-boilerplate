import {RouterDecorator} from '@shared/config/storybook/router-decorator'
import {StyleDecorator} from '@shared/config/storybook/style-decorator'
import {ThemeDecorator} from '@shared/config/storybook/theme-decorator'
import 'loki/configure-react'

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      // The icon for the toolbar item
      icon: 'circlehollow',
      // Array of options
      items: [
        {value: 'light', icon: 'circlehollow', title: 'light'},
        {value: 'dark', icon: 'circle', title: 'dark'},
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
}

export const decorators = [StyleDecorator, ThemeDecorator, RouterDecorator]
