import {renderComponent} from '@shared/lib/render-component'
import {fireEvent, screen} from '@testing-library/react'
import {Sidebar} from '@widgets/sidebar'

describe('<Sidebar />', () => {
  test('default', () => {
    renderComponent(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('toggle visibility', () => {
    renderComponent(<Sidebar />)
    fireEvent.click(screen.getByTestId('sidebar-toggle-button'))
    expect(screen.getByTestId('sidebar')).toHaveAttribute('data-visibility', 'collapsed')
  })
})
