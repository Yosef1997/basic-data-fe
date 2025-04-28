import ProjectList from '@/components/ProjectList'

const StudentProjects: React.FC<{ studentNrp: string }> = ({ studentNrp }) => {
  return (
    <div className='px-[92px] py-24'>
      <ProjectList
        studentNrp={studentNrp}
        linkStr='Masukkan Nilai'
        path={`/enter-score/${studentNrp}/project-score`}
      />
    </div>
  )
}
export default StudentProjects
