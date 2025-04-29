'use client'

import { useRouter } from 'next/navigation'
import ScoreSummary from './_components/ScoreSummary'
import HeaderViewScore from './_components/HeaderViewScore'
import { use } from 'react'
import useScoreDetail from '@/hooks/useScoreDetail'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

type ScoreProps = {
  params: Promise<{ score: string[] }>
}

const Score: React.FC<ScoreProps> = ({ params }) => {
  const { score } = use(params)
  console.log(score[2])
  const router = useRouter()
  const { scoreDetail } = useScoreDetail(Number(score[2]))
  return (
    <div className='min-h-screen flex flex-col'>
      <HeaderViewScore
        onClose={() => router.back()}
        name={scoreDetail.project.studentName}
        nrp={scoreDetail.project.studentNrp}
        projectName={scoreDetail.project.projectName}
      />

      <div className='flex flex-1 justify-between'>
        <div className='p-10'>
          <div className=' flex gap-x-4'>
            {scoreDetail.parameters.map((item) => {
              return (
                <div key={item.formName}>
                  <p className='text-light-grey font-bold'>{item.formName}</p>
                  {item.fields?.map((field, index) => {
                    return (
                      <div key={index} className='flex flex-col my-4'>
                        <label className='text-light-grey font-medium'>
                          {field.name}
                        </label>
                        <input
                          className='border rounded-xs py-2 px-2'
                          type='text'
                          disabled
                          value={field.score}
                        />
                      </div>
                    )
                  })}

                  <div className='flex flex-col my-4'>
                    <label className='text-light-blue font-medium'>
                      Total Kesalahan
                    </label>
                    <input
                      className='border rounded-xs py-2 px-2'
                      type='text'
                      disabled
                      value={item.formTotal}
                    />
                  </div>
                </div>
              )
            })}
          </div>
          <div className='w-full gap-1.5 mb-4'>
            <Label>Catatan Penguji</Label>
            <Textarea
              className='border-light-grey h-48'
              value={scoreDetail.note}
              disabled
            />
          </div>
          <div className='w-full gap-1.5 mb-4'>
            <Label>Tanda Tangan Penguji</Label>
            <Textarea
              className='border-light-grey h-48'
              value={scoreDetail.sign}
              disabled
            />
          </div>
        </div>

        <ScoreSummary
          chapterWeight={scoreDetail.chapterWeight}
          totalChapterWeight={scoreDetail.chapterWeightedScore}
          grade={scoreDetail.grade}
          status={scoreDetail.status}
        />
      </div>
    </div>
  )
}
export default Score
