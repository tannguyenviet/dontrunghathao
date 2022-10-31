import { memo, SVGProps } from "react"

const Previous = (props: SVGProps<SVGSVGElement>) => (
    <svg
      width={28}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.125 9a.938.938 0 0 0-.938-.937H4.076l5.9-5.899A.939.939 0 0 0 8.65.836l-7.5 7.5a.937.937 0 0 0 0 1.328l7.5 7.5a.938.938 0 0 0 1.327-1.328l-5.9-5.898h22.112A.937.937 0 0 0 27.125 9Z"
        fill="#8A1722"
      />
    </svg>
  )
  
  const PreviousIcon = memo(Previous)
  export default PreviousIcon