'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../../ui/button'
import MenuItem from './MenuItem'
import Hamburger from './Hamburger'
import { useRecoilState } from 'recoil'
import { modalLogin } from '@/lib/store/modals'

export default function Navbar() {
  const [isOpen, setOpen] = useRecoilState(modalLogin);
  return (
    <nav className='relative flex w-full items-center justify-between px-2 lg:px-24 py-1 lg:py-1.5 bg-primary'>
      <div className='flex flex-1 items-center justify-between lg:justify-start lg:gap-4'>
        <Link href={'/'}>
          <h1 className='text-2xl font-bold text-background'>topupid</h1>
        </Link>
        <div className="hidden lg:block items-center">
          <MenuItem />
        </div>
        <Hamburger />
      </div>
    </nav>
  )
}