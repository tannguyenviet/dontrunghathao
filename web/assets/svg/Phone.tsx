import * as React from 'react';
import { SVGProps, memo } from 'react';

const Phone = (props: SVGProps<SVGSVGElement> & { color?: string }) => (
  <svg width={12} height={12} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m1.455 2.477 1.331-1.33a1.01 1.01 0 0 1 1.434 0L5.652 2.58a1.01 1.01 0 0 1 0 1.433L4.605 5.061c.245.54.586 1.032 1.006 1.451.42.421.91.763 1.451 1.01L8.11 6.475a1.01 1.01 0 0 1 1.434 0l1.433 1.43a1.012 1.012 0 0 1 0 1.436L9.65 10.67a1.643 1.643 0 0 1-1.424.457C6.54 10.85 4.869 9.953 3.52 8.606 2.172 7.26 1.277 5.59.996 3.9a1.645 1.645 0 0 1 .459-1.423Z"
      fill={props.color ? props.color : '#8A1722'}
    />
  </svg>
);

const PhoneIcon = memo(Phone);
export default PhoneIcon;
