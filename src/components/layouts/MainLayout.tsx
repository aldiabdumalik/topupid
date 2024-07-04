'use client'
import { cn } from '@/lib/utils';
import React, { HTMLProps, ReactNode } from 'react';

interface MainProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
}
export default function MainLayout(props: MainProps) {
  const { className, children } = props;
  return <main className={cn('flex flex-col flex-1 justify-center px-2 lg:px-24', className)}>{children}</main>;
}
