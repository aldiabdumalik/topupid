'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Hamburger() {
  const [isOpen, setOpen] = useState(false);
  return (
    <Button variant={'link'} onClick={() => setOpen(!isOpen)} className='lg:hidden flex flex-col justify-center items-center'>
      <span
        className={`bg-background transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'
          }`}></span>
      <span
        className={`bg-background transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-1 ${isOpen ? 'opacity-0' : 'opacity-100'
          }`}></span>
      <span
        className={`bg-background transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'
          }`}></span>
    </Button>
  );
}
