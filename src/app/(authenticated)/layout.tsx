import { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../../auth/next-auth/options";
import { redirect } from "next/navigation";
import { Link } from "@nextui-org/link";
import { Providers } from "../providers";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "../../components/Sidebar";

interface PrivateLayoutProps {
  children: ReactNode;
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const session = await getServerSession(nextAuthOptions);
  console.log(session);
  if (!session) {
    redirect("/");
  }

  return (
    <Providers>
      <div className="relative flex flex-col items-center justify-center min-h-screen">
        <Navbar
          image={session.user.image}
          pathname={""}
          nome={session.user.name}
        />
        <div className="flex gap-4 w-full">
          <Sidebar />
          {children}
        </div>
      </div>
    </Providers>
  );
}
