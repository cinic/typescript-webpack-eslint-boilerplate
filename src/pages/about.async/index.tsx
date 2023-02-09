import {lazy} from 'react'

export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // eslint-disable-next-line
      // @ts-ignore
      // только для курса
      setTimeout(() => resolve(import('../about')), 1500)
    }),
)
