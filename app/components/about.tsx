import { profiles } from "../data";
import { FacebookIcon, LinkedinIcon, InstagramIcon, GithubIcon, UpworkIcon } from './icons';
import Link from "next/link";

export default function About(id: any) {
  return (
    <div className="bg-white py-12 md:py-24 lg:py-32" id="about">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 ">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Introduction</h2>
            <p className="text-gray-500 max-w-[600px] text-lg text-justify">
              I am <b className="text-black">Mr. Roberto Laura</b>, a Munich-based digital marketing professional with a focus on results-driven PPC campaigns. My passion for this field ignited early on, leading me to launch my own agency at the young age of 24. Since then, I have managed over €5 million in PPC budgets for clients across various industries. My expertise extends beyond my agency work, as I also consult for businesses and individuals, leveraging platforms like Upwork and LinkedIn.
            </p>
            <p className="text-gray-500 max-w-[600px] text-lg text-justify">
              Currently, I head cpcpoint.net, a valuable PPC agency, and contribute technical content to the esteemed adstage.io publication. Whether you need a skilled PPC expert to manage your campaigns or a seasoned technical writer to craft clear, informative content, I can help. Lets discuss how I can propel your business forward.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5 my-auto mx-auto">
            <Link href={profiles.github} className="hover:shadow-2xl hover:scale-105 p-4 border-2 rounded-lg border-black">
              <GithubIcon/>
            </Link>
            <Link href={profiles.upwork} className="hover:shadow-2xl hover:scale-105 p-4 border-2 rounded-lg border-black">
              <UpworkIcon />
            </Link>
            <Link href={profiles.linkedin} className="hover:shadow-2xl hover:scale-105 p-4 border-2 flex justify-center items-center rounded-lg border-black">
              <LinkedinIcon className="h-8 w-8" />
            </Link>
            <Link href={profiles.instagram} className="hover:shadow-2xl hover:scale-105 p-4 border-2 rounded-lg border-black">
              <InstagramIcon className="h-8 w-8"/>
            </Link>
            <Link href={profiles.facebook} className="hover:shadow-2xl hover:scale-105 p-4 border-2 flex justify-center items-center rounded-lg border-black">
              <FacebookIcon className="scale-125" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}