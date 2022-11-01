import * as React from "react"
import { SVGProps, memo } from "react"

const Menu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    data-prefix="fas"
    data-icon="align-justify"
    className="svg-inline--fa fa-align-justify fa-w-14 ant-menu-item-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    width="20px"
    height="20px"
    {...props}
  >
    <path
      fill="currentColor"
      d="M432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
    />
  </svg>
)

const MenuIcon = memo(Menu)
export default MenuIcon
