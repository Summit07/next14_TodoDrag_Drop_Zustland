import Columns from '@/components/columns'


export default function Home() {
  return (
    <section className='flex min-h-screen bg-gradient-to-br from-gray-700/80 to-gray-900/70 py-12 text-white'>

      <div className='mx-auto w-full max-w-7xl px-6'>
        <div className='flex items-center justify-center'>
          <h1 className='text-3xl  font-extrabold bg-clip-text text-transparent bg-gradient-to-tr  from-indigo-500 from-12% via-sky-500 via-33% to-emerald-500 to-70%'> Drag & Drop Todo</h1>
        </div>
        <Columns />
      </div>
    </section>
  )
}
