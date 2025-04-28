'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

interface HeaderInterface {
  title: string
  name?: string
  nrp?: string
  buttonStr: string
  onClick: () => void
}

const Header: React.FC<HeaderInterface> = ({ ...props }) => {
  const path = usePathname()
  console.log(path)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className='flex items-end justify-between'>
      <div>
        <div className='text-light-grey text-[32px] font-bold'>
          {props.title}
        </div>
        {props.name && props.nrp && (
          <div>
            <p className='text-light-grey text-2xl'>
              {props.name} - {props.nrp}
            </p>
          </div>
        )}
      </div>

      {isMounted && !path.includes('view-scores') && (
        <button
          className='bg-dark-blue px-[14px] py-3 rounded-[4px] text-[14px] text-white font-semibold'
          onClick={props.onClick}
          title={props.buttonStr}
        >
          {props.buttonStr}
        </button>
      )}
    </div>
  )
}
export default Header
