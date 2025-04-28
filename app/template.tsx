import SideBar from '@/components/SideBar'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-2'>
        <SideBar />
      </div>
      <div className='col-span-10'>{children}</div>
    </div>
  )
}
