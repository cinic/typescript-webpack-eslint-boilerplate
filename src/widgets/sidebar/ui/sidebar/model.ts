import {createEvent, restore} from '@shared/lib/state'

export const toggleVisibility = createEvent<SidebarVisibility>()

export const $sidebarVisibility = restore(toggleVisibility, 'visible')

type SidebarVisibility = 'visible' | 'collapsed'
