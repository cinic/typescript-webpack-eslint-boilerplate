import {createStore} from '@shared/lib/state'

export const $user = createStore<User | null>(null)

type User = {
  id: number
  username: string
}
