import {useState} from 'react'
import {classNames} from '@shared/lib/class-names'
import {useTranslation} from '@shared/lib/i18n'
import {ButtonPrimary} from '@shared/ui/button'
import {ModalDialog} from '@shared/ui/modal-dialog'
import styles from './styles.css'

export const Navbar = ({className = ''}: {className?: string}) => {
  const {t} = useTranslation()
  const [isAuthModalVisible, toggleAuthModalVisible] = useState(false)

  return (
    <div className={classNames([styles.navbar, className])}>
      <nav className={styles.links}>
        <ButtonPrimary onClick={() => toggleAuthModalVisible(true)}>
          {t('translation:login')}
        </ButtonPrimary>
      </nav>
      {isAuthModalVisible && (
        // eslint-disable-next-line i18next/no-literal-string
        <ModalDialog title="Lorem ipsum" onClose={() => toggleAuthModalVisible(false)}>
          Lorem ipsum
        </ModalDialog>
      )}
    </div>
  )
}
