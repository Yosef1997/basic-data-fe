import { FormValues } from '@/components/ScoreForm'
import { Button } from '@/components/ui/button'

interface ScoreAspectsInterface {
  details: FormValues[]
  onEdit: (data: FormValues) => void
  onDelete: (formName: string) => void
}

const ScoreAspects: React.FC<ScoreAspectsInterface> = ({
  details,
  onEdit,
  onDelete,
}) => {
  return (
    <div className='flex gap-x-4 px-[92px] py-24'>
      {details.map((item) => {
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

            <div className='flex gap-2 mt-6'>
              <Button
                type='button'
                className='bg-light-blue flex-1'
                onClick={() => onEdit(item)}
              >
                Edit
              </Button>
              <Button
                type='button'
                variant='destructive'
                className='flex-1'
                onClick={() => onDelete(item.formName)}
              >
                Delete
              </Button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default ScoreAspects
