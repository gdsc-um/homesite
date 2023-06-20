import MaitenanceImage from "@/assets/maitenance.svg";
import Image from "next/image";

export default function Maitenance() {
  return (
    <div className="w-full flex flex-col justify-center items-center px-5 bg-white space-y-4">
      <Image src={MaitenanceImage} alt="Maitenance" className=""/>
      <p className="text-5xl font-semibold text-coreBlue-primary">
        Oops.. Tidak ada konten
      </p>
      <p className="text-xl text-gray-900">
        Bagian ini masih dalam tahap pengembangan
      </p>
    </div>
  );
}
