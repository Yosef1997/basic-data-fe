'use client'
import Empty from './Empty'
import Header from './Header'
import Table from './Table'
import { useRouter } from 'next/navigation'
import useStudentProject from '@/hooks/useStudentProject'
import SkeletonTable from './SkeletonTable'
import useStudentDetail from '@/hooks/useStudentDetail'

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
  const { studentDetail } = useStudentDetail(Number(studentNrp))
  const { studentProjects, loading, error } = useStudentProject(
    Number(studentNrp)
  )
  console.log(studentProjects)
  return (
    <div>
      <Header
        title='Proyek'
        buttonStr='Tambah Proyek'
        name={studentDetail.name}
        nrp={studentDetail.nrp}
        onClick={() => router.push(`/add-project/${studentNrp}`)}
      />
      {loading ? (
        <SkeletonTable />
      ) : error || studentProjects.length === 0 ? (
        <Empty title='Proyek' />
      ) : (
        <Table details={studentProjects} linkStr={linkStr} path={path} />
      )}
    </div>
  )
}
export default ProjectList
