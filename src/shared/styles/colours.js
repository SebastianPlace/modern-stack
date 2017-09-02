// @flow
import Color from 'color'

export const darkText = '#2b2b2b'
export const primary = '#685eb2'

// Modifier Functions
export function darken(colour: string, level: number = 0.2): string {
  return Color(colour).darken(level).string()
}
