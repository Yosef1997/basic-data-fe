'use client'

import { useEffect } from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface DynamicInputFieldsProps {
  defaultFormName?: string
  defaultFields?: {
    id: number
    name: string
    score: string
  }[]
  onSubmit: (data: FormValues) => void
}

const fieldSchema = z.object({
  name: z.string().nonempty('Name is required'),
  score: z
    .string()
    .nonempty('Score is required')
    .regex(/^\d+$/, 'Score must be a number'),
})

const formSchema = z.object({
  formName: z.string().nonempty('Form name is required'),
  fields: z.array(fieldSchema).min(1, 'At least one field is required'),
})

export type FormValues = z.infer<typeof formSchema>

export default function DynamicInputFields({
  defaultFormName = '',
  defaultFields = [],
  onSubmit,
}: DynamicInputFieldsProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      formName: defaultFormName,
      fields:
        defaultFields.length > 0 ? defaultFields : [{ name: '', score: '' }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'fields',
  })

  useEffect(() => {
    form.reset({
      formName: defaultFormName,
      fields:
        defaultFields.length > 0 ? defaultFields : [{ name: '', score: '' }],
    })
  }, [defaultFormName, defaultFields, form])

  const onSubmitHandler = (data: FormValues) => {
    onSubmit(data)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmitHandler)}
        className='space-y-6 p-6'
      >
        <FormField
          control={form.control}
          name='formName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Form Name</FormLabel>
              <FormControl>
                <Input
                  placeholder='Form Name'
                  {...field}
                  className='text-2xl font-bold'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {fields.map((field, index) => (
          <div key={field.id} className='flex gap-x-4 items-end'>
            <div className='w-1/2'>
              <FormField
                control={form.control}
                name={`fields.${index}.name`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder='Name' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='w-1/2'>
              <FormField
                control={form.control}
                name={`fields.${index}.score`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Score</FormLabel>
                    <FormControl>
                      <Input placeholder='Score' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              variant='destructive'
              size='sm'
              type='button'
              onClick={() => remove(index)}
            >
              Remove
            </Button>
          </div>
        ))}

        <div className='flex gap-4'>
          <Button type='button' onClick={() => append({ name: '', score: '' })}>
            Add Field
          </Button>
          <Button type='submit' variant='secondary'>
            Submit
          </Button>
        </div>
      </form>
    </Form>
  )
}
