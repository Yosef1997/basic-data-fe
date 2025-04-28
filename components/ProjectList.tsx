'use client'
import { useState } from 'react'
import Empty from './Empty'
import Header from './Header'
import Table from './Table'
import { studentProjects } from '@/types/studentProjects'
import { projectDetail } from '@/lib/project'
import { useRouter } from 'next/navigation'

interface ProjectListInterface {
  studentNrp: string
  linkStr: string
  path: string
}

const ProjectList: React.FC<ProjectListInterface> = ({
  studentNrp,
  linkStr,
  path,
}) => {
  const router = useRouter()
  const [data, setData] = useState<studentProjects>(projectDetail)
  return (
    <div>
      <Header
        title='Proyek'
        buttonStr='Tambah Proyek'
        name={data.studentName}
        nrp={data.studentNrp}
        onClick={() => router.push('/add-project')}
      />
      {data.projects.length === 0 ? (
        <Empty title='Proyek' />
      ) : (
        <Table details={data.projects} linkStr={linkStr} path={path} />
      )}
    </div>
  )
}
export default ProjectList
