import { profiles } from "../data"
import Link from "next/link"
import { GithubIcon, FacebookIcon, InstagramIcon, UpworkIcon, LinkedinIcon } from "./icons"

export default function Footer() {
  return (
    <footer className="bg-[#252525] text-white">
      <div className="container mx-auto px-6 py-8 flex flex-wrap justify-between items-center">
        <div className="flex flex-col space-y-4">
          <span className="text-2xl font-bold">Roberto Laura</span>
        </div>
        
        <div className="flex flex-col space-y-2">
          <div className="flex space-x-4 lg:pt-0 pt-6">
            <Link href={profiles.github}><GithubIcon className="h-8 w-8" /></Link>
            <Link href={profiles.upwork}><UpworkIcon className="h-8 w-8" /></Link>
            <Link href={profiles.linkedin}><LinkedinIcon className="h-8 w-8" /></Link>
            <Link href={profiles.instagram}><InstagramIcon className="h-8 w-8" /></Link>
            <Link href={profiles.facebook}><FacebookIcon className="h-8 w-8" /></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}