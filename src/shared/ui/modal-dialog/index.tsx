import type {ReactNode} from 'react'
import {useCallback, useEffect, useRef, useState} from 'react'
import {useTranslation} from '@shared/lib/i18n'
import {ButtonClose, ButtonPrimary} from '@shared/ui/button'
import {Portal} from '@shared/ui/modal-dialog/portal'
import styles from './styles.css'

const ANIMATION_TIMEOUT_SECONDS = 0.2

export const ModalDialog = ({
  children,
  onClose,
  title,
  actions,
  actionsClassName = '',
  headerClassName = '',
  contentClassName = '',
  className = '',
  variant = 'static',
}: Props) => {
  const {t} = useTranslation()
  const [animationState, changeAnimationState] = useState<'inProgress' | 'isDone'>(
    variant === 'static' ? 'isDone' : 'inProgress',
  )
  const dialogRef = useRef<HTMLDivElement>(null)
  const closingTimer = useRef<ReturnType<typeof setTimeout>>()

  const _onClose = useCallback(() => {
    if (variant === 'animated') {
      changeAnimationState('inProgress')

      closingTimer.current = setTimeout(() => {
        onClose()
      }, ANIMATION_TIMEOUT_SECONDS * 1000)
    } else {
      onClose()
    }
  }, [onClose, variant])

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => event.key === 'Escape' && _onClose()
    document.body.classList.add(styles.modalVisible)
    document.addEventListener('keydown', onEscape)

    if (variant === 'animated') {
      changeAnimationState('isDone')
    }

    return () => {
      document.body.classList.remove(styles.modalVisible)
      document.removeEventListener('keydown', onEscape)
      clearTimeout(closingTimer.current)
    }
  }, [_onClose, variant])

  useEffect(() => {
    dialogRef.current?.focus()
  })

  return (
    <Portal>
      <div ref={dialogRef} className={styles.dialog} role="dialog" tabIndex={-1}>
        <div
          className={`${styles.modalDialog} ${className}`}
          data-animation={animationState}
          role="document"
        >
          <header className={`${styles.header} ${headerClassName}`}>
            <div>
              <Title>{title}</Title>
            </div>
            <div className={styles.close}>
              <ButtonClose onClick={_onClose} />
            </div>
          </header>
          <div className={`${styles.content} ${contentClassName}`} tabIndex={0} role="region">
            {children}
          </div>
          <Actions className={actionsClassName}>
            {actions || <ButtonPrimary onClick={_onClose}>{t('translation:close')}</ButtonPrimary>}
          </Actions>
        </div>
        <div className={styles.overlay} onClick={_onClose} />
      </div>
    </Portal>
  )
}

const Title = ({children}: {children: ReactNode}) => <h3 className={styles.title}>{children}</h3>

const Actions = ({children, className}: {children: ReactNode; className?: string}) => (
  <div className={`${styles.actions} ${className}`}>{children}</div>
)

type Props = Partial<{
  className: string
  children: ReactNode
  variant: 'animated' | 'static'
  description: ReactNode
  download: ReactNode
  actions: ReactNode
  actionsClassName: string
  headerClassName: string
  contentClassName: string
}> & {
  title: ReactNode
  onClose: (v?: unknown) => void
}
