import { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../../auth/next-auth/options";
import { redirect } from "next/navigation";
import { Link } from "@nextui-org/link";
import { Providers } from "../providers";
import { Navbar } from "@/components/navbar";

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
        {children}
        <footer className="w-full flex items-center justify-center py-3 mt-auto">
          <Link
            isExternal
            className="flex items-center gap-1 text-current"
            href="https://github.com/lcscamacho"
            title="github lucas"
          >
            <span className="text-default-600">Powered by</span>
            <p className="text-primary">@Lucas Camacho</p>
          </Link>
        </footer>
      </div>
    </Providers>
  );
}
