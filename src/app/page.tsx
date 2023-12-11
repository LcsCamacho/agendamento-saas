import TabsRegisterAndLogin from "@/auth/components/tabs-register-and-login";
import { nextAuthOptions } from "@/auth/next-auth/options";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import backgroundImage from "/public/images/bg-signin.jpg";
import { SignInForm } from "@/auth/components/sign-in-form";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";

export default async function Home() {
  const session = await getServerSession(nextAuthOptions);

  if (session) {
    redirect("/turmas");
  }

  return (
    <div className="dark-linear-gradient relative w-screen h-full">
      <main className="flex min-h-screen flex-col items-center justify-center p-24 ">
        <ScrollUp />
        <Hero />
        <Features />
        <Video />
        <Brands />
        <AboutSectionOne />
        <AboutSectionTwo />
        <Testimonials />
        <Pricing />
        <Blog />
        <Contact />
      </main>
    </div>
  );
}
