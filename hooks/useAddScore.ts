import { ProjectEvaluation } from '@/types/AddScore'
import { useState } from 'react'

type response = {
  statusCode: number
  message: string
  success: boolean
}

const useAddScore = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | unknown>()

  const addScore = async (req: ProjectEvaluation) => {
    setLoading(true)

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOSTNAME_API}/${process.env.NEXT_PUBLIC_PREFIX_API}/scores`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(req),
        }
      )

      const result: response = await response.json()

      setLoading(false)
      return result.success
    } catch (error) {
      setError(error)
    }
    setLoading(false)
  }

  return { addScore, loading, error }
}
export default useAddScore
