import { defaultMessage, Predefined } from './predefined';

export const checkDefined = (predefined: Predefined,
                             def: string,
                             message: string = defaultMessage): boolean => {
  const isDefined = predefined.some(item => {
    return item.def === def
  })

  if (isDefined) {
    return true
  }

  console.error(`${message}: '${def}'`)
  return false
}
