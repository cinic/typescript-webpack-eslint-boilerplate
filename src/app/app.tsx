import styles from '@shared/styles/styles.css'
import {BrowserRouter} from '@shared/lib/router'
import {AppRouter} from './providers/router'
import {Navbar} from '@widgets/navbar'

export const Application = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Navbar />
        <AppRouter />
      </div>
    </BrowserRouter>
  )
}
