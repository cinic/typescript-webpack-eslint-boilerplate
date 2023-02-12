import type {ErrorInfo, ReactNode} from 'react'
import {Component} from 'react'
import {PageError} from '@widgets/page-error'

export class ErrorBoundary extends Component<Props, State> {
  // constructor(props) {
  //   super(props)
  //   this.state = {hasError: false}
  // }
  state = {hasError: false}

  static getDerivedStateFromError(_error: Error) {
    // Update state so the next render will show the fallback UI.
    return {hasError: true}
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <PageError />
    }

    return this.props.children
  }
}

type Props = {
  children?: ReactNode
}
type State = {
  hasError: boolean
}
