import type {ReactNode} from 'react'
import {classNames} from '@shared/lib/class-names'
import {useTranslation} from '@shared/lib/i18n'
import {ButtonPrimary} from '@shared/ui/button'
import {FieldText} from '@shared/ui/field-text'
import styles from './styles.css'

export const AuthForm = ({className = ''}: {className?: string}) => {
  const {t} = useTranslation()

  return (
    <form className={classNames([styles.authForm, className])}>
      <FormRow>
        <FieldText autoFocus />
      </FormRow>
      <FormRow>
        <FieldText />
      </FormRow>
      <FormRow className={styles.actions}>
        <ButtonPrimary>{t('translation:login')}</ButtonPrimary>
      </FormRow>
    </form>
  )
}

const FormRow = ({children, className = ''}: {children?: ReactNode; className?: string}) => (
  <div className={`${styles.row} ${className}`}>{children}</div>
)
