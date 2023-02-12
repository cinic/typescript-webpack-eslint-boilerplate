import {classNames} from '@shared/lib/class-names'
import styles from './styles.css'

export const Loader = ({className = ''}: {className?: string}) => {
  return (
    <div className={classNames([styles.loader, className])}>
      <div />
      <div />
    </div>
  )
}
