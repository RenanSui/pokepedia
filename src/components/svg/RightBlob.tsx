import { ModalContext } from '@/src/contexts/Modal/ModalContext';
import React, { useContext } from 'react';

const RightBlob = ({ className }: { className: string }) => {
  const { isModalOpen } = useContext(ModalContext);

  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`fixed right-0 top-0 z-30 ${className} `}
    >
      <g clipPath="url(#clip0_1_17)">
        <path
          d="M48 47.5901C40.9839 47.7002 33.9702 47.8104 29.789 43.9669C25.6053 40.126 24.2564 32.3289 20.3566 27.6434C16.4545 22.9602 9.99895 21.3837 6.24854 17.293C2.49813 13.2048 1.45526 6.60239 0.409943 0L48 0V47.5901Z"
          fill={`${isModalOpen ? '#EBF3F5' : 'bg-transparent'}`}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_17">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default RightBlob;
