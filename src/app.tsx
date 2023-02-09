import styles from './shared/styles/styles.css'
import {BrowserRouter, Routes, Route, NavLink} from '@lib/router'
import {AboutPageAsync} from './pages/about.async'
import {MainPageAsync} from './pages/main.async'
import {Suspense} from 'react'
import {ToggleTheme} from '@features/toggle-theme'

export const Application = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <ToggleTheme />
        <NavLink to="/">Main</NavLink>
        <NavLink to="/about">About</NavLink>
        <Suspense fallback={<div>Загрузка...</div>}>
          <Routes>
            <Route path="/about" element={<AboutPageAsync />} />
            <Route path="/" element={<MainPageAsync />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  )
}
