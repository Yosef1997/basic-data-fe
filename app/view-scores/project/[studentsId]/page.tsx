// import { Metadata } from 'next'
import StudentProjects from './_components/StudentProjects'
// import { response } from '@/types/response'
// import { studentProjects } from '@/types/studentProjects'

type Props = {
  params: {
    studentNrp: string
  }
}

// interface ProjectsInterface {
//   result: response
//   data: studentProjects
// }

// export const generateMetadata = async ({
//   params,
// }: Props): Promise<Metadata> => {
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_HOSTNAME_API}/${process.env.NEXT_PUBLIC_PREFIX_API}/project/${params.studentNrp}`
//   )

//   if (!response.ok) {
//     return {
//       title: `${params.studentNrp}`,
//     }
//   }

//   const result: ProjectsInterface = await response.json()
//   return {
//     title: `${result?.data!.studentName}`,
//   }
// }

const Projects: React.FC<Props> = ({ params }) => {
  return <StudentProjects studentNrp={params.studentNrp} />
}
export default Projects
