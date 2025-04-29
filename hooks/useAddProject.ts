import { project } from '@/types/project'
import { useState } from 'react'

type StudentsHook = {
  statusCode: number
  message: string
  success: boolean
  data: project
}

type AddProductReq = {
  projectName: string
  studentNrp: number
}

const useAddProject = () => {
  const [project, setProject] = useState<project>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | unknown>()

  const addProject = async (req: AddProductReq) => {
    setLoading(true)

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOSTNAME_API}/${process.env.NEXT_PUBLIC_PREFIX_API}/projects`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(req),
        }
      )

      const result: StudentsHook = await response.json()

      setProject(result.data)
      setLoading(false)
      return result.success
    } catch (error) {
      setError(error)
    }
    setLoading(false)
  }

  return { addProject, project, loading, error }
}
export default useAddProject
