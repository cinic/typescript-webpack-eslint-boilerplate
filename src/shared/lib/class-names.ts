type Mods = Record<string, boolean | string>

export function classNames(cls: string | string[], mods: Mods = {}, additional: string[] = []) {
  const classes = Array.isArray(cls) ? cls : [cls]

  return [
    ...classes,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ')
}
