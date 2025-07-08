import {
  PhoneIcon,
  PhoneOutlinedIcon,
} from '../icons'

const IconMapping = {
  phone: <PhoneIcon />,
  phoneOutlined: <PhoneOutlinedIcon />,
}

type AvailableIcons = keyof typeof IconMapping

export { IconMapping }
export type { AvailableIcons }
