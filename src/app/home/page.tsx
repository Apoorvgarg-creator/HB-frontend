"use client";
import PulsatingButton from "@/components/ui/pulsating-button";
import { useRouter } from "next/navigation";
import TextRevealByWord from "@/components/ui/text-reveal";
import { NavigationBar } from "@/components/navigation-bar";

export default function Home() {
  const router = useRouter();
  
  return (
    <div>
      <div className="z-10 flex min-h-64 items-center justify-center bg-white dark:bg-black">
        <TextRevealByWord text="Home page" />
      </div>
    </div>
  );
}
