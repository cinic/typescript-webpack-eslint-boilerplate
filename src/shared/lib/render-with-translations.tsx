import type {ReactNode} from 'react'
import i18nForTests from '@shared/config/i18n-test'
import {I18nextProvider} from '@shared/lib/i18n'
import {render} from '@testing-library/react'

export async function renderWithTranslations(component: ReactNode) {
  return render(<I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>)
}
