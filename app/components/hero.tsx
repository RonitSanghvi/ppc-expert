import { Button } from "@/components/ui/button"
import Image from 'next/image';
import { HeroText } from "../data";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gray-900 text-white pb-12 pt-20 md:py-32 lg:py-48" id="hero">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-4xl lg:text-5xl">I am Roberto, Your PPC Specialist</h1>
            <p className="text-gray-400 max-w-[600px] text-lg text-justify"> {HeroText} </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href='#contact'><Button variant="secondary">Connect with me</Button></Link>
            </div>
          </div>
          <Image
            alt="PPC Expert"
            className="mx-auto rounded-xl"
            height={500}
            src="https://media.istockphoto.com/id/1088363648/photo/marketing-leads-and-sales-concept.jpg?s=612x612&w=0&k=20&c=52DWv2lz-IWUdu6_skh6gScXe0YpGSV2Kn3EodJyoTs="
            objectFit="cover"
            width={500}
          />
        </div>
      </div>
    </section>
  )
}