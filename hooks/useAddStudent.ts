import { students } from '@/types/student'
import { useState } from 'react'

type StudentsHook = {
  statusCode: number
  message: string
  success: boolean
  data: students
}

type AddStudentReq = {
  name: string
  nrp: string
}
const useAddStudent = () => {
  const [newStudents, setnewStudents] = useState<students>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | unknown>()

  const addStudents = async (req: AddStudentReq) => {
    setLoading(true)

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOSTNAME_API}/${process.env.NEXT_PUBLIC_PREFIX_API}/students/sign-up`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(req),
        }
      )

      const result: StudentsHook = await response.json()

      setnewStudents(result.data)
      setLoading(false)
      return result.success
    } catch (error) {
      setError(error)
    }
    setLoading(false)
  }

  return { addStudents, newStudents, loading, error }
}
export default useAddStudent
