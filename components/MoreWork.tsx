import React, { useState } from 'react'
import Icon from './Icon'
import ICONS from '../constants/ICONS'
import Modal from './Modal'

const MoreWork = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  return (
    <div className='morework'>
        <button
        onClick={() => setIsModalOpen(true)}>
            view more<Icon icon={ICONS.live}/>
        </button>
        <Modal
        heading='Works'
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, sed?
        </Modal>
    </div>
  )
}

export default MoreWork