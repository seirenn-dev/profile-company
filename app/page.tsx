import Image from "next/image";
import { MenuLandingPage } from "./component/landing-page-menu/page";

export default function Home() {
  return (
    <main className="flex flex-1 w-full min-h-screen bg-white dark:bg-black">
      <div className="w-full h-[80px] bg-blue-800 dark:bg-blue-800 rounded-[70px] flex items-center justify-between px-10 mt-4 mx-8">
        {/* Sisi Kiri: Logo */}
        <div className="relative w-[230px] h-[50px]">
          <Image
            src="/img/smk_mvp_ars_logo_white.png"
            alt="Logo"
            fill
            className="object-contain object-left"
          />
        </div>

        {/* Sisi Tengah: Menu (Sudah diperbaiki typo justify-center) */}
        <div className="flex flex-1 items-center justify-center">
          <MenuLandingPage />
        </div>

        {/* Sisi Kanan: Penyeimbang agar menu pas di tengah presisi */}
        <div className="w-[230px]" />
      </div>
    </main>
  );
}
