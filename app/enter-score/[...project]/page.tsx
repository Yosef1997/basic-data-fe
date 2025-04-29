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
import useAddScore from '@/hooks/useAddScore'
import useStudentDetail from '@/hooks/useStudentDetail'
import { useRouter } from 'next/navigation'

const EMPTY_FORMDATA = {
  formName: '',
  fields: [],
}

type ProjectScoreProps = {
  params: Promise<{ project: string[] }>
}

const ProjectScore: React.FC<ProjectScoreProps> = ({ params }) => {
  const { project } = use(params)
  const [openParameter, setOpenParameter] = useState(false)
  const [formDataList, setFormDataList] = useState<FormValues[]>([])
  const [formData, setFormData] = useState<FormValues>(EMPTY_FORMDATA)
  const [note, setNote] = useState<string>('')
  const [sign, setSign] = useState<string>('')
  const { addScore, loading } = useAddScore()
  const router = useRouter()
  const { studentDetail } = useStudentDetail(Number(project[0]))

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

  const handleSubmit = async () => {
    const request = {
      projectId: project[2],
      note: note,
      sign: sign,
      parameters: formDataList,
    }
    console.log(request)
    try {
      const result = await addScore(request)
      if (result) {
        alert('Masukan nilai berhasil')
        router.back()
      }
    } catch (e) {
      console.log(e)
      alert(e)
    }
  }

  return (
    <div className='min-h-screen flex flex-col'>
      <div className='bg-light-blue px-[92px] py-24'>
        <Header
          title={'Nilai Proyek'}
          buttonStr={'Tambah Parameter'}
          name={studentDetail.name}
          nrp={studentDetail.nrp}
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
          <Button
            onClick={handleSubmit}
            disabled={loading}
            className='bg-light-grey p-3'
            type='button'
          >
            Masukkan Data
          </Button>
        </div>
      </div>
    </div>
  )
}
export default ProjectScore
