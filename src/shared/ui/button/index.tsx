import type {ButtonHTMLAttributes, ReactNode} from 'react'
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

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {className?: string; children?: ReactNode}
