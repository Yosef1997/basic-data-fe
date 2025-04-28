import Image from 'next/image'

interface EmptyInterface {
  title: string
}
const Empty: React.FC<EmptyInterface> = ({ title }) => {
  return (
    <div className='flex flex-col bg-medium-grey items-center mt-[94px] mx-9 pb-[85px]'>
      <Image
        src='https://res.cloudinary.com/dhbg53ncx/image/upload/v1745768544/on0hhbwgbt24h5ups5hs.png'
        alt='profile image'
        width={340}
        height={255}
        priority
      />
      <p className='text-[28px] text-light-grey font-semibold mt-[31px]'>
        Belum ada {title.toLowerCase()}.
      </p>
      <p className='text-[14px] text-light-grey font-medium'>
        {title} akan muncul di sini setelah ditambahkan
      </p>
    </div>
  )
}
export default Empty
