import styles from './styles.css'
import type {ButtonHTMLAttributes, ReactNode} from 'react'

export const Button = ({children, className = '', ...props}: Props) => {
  return (
    <button className={`${styles.button} ${className}`} {...props}>
      {children}
    </button>
  )
}

export const ButtonIcon = ({children, className = '', ...props}: Props) => {
  return (
    <Button className={`${styles.icon} ${className}`} {...props}>
      {children}
    </Button>
  )
}

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {className?: string; children?: ReactNode}
