'use client'
import StudentsList from '@/components/StudentsList'

export default function Home() {
  return (
    <div className='px-[92px] py-24'>
      <StudentsList path='/enter-score' />
    </div>
  )
}
