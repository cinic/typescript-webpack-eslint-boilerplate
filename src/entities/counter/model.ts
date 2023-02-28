import {createEvent, createStore} from '@shared/lib/state'

export const increment = createEvent()
export const decrement = createEvent()

export const $counter = createStore(0)

$counter.on(increment, (current) => current + 1).on(decrement, (current) => current - 1)
