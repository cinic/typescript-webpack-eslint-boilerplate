import {createRoot} from 'react-dom/client'
import {Application} from '@app/app'

const container = document.querySelector('#root') as Element
const root = createRoot(container)
root.render(<Application />)
