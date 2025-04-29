import { response } from '@/types/response'
import { students } from '@/types/student'
import { useEffect, useState } from 'react'

type StudentsHook = {
  response: response
  data: students
}

const useStudentDetail = (nrp: number) => {
  const [studentDetail, setStudentDetail] = useState<students>({
    id: 0,
    name: '',
    nrp: Number(''),
  })
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | unknown>()

  const getStudentDetail = async (nrp: number) => {
    setLoading(true)

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOSTNAME_API}/${process.env.NEXT_PUBLIC_PREFIX_API}/students/${nrp}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      const result: StudentsHook = await response.json()

      setStudentDetail(result.data)
      setLoading(false)
    } catch (error) {
      setError(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    getStudentDetail(nrp)
  }, [nrp])

  return { studentDetail, loading, error }
}
export default useStudentDetail
