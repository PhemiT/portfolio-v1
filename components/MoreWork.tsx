import React, { useState } from 'react'
import Icon from './Icon'
import ICONS from '../constants/ICONS'
import Modal from './Modal'
import ModalWork from './ModalWork'
import { Flower } from '@phosphor-icons/react'
import Divider from './Divider'

const MoreWork = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  return (
    <div className='morework'>
        <button
        onClick={() => setIsModalOpen(true)}>
            view more<Icon icon={ICONS.live}/>
        </button>
        <Modal
        heading='Projects'
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        >
          <ModalWork 
          heading='Airmed'
          desc='Ecommerce Website'
          features='Wordpress - Ecommerce Website'
          liveLink='https://airmedng.com/'
          />
          <Divider />
          <ModalWork 
          heading='domys'
          desc='landing page'
          features='ReactJS - Responsive UI'
          repoLink='https://github.com/PhemiT/domys'
          liveLink='https://domys.vercel.app'
          />
          <Divider />
          <ModalWork 
          heading='weather app'
          desc='Reactive UI'
          features='HTML, CSS, JS - Dynamic Data'
          repoLink='https://github.com/PhemiT/weather-app'
          liveLink='http://weather-app-phemit.vercel.app/'
          />
          <Divider />
          <ModalWork 
          heading='movie search'
          desc='Reactive UI'
          features='ReactJS - Dynamic Data'
          repoLink='https://github.com/PhemiT/movie-search-app'
          liveLink='https://movie-search-app-phemit.vercel.app/'
          />
          <Divider />
          <ModalWork 
          heading='wordle clone'
          desc='Game Clone'
          features='HTML, CSS, JS - Game'
          repoLink='https://github.com/PhemiT/wordle-clone'
          liveLink='https://wordle-clone-phemi-t.vercel.app/'
          />
        </Modal>
    </div>
  )
}

export default MoreWork