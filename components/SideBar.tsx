'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const Menu = [
  { label: 'Masukkan Nilai', href: '/', param: '/enter-score' },
  {
    label: 'Lihat Nilai',
    href: '/view-scores',
    param: '/view-scores',
  },
]

const SideBar = () => {
  const path = usePathname()
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])
  return (
    <div className='bg-dark-blue min-h-screen'>
      <div className='flex flex-col items-center gap-y-5 pt-12 pb-7'>
        <Image
          onClick={() => router.push('/')}
          src='https://res.cloudinary.com/dhbg53ncx/image/upload/v1745768544/yrrrixx665pcjiu0jsq9.png'
          alt='profile image'
          width={85}
          height={85}
          priority
        />
        <p className='text-[14px] font-semibold text-white'>Form Penilaian</p>
      </div>
      <div className='border-t border-t-dark-grey flex flex-col items-center gap-y-5 pt-5'>
        {Menu.map((e) => {
          return (
            <Link
              key={e.label}
              href={e.href}
              className={`text-[14px] font-semibold text-white py-3 px-12 ${
                (isMounted && path === e.href) || path.includes(e.param)
                  ? 'bg-light-blue rounded-[10px]'
                  : ''
              }`}
            >
              {e.label}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
export default SideBar
