import type {ReactNode} from 'react'
import i18nForTests from '@shared/config/i18n-test'
import {I18nextProvider} from '@shared/lib/i18n'
import {render} from '@testing-library/react'
import {MemoryRouter} from './router'

// eslint-disable-next-line
// @ts-ignore
export async function renderComponent(component: ReactNode, options: Options = {route: '/'}) {
  const {route} = options

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
    </MemoryRouter>,
  )
}

type Options = {
  route: string
}
