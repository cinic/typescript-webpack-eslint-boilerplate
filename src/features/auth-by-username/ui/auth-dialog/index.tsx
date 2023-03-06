import {AuthForm} from '@features/auth-by-username/ui/auth-form'
import {classNames} from '@shared/lib/class-names'
import {useTranslation} from '@shared/lib/i18n'
import {useUnit} from '@shared/lib/state'
import {ButtonPrimary} from '@shared/ui/button'
import {ModalDialog} from '@shared/ui/modal-dialog'
import {$authFormModalShown, toggleAuthFormModal} from '../../model'
import styles from './styles.css'

export const AuthDialog = ({className = ''}: {className?: string}) => {
  const {t} = useTranslation()
  const {isAuthFormModalShown, toggleModalClicked} = useUnit({
    isAuthFormModalShown: $authFormModalShown,
    toggleModalClicked: toggleAuthFormModal,
  })

  return isAuthFormModalShown ? (
    <ModalDialog
      actions={<></>}
      onClose={() => toggleModalClicked(false)}
      title={t('translation:authorization')}
      className={classNames([styles.authFormModal, className])}
    >
      <AuthForm />
    </ModalDialog>
  ) : null
}

export const ToggleAuthDialogButton = () => {
  const {t} = useTranslation()
  const toggleModalClicked = useUnit(toggleAuthFormModal)

  return (
    <ButtonPrimary onClick={() => toggleModalClicked(true)}>{t('translation:login')}</ButtonPrimary>
  )
}
