interface ScoreSummaryInterface {
  chapterWeight: number
  totalChapterWeight: number
  grade: string
  status: string
}

const ScoreSummary: React.FC<ScoreSummaryInterface> = ({
  chapterWeight,
  totalChapterWeight,
  grade,
  status,
}) => {
  return (
    <div className='bg-light-blue p-6'>
      <p className='text-white font-bold'>Nilai</p>
      <div className='flex flex-col justify-between   text-white'>
        <div className='flex flex-col gap-y-2'>
          <label className=' font-medium'>Bobot Chapter</label>
          <input
            className='border rounded-xs py-2 px-2'
            type='text'
            disabled
            value={chapterWeight}
          />
          <label className=' font-medium'>Nilai Bobot Chapter</label>
          <input
            className='border rounded-xs py-2 px-2'
            type='text'
            disabled
            value={totalChapterWeight}
          />
          <label className=' font-medium'>Predikat</label>
          <input
            className='border rounded-xs py-2 px-2'
            type='text'
            disabled
            value={grade}
          />
        </div>
        <div className='flex flex-col mt-20'>
          <label className=' font-medium'>Status</label>
          <input
            className='border rounded-xs py-2 px-2'
            type='text'
            disabled
            value={status}
          />
        </div>
      </div>
    </div>
  )
}
export default ScoreSummary
