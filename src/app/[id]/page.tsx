import MainLayout from '@/components/layouts/MainLayout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { shortCutData } from '@/lib/statics/homepage'
import { HomeShortCutType } from '@/lib/types'
import { IDRFormat } from '@/lib/utils'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React, { Suspense } from 'react'

export default async function DetailPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const check = shortCutData.find((val: HomeShortCutType, i: number) => (val.url == id)) ?? null;
  if (check == null) {
    return notFound();
  }
  const data = await dummy(id);
  return (
    <MainLayout>
      <Link href='/' className='flex items-center gap-2 text-lg font-semibold py-8'>
        <ArrowLeftIcon width={20} height={20} /> Kembali
      </Link>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-3">
          <div className='relative overflow-hidden rounded-md max-h-[25rem]'>
            <Image src={check.img} width={0} height={0} className="w-full h-full object-cover" alt="ml" unoptimized />
            <div
              className={`absolute left-0 bottom-0 w-full bg-gradient-to-b from-transparent h-44 to-black z-10`}
            />
          </div>
        </div>
        <div className="col-span-9 flex flex-col">
          <h1 className='text-3xl font-bold'>{check.title}</h1>
          <span className='text-sm font-light'>Silahkan isi form dibawah ini</span>
          <form action="#" className='flex flex-col gap-2 py-4 items-baseline'>
            <div className="flex flex-col gap-1">
              <label htmlFor="id-game">Masukan ID Game</label>
              <Input type="text" placeholder="Ex: 12345" />
            </div>
            <span>Pilih jumlah Diamond</span>
            <Suspense fallback={<div>Loading...</div>}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {data.data.map((val: any, i: number) => (
                  <div key={i} className='flex flex-col rounded-md border p-2 cursor-pointer hover:bg-primary hover:text-background'>
                    <span className='text-xs'>{val.name}</span>
                    <span className='text-sm'>{IDRFormat(val.price as number)}</span>
                  </div>
                ))}
              </div>
            </Suspense>
            <Button size={'lg'}>
              Bayar
            </Button>
          </form>
        </div>
      </div>
    </MainLayout>
  )
}

async function dummy(id: string) {
  const req = await fetch(process.env.NEXT_PUBLIC_FRONTEND_URL + '/dummy/mobile-legends.json');
  const data = await req.json();
  return data;
}