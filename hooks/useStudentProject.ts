import { response } from '@/types/response'
import { studentProjects } from '@/types/studentProjects'
import { useEffect, useState } from 'react'

type StudentsHook = {
  response: response
  data: studentProjects[]
}

const useStudentProject = (nrp: number) => {
  const [studentProjects, setStudentProjects] = useState<studentProjects[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | unknown>()

  const getStudentProjects = async (nrp: number) => {
    setLoading(true)

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOSTNAME_API}/${process.env.NEXT_PUBLIC_PREFIX_API}/projects/${nrp}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      const result: StudentsHook = await response.json()

      setStudentProjects(result.data)
      setLoading(false)
    } catch (error) {
      setError(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    getStudentProjects(nrp)
  }, [nrp])

  return { studentProjects, loading, error }
}
export default useStudentProject
