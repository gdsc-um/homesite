import Link from "next/link";

export default function Profile() {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="w-full py-28 flex flex-col justify-center items-center bg-[#E8F5E9] gap-3">
        <h1 className="text-coreBlue-primary font-bold text-6xl">
          Tentang GDSC Universitas Negeri Malang
        </h1>
        <p className="text-[#4D4D4D] font-normal text-2xl px-32 mt-4 text-justify">
          Google Developer Student Clubs (GDSC) adalah komunitas pengembang
          berbasis universitas yang diinisiasi oleh Google. Komunitas ini
          menyediakan lingkungan belajar sesama rekan bagi mahasiswa yang
          tertarik dengan teknologi, mahasiswa dari jurusan apa pun dipersilakan
          untuk bergabung sebagai member. Mulai tahun 2022, GDSC dengan bangga
          hadir di Universitas Negeri Malang dengan nama Google Developer
          Student Clubs Universitas Negeri Malang (GDSC UM). GDSC UM hadir untuk
          menampung, mengembangkan, serta menyalurkan bakat dan minat Mahasiswa
          Universitas Negeri Malang di bidang pengembangan teknologi. Dalam
          melaksanakan misi tersebut, GDSC UM memiliki pengurus yang disebut
          Core Team.
        </p>
      </div>
      <div className="w-full py-28 flex flex-col justify-center items-center gap-3">
        <h1 className="text-black text-4xl">Struktur GDSC UM</h1>
      </div>
      <div className="w-full py-28 flex flex-col justify-center items-center gap-3">
        <h1 className="text-black text-4xl">Halaman bevy Kami</h1>
        <Link
          className="mt-2 text-coreBlue-primary font-bold text-2xl hover:underline hover:text-coreBlue-500"
          href="https://gdsc.community.dev/universitas-negeri-malang/"
        >
          https://gdsc.community.dev/universitas-negeri-malang/
        </Link>
      </div>
    </div>
  );
}
