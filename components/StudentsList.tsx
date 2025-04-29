'use client'
import Header from './Header'
import Empty from './Empty'
import Table from './Table'
import { useRouter } from 'next/navigation'
import useStudent from '@/hooks/useStudent'
import SkeletonTable from './SkeletonTable'

const StudentsList: React.FC<{ path: string }> = ({ path }) => {
  const { students, loading, error } = useStudent()
  const router = useRouter()

  return (
    <div>
      <Header
        title='Mahasiswa'
        buttonStr='Tambah Mahasiswa'
        onClick={() => router.push('/add-student')}
      />
      {loading ? (
        <SkeletonTable />
      ) : error || students.length === 0 ? (
        <Empty title='Mahasiswa' />
      ) : (
        <div className='overflow-y-auto'>
          <Table details={students} linkStr='Lihat Proyek' path={path} />
        </div>
      )}
    </div>
  )
}
export default StudentsList
