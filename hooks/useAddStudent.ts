import { response } from '@/types/response'
import { students } from '@/types/student'
import { useState } from 'react'

type StudentsHook = {
  response: response
  data: students
}
const useAddStudent = () => {
  const [newStudents, setnewStudents] = useState<students>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | unknown>()

  const addStudents = async (name: string) => {
    setLoading(true)

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOSTNAME_API}/${process.env.NEXT_PUBLIC_PREFIX_API}/students/sign-up`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
          }),
        }
      )

      const result: StudentsHook = await response.json()

      setnewStudents(result.data)
      setLoading(false)
    } catch (error) {
      setError(error)
    }
    setLoading(false)
  }

  return { addStudents, newStudents, loading, error }
}
export default useAddStudent
