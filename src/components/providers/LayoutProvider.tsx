'use client'
import React, { Fragment } from 'react'
import Navbar from '../layouts/navbar/Navbar';
import Footer from '../layouts/Footer';

export default function LayoutProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </Fragment>
  )
}
