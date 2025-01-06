import Image from "next/image";
import TextRevealByWord from "@/components/ui/text-reveal";
import PulsatingButton from "@/components/ui/pulsating-button";

export default function Home() {
  return (
    <div>
      <div className="z-10 flex min-h-64 items-center justify-center rounded-lg bg-white dark:bg-black">
        <TextRevealByWord text="Returning Customer" />
      </div>
      
    </div>
  );
}
