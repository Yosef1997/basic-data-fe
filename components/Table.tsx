import Link from 'next/link'

interface TableInterface {
  details: {
    name: string
    id: number
  }[]
  linkStr: string
  path: string
}

const Table: React.FC<TableInterface> = ({ details, linkStr, path }) => {
  return (
    <table className='w-full mt-6'>
      <thead className='mb-[6px]'>
        <tr>
          <th className='text-start text-light-grey px-2 py-4'>Nama</th>
          <th className='text-start text-light-grey px-2 py-4'>Nomor</th>
          <th className='text-start text-light-grey px-2 py-4'>Proyek</th>
        </tr>
      </thead>
      <tbody>
        {details.map((item, index) => (
          <tr key={index} className='odd:bg-thin-blue '>
            <td className=' px-2 py-3'>{item.name}</td>
            <td className=' px-2 py-3'>{item.id}</td>
            <td className=' px-2 py-3 text-light-blue font-bold'>
              <Link href={`${path}/${item.id}`}>{linkStr}</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
export default Table
