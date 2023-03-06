import {createEvent, restore} from '@shared/lib/state'

export const toggleAuthFormModal = createEvent<boolean>()

export const $authFormModalShown = restore(toggleAuthFormModal, false)
