import MainLayout from "@/components/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { shortCutData } from "@/lib/statics/homepage";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-2 w-full items-baseline">
        <h1 className="text-3xl font-bold">topupid</h1>
        <p className="text-sm w-1/2 font-light">
          Kami adalah platform terpercaya yang menyediakan layanan top-up untuk berbagai game populer di Indonesia dan internasional. Kami hadir untuk memenuhi semua kebutuhan top-up game Anda dengan layanan yang cepat, aman, dan mudah.
        </p>
        <div className="flex flex-col py-2 items-baseline gap-4">
          <Button variant={'outline'} className="">
            Pilih Game
          </Button>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">
            {shortCutData.map((val: any, i: number) => (
              <Link key={i} href={val.url} className="relative flex flex-col rounded-md w-40 overflow-hidden">
                <Image src={val.img} width={0} height={0} className="w-full h-full object-cover" alt="ml" unoptimized />
                <div
                  className={`absolute left-0 bottom-0 w-full bg-gradient-to-b from-transparent h-24 to-black z-10`}
                />
                <div className="absolute bottom-0 left-0 text-background z-10 p-2">
                  <h2 className="text-sm font-semibold">{val.title}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
