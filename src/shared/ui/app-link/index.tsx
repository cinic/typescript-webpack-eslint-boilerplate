import {classNames} from '@shared/lib/class-names'
import styles from './styles.css'
import {NavLink} from '@shared/lib/router'
import type {NavLinkProps} from '@shared/lib/router'
import type {ReactNode} from 'react'

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
