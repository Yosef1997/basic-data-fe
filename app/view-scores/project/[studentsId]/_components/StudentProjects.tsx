import ProjectList from '@/components/ProjectList'

const StudentProjects: React.FC<{ studentNrp: string }> = ({ studentNrp }) => {
  return (
    <div className='px-[92px] py-24'>
      <ProjectList studentNrp={studentNrp} linkStr='Lihat Nilai' />
    </div>
  )
}
export default StudentProjects
