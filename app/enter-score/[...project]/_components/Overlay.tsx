'use client'
import ScoreForm, { FormValues } from '@/components/ScoreForm'
import { X } from 'lucide-react'

interface OverlayInterface {
  defaultFormName?: string
  defaultFields?: {
    id: number
    name: string
    score: string
  }[]
  onSubmit: (data: FormValues) => void
  onClose: () => void
}

const Overlay: React.FC<OverlayInterface> = ({
  defaultFormName,
  defaultFields,
  onSubmit,
  onClose,
}) => {
  return (
    <div className='bg-black/40 fixed inset-0 flex items-center justify-center'>
      <div className='bg-white w-1/2'>
        <div className='relative bg-dark-blue text-[38px] text-white font-semibold py-10 text-center'>
          Tambah Parameter
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
        <div className='py-[50px]'>
          <ScoreForm
            defaultFormName={defaultFormName}
            defaultFields={defaultFields}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </div>
  )
}
export default Overlay
