type CommonProps = {
  isActive?: boolean
  size?: "default" | "icon"
  className?: string
}

type AnchorProps = CommonProps & {
  as?: "a"
  href?: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

type ButtonProps = CommonProps & {
  as: "button"
  type?: "button" | "submit" | "reset"
  onClick?: React.MouseEventHandler<HTMLButtonElement>
} & React.ButtonHTMLAttributes<HTMLButtonElement>

type PaginationLinkProps = AnchorProps | ButtonProps

export type { PaginationLinkProps, CommonProps, AnchorProps, ButtonProps }