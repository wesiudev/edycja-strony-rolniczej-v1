import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Panel administracyjny",
};
export default async function Admin() {
  return <div className="grid grid-cols-4"></div>;
}
