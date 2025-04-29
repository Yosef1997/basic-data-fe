import { response } from '@/types/response'
import { students } from '@/types/student'
import { useEffect, useState } from 'react'

type StudentsHook = {
  response: response
  data: students[]
}

const useStudent = () => {
  const [students, setStudents] = useState<students[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | unknown>()

  const fetchStudents = async () => {
    setLoading(true)

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOSTNAME_API}/${process.env.NEXT_PUBLIC_PREFIX_API}/students`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      const result: StudentsHook = await response.json()

      setStudents(result.data)
      setLoading(false)
    } catch (error) {
      setError(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchStudents()
  }, [])

  return { students, loading, error }
}
export default useStudent
