import Link from "next/link";
import {
  MotionValue,
  useScroll,
  useTransform,
  motion as motionDiv,
} from "framer-motion";

export default function UnderHero({
  engagementLevel,
  translateY,
  scale,
}: {
  engagementLevel: number;
  translateY: MotionValue<number>;
  scale: MotionValue<number>;
}) {
  return (
    <motionDiv.div
      style={{
        scale: scale,
        translateY: translateY,
        boxShadow: "2px 2px 5px #000000",
      }}
      className={`h-[300vh] bg-white `}
    >
      <h2>Zostań członkiem Związku!!!!</h2>
      <p>
        Celem naszym jest doprowadzenie do normalności w sektorze rolnym, aby
        Polska była samo wystarczalna żywnościowo i nie stawała się rynkiem
        zbytu, a rynkiem producentów !!!
      </p>
      <p>
        Osiągniemy to poprzez wymianę poglądów, wnoszenie uwag do projektów
        procedowanych Ustaw, Rozporządzeń, poprzez udział w pracach w komisjach
        w Ministerstwie Rolnictwa jak i udział naszych kandydatów w wyborach
        Samorządowych do Rad Gmin, Powiatu, Wójtów, Prezydentów.
      </p>
      <p>
        Tematów i problemów mamy bardzo wiele i każdym z nich się zajmujemy.
      </p>
      <p>
        Uregulowań wymagają tematy: programów rolnych, Eko sche­matów,
        funkcjonowanie rynku mleka, mięsa, produkcji konwencjonalnej i
        ekologicznej, pszczelarskiej, podmiotów prowadzących agroturystykę,
        handel płodami rolnymi, podatek rolny, inwestycji drogowych, dopłat do
        energii, zasad wywłasz­czania na rzecz wiatraków, drogi i na inne cele
        publiczne!
      </p>
      <p>
        Wszystko to możemy zrobić razem dla siebie, naszych dzieci i wnuków,
        zmienić wizerunek Rolnika i Polskiej Wsi. Jesteśmy w 11 województwach, a
        w kolejnych Zarządy powstają.
      </p>
      <p className="text-right mt03">
        Zapraszamy do Związku, Rolników, podmioty i osoby pracu­jące w sektorze
        rolnictwa, handlu, produkcji, doradców, KGW, naukowców… w ilości Siła. -
        Nic bez nas o Nas{" "}
      </p>
    </motionDiv.div>
  );
}
