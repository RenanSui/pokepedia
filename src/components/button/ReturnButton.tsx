import { ModalContext } from '@/src/contexts/Modal/ModalContext';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';

const ReturnButton = () => {
  const { setIsModalOpen } = useContext(ModalContext);

  return (
    <button title="Search" className="absolute top-4 right-4 z-50 text-white">
      <FontAwesomeIcon
        icon={faArrowLeftLong}
        className={`h-6 w-6 cursor-pointer rounded-full bg-[#00000044] p-3 shadow-2xl backdrop-blur-3xl transition-all duration-700`}
        onClick={() => {
          setIsModalOpen(false);
          document.body.classList.remove('overflow-hidden');
        }}
      />
    </button>
  );
};

export default ReturnButton;

('mx-auto w-[100%] bg-black py-2 text-white backdrop-blur-2xl sm:absolute sm:bottom-4 sm:left-4 sm:w-0 sm:bg-[#00000044]');
