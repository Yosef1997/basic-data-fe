'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

interface HeaderInterface {
  title: string
  name?: string
  nrp?: string
  textColor?: string
  buttonStr: string
  onClick: () => void
}

const Header: React.FC<HeaderInterface> = ({ ...props }) => {
  const path = usePathname()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className='flex items-end justify-between'>
      <div>
        <div
          className={`${
            props.textColor ? 'text-white' : 'text-light-grey'
          } text-[32px] font-bold`}
        >
          {props.title}
        </div>
        {props.name && props.nrp && (
          <div>
            <p
              className={`${
                props.textColor ? 'text-white' : 'text-light-grey'
              } text-2xl`}
            >
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
