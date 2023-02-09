import styles from './app/styles.css'
import {BrowserRouter, Routes, Route, NavLink} from './shared/lib/router'
import {AboutPageAsync} from './pages/about.async'
import {MainPageAsync} from './pages/main.async'
import {Suspense} from 'react'

export const Application = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
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
