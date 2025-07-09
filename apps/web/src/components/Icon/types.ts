import type { AvailableIcons } from './mapping'
import type { IconSize } from './constants'

export interface IconProps {
  className?: string
  name: AvailableIcons
  size?: IconSize
}