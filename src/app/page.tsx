"use client";
import PulsatingButton from "@/components/ui/pulsating-button";
import { useRouter } from "next/navigation";
import TextRevealByWord from "@/components/ui/text-reveal";

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
      <div className="z-10 flex min-h-64 items-center justify-center rounded-lg bg-white dark:bg-black">
        <TextRevealByWord text="Hobby Buddy : Find your Vibe" />
      </div>
      <div className="flex items-center justify-center mb-4">
      <PulsatingButton onClick={handleSignUpButton}>Sign up</PulsatingButton>
      <div className="m-5"> </div>
      <PulsatingButton onClick={handleLoginButton}>Login</PulsatingButton>
      </div>
    </div>
  );
}
