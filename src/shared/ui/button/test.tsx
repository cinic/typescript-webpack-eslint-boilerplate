import {Button, ButtonIcon} from '@shared/ui/button'
import {render, screen} from '@testing-library/react'

describe('<Button />', () => {
  test('default', () => {
    render(<Button>Test</Button>)
    expect(screen.getByTestId('button')).toBeInTheDocument()
  })
})

describe('<ButtonIcon />', () => {
  test('default', () => {
    render(<ButtonIcon>Test</ButtonIcon>)
    expect(screen.getByTestId('button-icon')).toBeInTheDocument()
  })

  test('with class icon', () => {
    render(<ButtonIcon>Test</ButtonIcon>)
    expect(screen.getByTestId('button-icon')).toHaveClass('icon')
  })
})
