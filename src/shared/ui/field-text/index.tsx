import {InputHTMLAttributes, memo, useEffect, useRef} from 'react'
import {classNames} from '@shared/lib/class-names'
import styles from './styles.css'

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>
type FieldTextProps = InputProps & {
  value?: string
  onChange?: (value: string) => void
}

export const FieldText = memo((props: FieldTextProps) => {
  const {className = '', type = 'text', onChange, value, autoFocus, ...restProps} = props
  const ref = useRef<HTMLInputElement>(null)
  const onChangeHandler: InputHTMLAttributes<HTMLInputElement>['onChange'] = (e) => {
    onChange?.(e.target.value)
  }

  useEffect(() => {
    if (autoFocus) {
      setTimeout(() => ref.current?.focus(), 0)
    }
  }, [autoFocus])

  return (
    <input
      ref={ref}
      type={type}
      value={value}
      className={classNames([styles.fieldText, className])}
      onChange={onChangeHandler}
      autoFocus={autoFocus}
      {...restProps}
    />
  )
})
