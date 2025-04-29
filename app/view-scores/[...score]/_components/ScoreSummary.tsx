import { Parameter } from '@/types/parameter'

interface ScoreSummaryInterface {
  details: Parameter[]
}

const ScoreSummary: React.FC<ScoreSummaryInterface> = ({ details }) => {
  return (
    <div className='bg-light-blue'>
      <p className='text-white font-bold'>Nilai</p>
      <div>
        <label className='text-light-grey font-medium'>Bobot Chapter</label>
        <input className='border rounded-xs py-2 px-2' type='text' disabled />
        <label className='text-light-grey font-medium'>
          Nilai Bobot Chapter
        </label>
        <input className='border rounded-xs py-2 px-2' type='text' disabled />
      </div>
    </div>
  )
}
export default ScoreSummary
