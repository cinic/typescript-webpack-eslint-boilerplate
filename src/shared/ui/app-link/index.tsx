import type {ReactNode} from 'react'
import {classNames} from '@shared/lib/class-names'
import type {NavLinkProps} from '@shared/lib/router'
import {NavLink} from '@shared/lib/router'
import styles from './styles.css'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export const AppLink = ({
  children,
  className = '',
  theme = AppLinkTheme.PRIMARY,
  ...props
}: {className?: string; children?: ReactNode; theme?: AppLinkTheme} & NavLinkProps) => {
  return (
    <NavLink className={classNames([styles.link, className, styles[theme]])} {...props}>
      {children}
    </NavLink>
  )
}
