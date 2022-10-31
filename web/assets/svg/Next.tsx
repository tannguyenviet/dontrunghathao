import * as React from 'react';
import { SVGProps, memo } from 'react';

const Next = (props: SVGProps<SVGSVGElement>) => (
  <svg width={28} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.875 9a.937.937 0 0 1 .938-.937h22.111l-5.9-5.899A.939.939 0 1 1 19.35.836l7.5 7.5a.936.936 0 0 1 0 1.328l-7.5 7.5a.94.94 0 0 1-1.327-1.328l5.9-5.898H1.813A.937.937 0 0 1 .875 9Z"
      fill="#fff"
    />
  </svg>
);

const NextIcon = memo(Next);
export default NextIcon;
