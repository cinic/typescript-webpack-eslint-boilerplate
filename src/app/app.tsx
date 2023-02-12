import {Suspense} from 'react'
import {BrowserRouter} from '@shared/lib/router'
import {Navbar} from '@widgets/navbar'
import {Sidebar} from '@widgets/sidebar'
import {AppRouter} from './providers/router'
import styles from '@shared/styles/styles.css'

export const Application = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Suspense fallback="">
          <Navbar />
          <div className={styles.pageWrapper}>
            <Sidebar />
            <div className={styles.page}>
              <AppRouter />
            </div>
          </div>
        </Suspense>
      </div>
    </BrowserRouter>
  )
}
