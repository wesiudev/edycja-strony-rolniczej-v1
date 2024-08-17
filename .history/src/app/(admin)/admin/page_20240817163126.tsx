import { Metadata } from "next";
import Link from "next/link";
import { FaUpload } from "react-icons/fa6";
export const metadata: Metadata = {
  title: "Panel administracyjny",
};
export default async function Admin() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4">
      <Link
        href="/admin/products/new"
        className="aspect-square flex flex-col items-center justify-center p-24 bg-gray-200 text-zinc-800 font-bold text-4xl"
      >
        <FaUpload />
        <div>Dodaj wpis</div>
      </Link>
      <Link
        href="/admin/products"
        className="aspect-square flex flex-col items-center justify-center p-24 bg-gray-200 text-zinc-800 font-bold text-4xl"
      >
        <FaUpload />
        <div>Wszystkie wpisy</div>
      </Link>
      <Link
        href="/admin/products/drafts"
        className="aspect-square flex flex-col items-center justify-center p-24 bg-gray-200 text-zinc-800 font-bold text-4xl"
      >
        <FaUpload />
        <div>Kopie robocze</div>
      </Link>
    </div>
  );
}