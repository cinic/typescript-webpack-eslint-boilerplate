declare module '*.css' {
  interface ClassNames {
    [className: string]: string
  }
  const classNames: ClassNames;
  export = classNames;
}
declare module 'storybook-addon-themes/react'
