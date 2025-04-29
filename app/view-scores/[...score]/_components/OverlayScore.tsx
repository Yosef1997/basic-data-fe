'use client'

import { X } from 'lucide-react'

interface OverlayScoreInterface {
  onClose: () => void
}

const OverlayScore: React.FC<OverlayScoreInterface> = ({ onClose }) => {
  return (
    <div className='bg-black/40 fixed inset-0 flex items-center justify-center'>
      <div className='bg-white w-full h-screen'>
        <div className='relative bg-dark-blue px-[92px] py-24'>
          <div className='flex justify-between items-start'>
            <div>
              <p className='text-white text-[32px] font-semibold mb-3'>
                mahasdfas
              </p>
              <p className='text-white text-lg font-medium'>1231235123</p>
            </div>
            <div>
              <p className='text-white text-lg font-medium'>
                Projeck Basic Data
              </p>
            </div>
          </div>

          <div className='absolute top-[25px] right-[33px]'>
            <div
              onClick={onClose}
              title='Close Menu Dialog'
              className=' text-white text-base'
            >
              <X />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default OverlayScore
