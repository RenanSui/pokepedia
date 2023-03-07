import { ModalContext } from '@/src/contexts/Modal/ModalContext';
import React, { useContext } from 'react';

const LeftBlob = ({ className }: { className: string }) => {
  const { isModalOpen } = useContext(ModalContext);

  return (
    <svg
      width="48"
      height="55"
      viewBox="0 0 48 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`fixed -left-10 -bottom-10 z-30 ${className}`}
    >
      <g clipPath="url(#clip0_1_20)">
        <path
          d="M0 1.4234C6.53934 1.85883 13.0787 2.29427 18.1991 5.42615C23.3195 8.55802 27.021 14.3863 31.312 19.3844C35.6006 24.3824 40.4764 28.5501 43.2825 34.181C46.0885 39.8092 46.8249 46.9059 47.5589 54H0V1.4234Z"
          fill={`${isModalOpen ? '#EBF3F5' : 'bg-transparent'}`}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_20">
          <rect width="48" height="54.5684" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LeftBlob;
