import { ModalProps } from './types';

export default function Modal({ shouldShow, handleClose, children }: ModalProps) {
  return shouldShow ? (
    <div
      className='fixed flex items-center justify-center h-full w-full bg-black/70 overflow-auto top-0 left-0 z-[99]'
      onClick={handleClose}
    >
      <div
        className='w-6/12 p-5 bg-white rounded-2xl'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className='text-right'>
          <span className='text-sm cursor-pointer' onClick={handleClose} data-testid='close-button'>Close</span>
        </div>
        {children}
      </div>
    </div>
  ) : null;
};
