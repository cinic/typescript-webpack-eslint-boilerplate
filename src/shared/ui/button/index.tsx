import type {ButtonHTMLAttributes, ReactNode} from 'react'
import {Cross} from '@shared/ui/icons'
import styles from './styles.css'

export const Button = ({children, className = '', ...props}: Props) => {
  return (
    <button data-testid="button" className={`${styles.button} ${className}`} {...props}>
      {children}
    </button>
  )
}

export const ButtonIcon = ({children, className = '', ...props}: Props) => {
  return (
    <Button data-testid="button-icon" className={`${styles.icon} ${className}`} {...props}>
      {children}
    </Button>
  )
}

export const ButtonPrimary = ({children, className = '', ...props}: Props) => {
  return (
    <Button data-testid="button-primary" className={`${styles.primary} ${className}`} {...props}>
      {children}
    </Button>
  )
}

export const ButtonIconBase = ({children, className = '', ...props}: Props) => (
  <button type="button" className={`${styles.buttonIcon} ${className}`} {...props}>
    {children}
  </button>
)

export const ButtonClose = (props: Props) => (
  <ButtonIconBase {...props}>
    <Cross />
  </ButtonIconBase>
)

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {className?: string; children?: ReactNode}
