'use client';
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { navigations } from '@/lib/statics/navigation';
import { NavigationType } from '@/lib/types';
import { ChevronDownIcon } from '@radix-ui/react-icons';

export default function MenuItem() {
  return navigations.map((nav: NavigationType, i: Number) => {
    return nav?.child ? (
      <DropdownMenu key={`nav-${i}`}>
        <DropdownMenuTrigger asChild>
          <Button
            variant={'ghost'}
            className='text-background hover:bg-transparent hover:text-background/90'>
            {nav.title} <ChevronDownIcon className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='rounded-none'>
          {nav.child.map((sub: NavigationType, k: Number) => (
            <DropdownMenuItem key={`nav-${k}`} className='rounded-none p-0'>
              <Button
                variant={'ghost'}
                className='rounded-none px-1.5 justify-start w-full cursor-pointer font-normal hover:outline-none hover:border-none'
                asChild>
                <Link href='/login'>{sub.title}</Link>
              </Button>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    ) : (
      <Button
        key={`nav-${i}`}
        variant={'ghost'}
        className='text-background hover:bg-transparent hover:text-background/90'
        asChild>
        <Link href={nav.link}>{nav.title}</Link>
      </Button>
    )
  });
}
