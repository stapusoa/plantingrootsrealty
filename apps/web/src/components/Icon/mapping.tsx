import {
  LoadingIcon,
  PhoneIcon,
  PhoneOutlinedIcon,
} from '../icons'

const IconMapping = {
  loading: <LoadingIcon />,
  phone: <PhoneIcon />,
  phoneOutlined: <PhoneOutlinedIcon />,
}

type AvailableIcons = keyof typeof IconMapping

export { IconMapping }
export type { AvailableIcons }
