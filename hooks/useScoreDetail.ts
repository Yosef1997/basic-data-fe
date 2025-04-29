import { emptyScoreDetail } from '@/lib/scoreDetail'
import { ScoreDetail } from '@/types/detailScore'
import { useEffect, useState } from 'react'

type response = {
  statusCode: number
  message: string
  success: boolean
  data: ScoreDetail
}
const useScoreDetail = (projectId: number) => {
  const [scoreDetail, setScoreDetail] = useState<ScoreDetail>(emptyScoreDetail)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | unknown>()

  const getScoreDetail = async (projectId: number) => {
    setLoading(true)

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOSTNAME_API}/${process.env.NEXT_PUBLIC_PREFIX_API}/scores/${projectId}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      const result: response = await response.json()

      setScoreDetail(result.data)
      setLoading(false)
    } catch (error) {
      setError(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    getScoreDetail(projectId)
  }, [projectId])

  return { scoreDetail, loading, error }
}
export default useScoreDetail
