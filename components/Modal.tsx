import React, { useEffect } from 'react';
import Icon from './Icon';
import ICONS from '../constants/ICONS';

interface ModalProps {
    heading: string;
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
  }
  

const Modal:React.FC<ModalProps> = ({heading, isOpen, onClose, children}) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
        onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
        document.body.classList.add('modal-active');
    } else {
        document.body.classList.remove('modal-active');
    }
}, [isOpen]);


  return (
    <div className={`${isOpen ? 'modal-open' : ''} modal_overlay `} onClick={handleOverlayClick} >
        <div className="modal_main">
            <div className="modal_heading">
                <h3>{heading}</h3>
                <button onClick={onClose}>
                  <Icon icon={ICONS.close}/>
                </button>
            </div>
            <div className="modal_content">
              {children}
            </div>
        </div>
    </div>
  )
}

export default Modal