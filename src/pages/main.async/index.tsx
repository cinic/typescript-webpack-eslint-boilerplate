import {lazy} from 'react'

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // eslint-disable-next-line
      // @ts-ignore
      // только для курса
      setTimeout(() => resolve(import('../main')), 1500)
    }),
)
