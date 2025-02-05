"use client";
import PulsatingButton from "@/components/ui/pulsating-button";
import { useRouter } from "next/navigation";
import TextRevealByWord from "@/components/ui/text-reveal";
import { NavigationBar } from "@/components/navigation-bar";

export default function Home() {
  const router = useRouter();
  const handleSignUpButton = () => {
    // window.location.href = "http://localhost:3000/signup"; // Never use in production !
    router.push('/signup');
  }

  const handleLoginButton = () => {
    // window.location.href = "http://localhost:3000/login";
    router.push('/login');
  }
  
  return (
    <div>
      <NavigationBar/>
      <div className="z-10 flex min-h-64 items-center justify-center bg-white dark:bg-black">
        <TextRevealByWord text="Hobby Buddy : Find your Vibe" />
      </div>
    </div>
  );
}
