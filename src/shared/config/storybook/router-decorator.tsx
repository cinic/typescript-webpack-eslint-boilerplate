import {BrowserRouter} from '@shared/lib/router'
import type {Story} from '@storybook/react'

// eslint-disable-next-line
// @ts-ignore
export const RouterDecorator = (story: () => Story) => <BrowserRouter>{story()}</BrowserRouter>
