import React from 'react';
import Icon from './Icon';
import ICONS from '../constants/ICONS';

interface ModalProps {
    heading: string;
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
  }
  

const Modal:React.FC<ModalProps> = ({heading, isOpen, onClose, children}) => {
    if (!isOpen) return null;
  return (
    <div className='modal_overlay'>
        <div className="modal_main">
            <div className="modal_heading">
                <h3>{heading}</h3>
                <Icon icon={ICONS.close} />
            </div>
            {children}
        </div>
    </div>
  )
}

export default Modal