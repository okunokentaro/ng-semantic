import { defaultMessage, Predefined, PredefinedItem } from './predefined'

const getValues = (item: PredefinedItem): string[] => {
  const value = item.value || item.def
  return value.split(' ').filter(v => !!v)
}

export const toggleClass = (classList: DOMTokenList,
                            className: string,
                            state: boolean) => {
  state
    ? classList.add(className)
    : classList.remove(className)
}

export const switchClass = (classList: DOMTokenList,
                            predefined: Predefined,
                            def: string,
                            message: string = defaultMessage) => {
  const item = predefined.find(item => item.def === def)
  if (!item) {
    console.error(`${message}: '${def}'`)
    return
  }

  predefined.forEach(item => classList.remove(...getValues(item)))
  classList.add(...getValues(item))
}
