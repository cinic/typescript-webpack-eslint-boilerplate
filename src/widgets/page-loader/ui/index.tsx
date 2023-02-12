import {classNames} from '@shared/lib/class-names'
import {Loader} from '@shared/ui/loader'
import styles from './styles.css'

export const PageLoader = ({className = ''}: {className?: string}) => {
  return (
    <div className={classNames([styles.loader, className])}>
      <Loader />
    </div>
  )
}
