import { Skeleton } from './ui/skeleton'

const SkeletonTable = () => {
  return (
    <div className='w-full mt-6 overflow-x-auto'>
      <table className='w-full border-collapse'>
        <thead>
          <tr>
            <th className='text-start text-muted-foreground px-2 py-4'>Nama</th>
            <th className='text-start text-muted-foreground px-2 py-4'>
              Nomor
            </th>
            <th className='text-start text-muted-foreground px-2 py-4'>
              Proyek
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map((_, index) => (
            <tr key={index} className='odd:bg-muted/50'>
              <td className='px-2 py-3'>
                <Skeleton className='h-4 w-[120px]' />
              </td>
              <td className='px-2 py-3'>
                <Skeleton className='h-4 w-[80px]' />
              </td>
              <td className='px-2 py-3'>
                <Skeleton className='h-4 w-[100px]' />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SkeletonTable
