"use client";
import PulsatingButton from "@/components/ui/pulsating-button";
import { useRouter } from "next/navigation";
import TextRevealByWord from "@/components/ui/text-reveal";
import { NavigationBar } from "@/components/navigation-bar";
import Image from "next/image";
import landingPagePic from "../../public/4500168.webp";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export default function Home() {
  const router = useRouter();

  return (
    <div>
      <NavigationBar />
      {/* <div className="z-10 flex min-h-64 items-center justify-center bg-white dark:bg-black">

      </div> */}
      <div className="h-screen dark:bg-black bg-white p-4">
        <div className="flex">
          <div>
            <Image src={landingPagePic} alt="for screen reader" />
          </div>
          <div className="grow self-center">
            <h1 className="underline text-4xl text-white text-center">
              Find Your Tribe, Share Your Passion
            </h1>
            <div className="h-4"></div>
            <p className="text-white  text-xl text-center">
              Connect with like-minded people, chat, meet, and enjoy your
              favorite hobbies together.
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <Card className="w-[350px] ">
            <CardHeader>
              <CardTitle>Find Like-Minded People</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Discover and connect with people who share your hobbies and interests effortlessly.</p>
            </CardContent>
          </Card>
          <Card className="w-[350px] ">
            <CardHeader>
              <CardTitle>Group Activities & Events</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Plan, join, and participate in group activities or hobby-based events near you.</p>
            </CardContent>
          </Card>
          <Card className="w-[350px] ">
            <CardHeader>
              <CardTitle>Seamless Chat & Messaging</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Chat instantly with hobby buddies, share ideas, and plan meetups easily.</p>
            </CardContent>
          </Card>
          <Card className="w-[350px] ">
            <CardHeader>
              <CardTitle>Personalized Hobby Suggestions</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Get AI-powered recommendations for hobbies and groups based on your interests.</p>
            </CardContent>
          </Card>
        </div>
        <div className="flex">
          <div className="grow self-center"><p className="text-white  text-xl text-center">Testimonal 1 <br />
            -Apoorv Garg
          </p></div>

          <Image src={landingPagePic} alt="for screen reader" width={200} height={200} />
        </div>
        <div className="flex">
          <Image src={landingPagePic} alt="for screen reader" width={200} height={200} />
          <div className="grow self-center"><p className="text-white  text-xl text-center">Testimonal 2 <br />
            -Apoorv Garg
          </p>
          </div>
        </div>
        <div className="flex justify-between">
        <Card className="w-[350px] h-[400px]">
          <CardHeader>
            <CardTitle>Find Like-Minded People</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Discover and connect with people who share your hobbies and interests effortlessly.</p>
          </CardContent>
        </Card>
        <Card className="w-[350px] ">
          <CardHeader>
            <CardTitle>Group Activities & Events</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Plan, join, and participate in group activities or hobby-based events near you.</p>
          </CardContent>
        </Card>
        <Card className="w-[350px] ">
          <CardHeader>
            <CardTitle>Seamless Chat & Messaging</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Chat instantly with hobby buddies, share ideas, and plan meetups easily.</p>
          </CardContent>
        </Card>
        <Card className="w-[350px] ">
          <CardHeader>
            <CardTitle>Personalized Hobby Suggestions</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Get AI-powered recommendations for hobbies and groups based on your interests.</p>
          </CardContent>
        </Card>
        </div>
      </div>

    </div>
  );
}
