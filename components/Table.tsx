import Link from 'next/link'

interface TableInterface {
  details: {
    name: string
    id: number
    nrp: number
  }[]
  linkStr: string
  path: string
}

const Table: React.FC<TableInterface> = ({ details, linkStr, path }) => {
  console.log(path)
  return (
    <table className='w-full mt-6'>
      <thead className='mb-[6px]'>
        <tr>
          <th className='text-start text-light-grey px-2 py-4'>Nama</th>
          {path === '/enter-score' || path === '/view-scores' ? (
            <th className='text-start text-light-grey px-2 py-4'>Nomor</th>
          ) : null}

          <th className='text-start text-light-grey px-2 py-4'>Proyek</th>
        </tr>
      </thead>
      <tbody>
        {details.map((item, index) => (
          <tr key={index} className='odd:bg-thin-blue '>
            <td className=' px-2 py-3'>{item.name}</td>
            {path === '/enter-score' || path === '/view-scores' ? (
              <td className=' px-2 py-3'>{item.nrp}</td>
            ) : null}

            <td className=' px-2 py-3 text-light-blue font-bold'>
              <Link href={`${path}/${item.nrp}`}>{linkStr}</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
export default Table
