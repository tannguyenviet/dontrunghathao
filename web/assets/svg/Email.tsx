import * as React from "react"
import { SVGProps, memo } from "react"

const Email = (props: SVGProps<SVGSVGElement> & { color?: string }) => (
    <svg
    width={12}
    height={10}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.337.5a1.8 1.8 0 0 0-1.8 1.8v.18l5.4 2.909 5.4-2.907V2.3a1.8 1.8 0 0 0-1.8-1.8h-7.2Zm9 3.003L6.152 6.296a.45.45 0 0 1-.427 0L.537 3.503V7.7a1.8 1.8 0 0 0 1.8 1.8h7.2a1.8 1.8 0 0 0 1.8-1.8V3.503Z"
      fill={props.color ? props.color : '#8A1722'}

    />
  </svg>
)

const EmailIcon = memo(Email)
export default EmailIcon
