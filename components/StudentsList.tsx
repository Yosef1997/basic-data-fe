'use client'
import { mahasiswa } from '@/lib/students'
import { students } from '@/types/student'
import { useEffect, useState } from 'react'
import Header from './Header'
import Empty from './Empty'
import Table from './Table'
import { useRouter } from 'next/navigation'

const StudentsList: React.FC<{ path: string }> = ({ path }) => {
  const [students, setStudents] = useState<students[]>([])
  const router = useRouter()
  useEffect(() => {
    setStudents(mahasiswa)
  }, [])
  return (
    <div>
      <Header
        title='Mahasiswa'
        buttonStr='Tambah Mahasiswa'
        onClick={() => router.push('/add-student')}
      />
      {students.length === 0 ? (
        <Empty title='Mahasiswa' />
      ) : (
        <Table details={students} linkStr='Lihat Proyek' path={path} />
      )}
    </div>
  )
}
export default StudentsList
