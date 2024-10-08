import Pause from "@/components/Pause";
import Regions from "@/components/Regions";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa6";

export default async function Page() {
  return (
    <>
      <div className="z-10 relative">
        <Regions />
      </div>
      <div className="relative py-12 bg-heroBG min-h-screen w-full bg-center bg-no-repeat">
        <div className="absolute top-0 left-0 bg-black w-full h-full bg-opacity-50" />

        <div className="relative z-10">
          <div
            className="bg-white p-6 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] rounded-xl my-12 relative z-10 mx-auto"
            style={{ boxShadow: "2px 2px 5px #000000" }}
          >
            <div className="grid grid-cols-2 w-full">
              <div className="text-3xl lg:text-5xl font-bold text-zinc-800 text-left">
                KONTAKT ZZRPWiS
              </div>
              <Link
                href="/"
                className="flex items-end justify-end"
                title="przejdź na stronę główną"
              >
                <Image
                  src="/assets/logo.jpg"
                  width={224}
                  height={224}
                  alt=""
                  className="w-1/2 lg:w-auto mb-12"
                  style={{ boxShadow: "2px 2px 5px #000000" }}
                />
              </Link>
            </div>
            <ul className="text-zinc-800">
              <li className="text-2xl">
                <span className="text-2xl lg:text-5xl font-bold">NIP</span>{" "}
                <br /> 9571158696{" "}
              </li>
              <li className="text-2xl">
                <span className="text-2xl lg:text-5xl font-bold">REGON</span>{" "}
                <br /> 525407850{" "}
              </li>
            </ul>
            <h2 className="text-2xl font-bold mt-3 text-zinc-800">
              Władysława Iv 12E / 6, 80-547 Gdańsk, Polska
            </h2>
            <div className="flex items-center text-3xl text-zinc-800 mt-6">
              <FaEnvelope className="mr-2" /> Adres email
            </div>
            <Link
              title="Wyślij email"
              href="mailto:ZZRPWOLNIISOLIDARNI@WP.PL"
              className="flex items-center text-lg lg:text-3xl mt-3 text-zinc-800 font-bold hover:underline"
            >
              ZZRPWOLNIISOLIDARNI@WP.PL
            </Link>
            <div className="flex flex-row flex-wrap justify-center -ml-3 text-zinc-800 w-full px-12">
              <Link
                title="przejdź na naszą stronę główną"
                className="text-sm sm:text-lg lg:text-2xl 2xl:text-3xl font-bold mt-4 ml-3"
                href="/"
              >
                STRONA GŁÓWNA
              </Link>
              <Link
                title="przejdź na nasze współprace"
                className="text-sm sm:text-lg lg:text-2xl 2xl:text-3xl font-bold mt-4 ml-3"
                href="/nasze-wspolprace"
              >
                NASZE WSPÓŁPRACE
              </Link>
              <Link
                title="zobacz nasze aktualności"
                className="text-sm sm:text-lg lg:text-2xl 2xl:text-3xl font-bold mt-4 ml-3"
                href="/aktualnosci"
              >
                AKTUALNOŚCI
              </Link>
            </div>
            <div className="flex items-center justify-center w-full space-x-4 text-zinc-800 mt-4">
              {/* <Link href="#">
              <FaTiktok className="w-12 h-12" />
            </Link> */}
              <Link href="https://www.facebook.com/profile.php?id=61550239301123&paipv=0&eav=AfZer2jHkWSa-HmLrgFsTw3nhcupkP39hRtDJF9mHJ8yHD3mOZiyraXKsKpK0l_MQFQ">
                <FaFacebook className="w-12 h-12" />
              </Link>
              {/* <Link href="#">
              <FaYoutube className="w-12 h-12" />
            </Link> */}
            </div>
          </div>
        </div>
      </div>
      <div className="z-10 relative">
        <Pause />
      </div>
    </>
  );
}
export const metadata: Metadata = {
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#fff",
  publisher: "wesiudev.com",
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
  manifest: "/manifest.json",
  verification: {
    google: "google85185d3abec28326.html",
  },
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
  title: "KONTAKT - Związek Zawodowy Rolnictwa Polskiego Wolni i Solidarni",
  description:
    "Wspieramy Rolników i osoby pracujące na rzecz Rolnictwa. Dbamy o ochronę godności, praw i interesów materialnych. Nie pozwólmy o upadek Polskiego sektora rolnictwa.",
  openGraph: {
    type: "website",
    url: "https://ZZRPWiS.pl/kontakt",
    title: "KONTAKT - Związek Zawodowy Rolnictwa Polskiego Wolni i Solidarni",
    description:
      "Wspieramy Rolników i osoby pracujące na rzecz Rolnictwa. Dbamy o ochronę godności, praw i interesów materialnych. Nie pozwólmy o upadek Polskiego sektora rolnictwa.",
    siteName: "ZZRPWiS",
  },
};
