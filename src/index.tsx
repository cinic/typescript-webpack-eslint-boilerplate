import {createRoot} from 'react-dom/client'
import {Application} from '@app/app'
import '@shared/config/i18n'

const container = document.querySelector('#root') as Element
const root = createRoot(container)
root.render(<Application />)
