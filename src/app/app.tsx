import styles from '@shared/styles/styles.css'
import {BrowserRouter} from '@shared/lib/router'
import {AppRouter} from './providers/router'
import {Navbar} from '@widgets/navbar'
import {Sidebar} from '@widgets/sidebar'

export const Application = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Navbar />
        <div className={styles.pageWrapper}>
          <Sidebar />
          <div className={styles.page}>
            <AppRouter />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}
