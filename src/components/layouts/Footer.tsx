'use client';
import { InstagramLogoIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  const handleContactFooter = () => {
    return window.open(
      `https://api.whatsapp.com/send?phone=6288219653153&text=Halo saya sedang berkunjung ke website info lelang BRI, ada beberapa pertanyaan yang ingin saya ajukan terkait informasi agunan. Bersediakah anda meluangkan waktu untuk berkomunikasi dengan saya ?`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <footer className='relative flex flex-col lg:flex-row w-full bg-primary px-4 2lg:px-6 xl:px-12 py-4 lg:py-6 gap-2.5 lg:gap-12'>
      <div className='flex flex-col w-full lg:w-1/4 gap-1'>
        <Link href={'/'} rel='noopener noreferrer' className='-mt-2'>
          <span className='text-3xl font-bold text-background'>
            Uptopup
          </span>
        </Link>
        <span className='text-sm text-background text-justify'>
          Kami adalah platform terpercaya yang menyediakan layanan top-up untuk berbagai game populer di Indonesia dan internasional. Kami hadir untuk memenuhi semua kebutuhan top-up game Anda dengan layanan yang cepat, aman, dan mudah.
        </span>
      </div>
      <div className="flex w-full lg:w-1/4 gap-8">
        <div className="flex flex-col flex-1 gap-2">
          <span className='text-lg text-background font-bold'>Hubungi Kami</span>
          <div className="flex flex-col gap-1">
            <span className='text-background text-sm'>WhatsApp</span>
            <span className='text-background text-sm'>Email</span>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <span className='text-lg text-background font-bold'>Tautan</span>
          <div className="flex flex-col gap-1">
            <span className='text-background text-sm'>News</span>
            <span className='text-background text-sm'>Kebijakan Privasi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;