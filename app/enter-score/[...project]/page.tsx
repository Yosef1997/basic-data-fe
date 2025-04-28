'use client'
import Header from '@/components/Header'
import { use, useState } from 'react'
import Overlay from './_components/Overlay'
import Empty from '@/components/Empty'
import ScoreAspects from './_components/ScoreAspects'
import { FormValues } from '@/components/ScoreForm'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

const EMPTY_FORMDATA = {
  formName: '',
  fields: [],
}

type ProjectScoreProps = {
  params: Promise<{ project: string[] }>
}

const ProjectScore: React.FC<ProjectScoreProps> = ({ params }) => {
  const { project } = use(params)
  const nrp = project[0]
  const [openParameter, setOpenParameter] = useState(false)
  const [formDataList, setFormDataList] = useState<FormValues[]>([])
  const [formData, setFormData] = useState<FormValues>(EMPTY_FORMDATA)
  const [note, setNote] = useState<string>('')
  const [sign, setSign] = useState<string>('')

  const mapFieldsWithId = (fields: { name: string; score: string }[]) => {
    return fields.map((field, index) => ({
      id: index,
      ...field,
    }))
  }

  const handleFormSubmit = (data: FormValues) => {
    if (formData.formName !== '') {
      // Edit mode
      setFormDataList((prevFormDataList) =>
        prevFormDataList.map((item) =>
          item.formName === formData.formName ? data : item
        )
      )
    } else {
      // Add mode
      setFormDataList((prevFormDataList) => [...prevFormDataList, data])
    }

    setFormData(EMPTY_FORMDATA)
    setOpenParameter(false)
  }

  const handleEditForm = (data: FormValues) => {
    setFormData(data)
    setOpenParameter(true)
  }

  const handleDeleteForm = (formName: string) => {
    setFormDataList((prevFormDataList) =>
      prevFormDataList.filter((form) => form.formName !== formName)
    )
  }

  return (
    <div className='min-h-screen flex flex-col'>
      <div className='bg-light-blue px-[92px] py-24'>
        <Header
          title={'Nilai Proyek'}
          buttonStr={'Tambah Parameter'}
          name='Nama Mahasiswa'
          nrp={nrp}
          textColor='text-white'
          onClick={() => setOpenParameter(true)}
        />
      </div>
      {openParameter && (
        <Overlay
          defaultFormName={formData?.formName}
          defaultFields={mapFieldsWithId(formData!.fields)}
          onClose={() => setOpenParameter(false)}
          onSubmit={handleFormSubmit}
        />
      )}
      <div className='flex flex-1'>
        <div className='w-3/4'>
          {formDataList.length === 0 ? (
            <Empty title='Parameter' />
          ) : (
            <ScoreAspects
              details={formDataList}
              onEdit={handleEditForm}
              onDelete={handleDeleteForm}
            />
          )}
        </div>

        <div className='bg-[#EAEAEA] w-1/4 px-[38px] pt-10 flex flex-col items-center'>
          <div className='grid w-full gap-1.5 mb-4'>
            <Label>Catatan Penguji</Label>
            <Textarea
              className='border-light-grey h-48'
              value={note}
              onChange={(event) => setNote(event.target.value)}
            />
          </div>
          <div className='grid w-full gap-1.5 mb-4'>
            <Label>Tanda Tangan Penguji</Label>
            <Textarea
              className='border-light-grey h-48'
              value={sign}
              onChange={(event) => setSign(event.target.value)}
            />
          </div>
          <Button className='bg-light-grey p-3' type='button'>
            Masukkan Data
          </Button>
        </div>
      </div>
    </div>
  )
}
export default ProjectScore
