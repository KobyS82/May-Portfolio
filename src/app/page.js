import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-900">
      <div className="mb-32 grid text-center text-3xl lg:mb-0">
        <div className='font-mono'>
          Hello,
          My name is
        </div>
        <div className='font-anton font-bold'>
          Koby Sillito
        </div>
      </div>
    </main>
  )
}
