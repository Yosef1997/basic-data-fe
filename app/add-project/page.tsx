'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'

const AddProjectSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Nama proyek harus memiliki minimal 2 huruf' })
    .max(50),
})
const AddProject = () => {
  const router = useRouter()
  const form = useForm<z.infer<typeof AddProjectSchema>>({
    resolver: zodResolver(AddProjectSchema),
    defaultValues: {
      name: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof AddProjectSchema>) => {
    console.log(values)
  }
  return (
    <div className='bg-black/40 fixed inset-0 flex items-center justify-center'>
      <div className='bg-white w-1/2 h-1/2'>
        <div className='relative bg-dark-blue text-[38px] text-white font-semibold py-10 text-center'>
          Tambah Proyek
          <div className='absolute top-[25px] right-[33px]'>
            <div
              onClick={() => router.back()}
              title='Close Menu Dialog'
              className=' text-white text-base'
            >
              <X />
            </div>
          </div>
        </div>
        <div className='py-[50px]'>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='space-y-8 flex flex-col w-full items-center'
            >
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Nama Proyek <span className='text-red-500'>*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder='Nama mahasiswa' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button className='bg-light-blue' type='submit'>
                Input Data
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}
export default AddProject
