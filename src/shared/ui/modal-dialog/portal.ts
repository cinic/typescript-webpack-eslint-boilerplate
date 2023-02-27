import type {ReactNode} from 'react'
import {useEffect, useRef} from 'react'
import {createPortal} from 'react-dom'

export const Portal = ({children}: {children: ReactNode}) => {
  const portalRef = useRef<HTMLDivElement>(document.createElement('div'))

  useEffect(() => {
    const element = portalRef.current

    document.body.appendChild(element)

    return () => {
      document.body.removeChild(element)
    }
  }, [])

  return createPortal(children, portalRef.current)
}
