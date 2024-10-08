import { getProductByUrl, getProducts } from "@/firebase";
import { renderMarkdown } from "../../../lib/parseMarkdown";
import Image from "next/image";
import { FaImage } from "react-icons/fa";
import Regions from "@/components/Regions";
import Pause from "@/components/Pause";
import Link from "next/link";
import { FaArrowRightLong, FaFacebook } from "react-icons/fa6";
export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product: any) => ({
    slug: product.url,
  }));
}
export const revalidate = 30;
export default async function Page({ params }: { params: any }) {
  const product: any = await getProductByUrl(params.slug);
  const products: any = await getProducts();

  return (
    <div className="overflow-x-hidden">
      <Regions />
      <div className="px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32 pt-12 pb-24 bg-white">
        <div className="flex flex-row mb-12 text-zinc-800 text-lg flex-wrap items-center">
          <Link
            href="/"
            className="hover:underline text-sm md:text-base lg:text-lg xl:text-xl w-max"
          >
            strona główna
          </Link>{" "}
          <div className="mx-2 text-sm md:text-base lg:text-lg xl:text-xl">
            <FaArrowRightLong className="text-red-500" />
          </div>{" "}
          <Link
            href="/aktualnosci"
            className="hover:underline text-sm md:text-base lg:text-lg xl:text-xl w-max"
          >
            aktualności
          </Link>{" "}
          <div className="flex items-center text-sm md:text-base lg:text-lg xl:text-xl w-max">
            <FaArrowRightLong className="mx-2 text-red-500" />
            {product?.url}
          </div>
        </div>
        <div className="w-max">
          <Link href="/" className=" bg-red-500">
            <Image
              src="/assets/logo.jpg"
              width={420}
              height={420}
              alt="ZZRPWiS Logo"
              className="w-[250px] mb-12"
              style={{ boxShadow: "0px 0px 5px #000000" }}
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 mx-auto">
          <div className="flex flex-col">
            {/* LG TITLE VISIBLE */}
            {product?.title && (
              <h1
                style={{ lineHeight: 1.15 }}
                className="text-2xl sm:text-5xl font-extrabold text-left mb-6 drop-shadow-xl shadow-black text-zinc-800"
              >
                {product?.title}
              </h1>
            )}
            {product?.shortDesc && (
              <div
                style={{ boxShadow: "0px 0px 5px #000000" }}
                className="bg-gray-600 p-3 text-white text-lg lg:text-xl !font-gotham"
                dangerouslySetInnerHTML={renderMarkdown(product?.shortDesc)}
              />
            )}
            {!product.primaryImage && (
              <div className="bg-gray-300 hover:bg-opacity-80 duration-300 flex items-center justify-center rounded-3xl w-full aspect-square mt-6 lg:hidden text-7xl text-gray-500">
                <FaImage />
              </div>
            )}
            {product?.primaryImage !== "" && (
              <Image
                src={product?.primaryImage}
                width={1024}
                height={1024}
                alt={`Obraz ${product.title}`}
                className="w-full h-auto mt-6 lg:hidden"
                style={{ boxShadow: "0px 0px 5px #000000" }}
              />
            )}
            {product?.text1Title && (
              <h2 className="text-3xl font-bold mt-12 mb-4 drop-shadow-xl shadow-black text-zinc-800 ">
                {product?.text1Title}
              </h2>
            )}
            {product?.text1Desc && (
              <div
                className="text-gray-700 font-light text-lg !bg-white"
                dangerouslySetInnerHTML={renderMarkdown(product?.text1Desc)}
              />
            )}
            {product?.text2Title && (
              <h2 className="text-3xl font-bold mt-6 drop-shadow-xl shadow-black text-zinc-800 mb-4">
                {product?.text2Title}
              </h2>
            )}
            {product?.text2Desc && (
              <div
                className="text-gray-700 font-light text-lg"
                dangerouslySetInnerHTML={renderMarkdown(product?.text2Desc)}
              />
            )}
          </div>
          <div className="flex flex-col">
            {!product.primaryImage && (
              <div className="bg-gray-300 hover:bg-opacity-80 duration-300 items-center justify-center rounded-3xl w-full aspect-square hidden lg:flex text-7xl text-gray-500">
                <FaImage />
              </div>
            )}
            {product?.primaryImage !== "" && (
              <Image
                src={product?.primaryImage}
                width={1024}
                height={1024}
                alt={`Obraz ${product.title}`}
                className="w-full h-auto hidden lg:block"
                style={{ boxShadow: "0px 0px 5px #000000" }}
              />
            )}
            {product?.text3Title && (
              <h2 className="text-3xl font-bold mt-6 lg:mt-12 drop-shadow-xl shadow-black text-zinc-800 mb-4">
                {product?.text3Title}
              </h2>
            )}
            {product?.text3Desc && (
              <div
                className="text-gray-700 font-light text-lg"
                dangerouslySetInnerHTML={renderMarkdown(product?.text3Desc)}
              />
            )}
          </div>
        </div>
      </div>
      <div style={{ boxShadow: "0px 0px 5px #000000" }} className="w-full">
        <Pause />
      </div>
      <div className="w-full px-4 2xl:px-12 py-24 bg-gray-200">
        <h2 className="text-3xl sm:text-5xl mb-6 text-zinc-800 drop-shadow-xl shadow-black font-bold text-center">
          NASZE WSPÓŁPRACE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            target="_blank"
            title="Dofinansowanie na remont domu"
            href="https://hexon.work/"
            className="flex flex-col mt-6 text-zinc-500 p-4 hover:bg-zinc-300 duration-100 group items-center justify-center border border-gray-400"
          >
            <Image
              src="/assets/logo-hexon2.png"
              width={420}
              height={420}
              alt="Dofinansowanie na remont domu Hexon"
              className="w-[220px] sm:w-[270px] lg:w-[320px] mx-auto md:mx-0"
            />
            <div className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mt-3 italic text-center">
              Dofinansowanie na remont domu do <br /> <b>136,000.00 PLN</b>
            </div>
          </Link>
          <Link
            target="_blank"
            title="Optymalizacja kosztów prądu dla firm"
            href="https://redrayenergy.com/"
            className="flex flex-col mt-6 text-zinc-500 p-4 hover:bg-zinc-300 duration-100 group items-center justify-center border border-gray-400"
          >
            <Image
              src="/assets/rre-logo.png"
              width={420}
              height={420}
              alt="Optymalizacja kosztów prądu dla firm"
              className="w-[220px] sm:w-[270px] lg:w-[320px] mx-auto md:mx-0"
            />
            <div className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mt-3 italic text-center">
              Optymalizacja kosztów prądu dla firm
            </div>
          </Link>
        </div>
      </div>
      <div className="bg-white pb-12">
        {product?.secondaryImage !== "" &&
          product?.text4Title !== "" &&
          product?.text4Desc !== "" && (
            <div className="pt-24 grid grid-cols-1 lg:grid-cols-2 px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32 gap-12">
              <div className="relative w-full">
                {!product.secondaryImage && (
                  <div
                    style={{ boxShadow: "0px 0px 5px #000000" }}
                    className="bg-gray-300 hover:bg-opacity-80 duration-300 items-center justify-center rounded-3xl w-full aspect-square flex text-7xl text-gray-500"
                  >
                    <FaImage />
                  </div>
                )}
                {product?.secondaryImage !== "" && (
                  <Image
                    style={{ boxShadow: "0px 0px 5px #000000" }}
                    src={product?.secondaryImage}
                    width={1024}
                    height={1024}
                    alt={`ZZRPWIS ${product?.title}`}
                    className="w-full h-auto"
                  />
                )}
              </div>
              <div className="flex flex-col">
                <h2 className="text-3xl text-left font-bold  drop-shadow-xl shadow-black text-zinc-800">
                  {product?.text4Title}
                </h2>
                <div
                  className="text-gray-700 font-light text-lg mt-4"
                  dangerouslySetInnerHTML={renderMarkdown(product?.text4Desc)}
                />
              </div>
            </div>
          )}
      </div>
      <div style={{ boxShadow: "0px 0px 5px #000000" }} className="w-full">
        <Pause />
      </div>
      <div className="py-12 pl-4 md:pl-8 lg:pl-12 xl:pl-20 2xl:pl-32 pb-24 w-full bg-white">
        <h2 className="text-3xl font-bold text-left drop-shadow-xl shadow-black text-zinc-800">
          Zobacz też
        </h2>
        {products && (
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
            {products.map((post: any, i: number) => (
              <Link
                href={`/aktualnosci/${post.url}`}
                key={i}
                title={`Przejdź do artykułu ${post.title}`}
                className="group relative aspect-square h-max flex flex-col hover:bg-[#74B901] hover:bg-opacity-30 hover:p-1 duration-300 ease-in-out"
                style={{ boxShadow: "0px 0px 5px #000000" }}
              >
                <div className="w-full overflow-hidden flex items-start">
                  <Image
                    src={post.primaryImage}
                    width={1024}
                    height={1024}
                    alt={`Obrazek ${post.title}`}
                    className="absolute inset-0 object-cover w-full h-full"
                  />
                </div>
                <h2
                  style={{ boxShadow: "0px 0px 5px #000000" }}
                  className="group-hover:bg-gray-300 bg-gray-200 duration-300 absolute bottom-3 left-3 right-3 text-base lg:text-xl mt-3 text-black font-light text-left px-3 py-1"
                >
                  {post.title}
                </h2>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="flex items-center w-full justify-center space-x-4 text-white py-12">
        <Link
          target="_blank"
          href="https://www.facebook.com/profile.php?id=61550239301123&paipv=0&eav=AfZer2jHkWSa-HmLrgFsTw3nhcupkP39hRtDJF9mHJ8yHD3mOZiyraXKsKpK0l_MQFQ"
        >
          <FaFacebook className="w-12 h-12" />
        </Link>
      </div>
      <div className="w-full flex justify-center pb-12">
        <Link href="/" className="w-max mx-auto">
          <Image
            src="/assets/logo.jpg"
            width={224}
            height={224}
            alt="logo zzrpwis"
            className="w-[224px]"
          />
        </Link>
      </div>
      <div className="flex flex-row flex-wrap -ml-6 text-white w-full justify-center pb-12 px-12">
        <Link
          className="text-sm sm:text-lg lg:text-2xl 2xl:text-3xl font-bold mt-4 ml-6"
          href="/kontakt"
        >
          KONTAKT
        </Link>
        <Link
          className="text-sm sm:text-lg lg:text-2xl 2xl:text-3xl font-bold mt-4 ml-6"
          href="/"
        >
          STRONA GŁÓWNA
        </Link>
        <Link
          className="text-sm sm:text-lg lg:text-2xl 2xl:text-3xl font-bold mt-4 ml-6"
          href="/nasze-wspolprace"
        >
          NASZE WSPÓŁPRACE
        </Link>
      </div>
    </div>
  );
}
export async function generateMetadata({ params }: { params: any }) {
  // fetch data
  const product: any = await getProductByUrl(params.slug);

  return {
    title:
      product?.metaTitle ||
      "ZZRPWiS - Związek Zawodowy Rolnictwa Polskiego Wolni i Solidarni",
    description:
      product?.metaDescription ||
      "Wspieramy Rolników i osoby pracujące na rzecz Rolnictwa. Dbamy o ochronę godności, praw i interesów materialnych. Nie pozwólmy o upadek Polskiego sektora rolnictwa.",
    publisher: "wesiudev.com",
    url: `https://ZZRPWiS.pl/aktualnosci/${product.url}`,
    authors: [
      {
        name: "wesiudev",
        url: "https://wesiudev.com",
      },
      {
        name: "quixy",
        url: "https://quixy.pl",
      },
    ],
    icons: [
      {
        url: "/favicons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicons/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        url: "/favicons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    openGraph: {
      type: "website",
      url: `https://ZZRPWiS.pl/aktualnosci/${product.url}`,
      title:
        product?.metaTitle ||
        "ZZRPWiS - Związek Zawodowy Rolnictwa Polskiego Wolni i Solidarni",
      description:
        product?.metaDescription ||
        "Wspieramy Rolników i osoby pracujące na rzecz Rolnictwa. Dbamy o ochronę godności, praw i interesów materialnych. Nie pozwólmy o upadek Polskiego sektora rolnictwa.",
      siteName: "ZZRPWiS",
      images: [
        {
          url: product.primaryImage,
          type: "image/png",
        },
      ],
    },
    twitter: {
      cardType: "summary_large_image",
      site: "@ZZRPWiS",
      title: product?.metaTitle,
      description: product?.metaDescription,
      image: {
        url: product.primaryImage,
      },
    },
    meta: [
      {
        name: "theme-color",
        content: "#ffffff", // replace with your desired theme color
      },
    ],
  };
}
