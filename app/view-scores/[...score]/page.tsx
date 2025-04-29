'use client'

import { useRouter } from 'next/navigation'
import OverlayScore from './_components/OverlayScore'
import ScoreSummary from './_components/ScoreSummary'

const Score = () => {
  const router = useRouter()
  return (
    <div className='min-h-screen flex flex-col'>
      <OverlayScore onClose={() => router.back()} />
      <div className='flex items-end'>
        <ScoreSummary />
      </div>
    </div>
  )
}
export default Score
