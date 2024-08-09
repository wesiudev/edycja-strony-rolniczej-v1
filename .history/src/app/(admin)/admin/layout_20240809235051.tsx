"use client";
import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import LoginPage from "./LoginPage";
import Nav from "./Nav";
import Loading from "./loading";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading />;
  } else
    return (
      <div className="w-full  relative z-[9999] bg-white text-zinc-800">
        {user ? (
          <>
            <Nav />
            <div className="pl-[300px] min-w-full min-h-screen bg-[#222430]">
              <Providers>{children}</Providers>
            </div>
          </>
        ) : (
          <LoginPage />
        )}
      </div>
    );
}