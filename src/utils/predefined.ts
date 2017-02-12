export interface PredefinedItem {
  def   : string,
  value?: string
}

export type Predefined = PredefinedItem[]

export const defaultMessage = 'The specified value is not defined'