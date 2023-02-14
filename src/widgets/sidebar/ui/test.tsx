import {renderWithTranslations} from '@shared/lib/render-with-translations'
import {fireEvent, screen} from '@testing-library/react'
import {Sidebar} from '@widgets/sidebar'

describe('<Sidebar />', () => {
  test('default', () => {
    renderWithTranslations(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('toggle visibility', () => {
    renderWithTranslations(<Sidebar />)
    fireEvent.click(screen.getByTestId('sidebar-toggle-button'))
    expect(screen.getByTestId('sidebar')).toHaveAttribute('data-visibility', 'collapsed')
  })
})
