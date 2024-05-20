import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardHeader, CardContent, Card, CardFooter } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from 'next/image';
import {RocketIcon, FacebookIcon, GoalIcon, InstagramIcon, LinkedinIcon, MailIcon, PhoneIcon, PieChartIcon, SearchIcon, DollarSignIcon, PercentIcon, ThumbsUpIcon, TrophyIcon} from "./components/icons"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-gray-900 text-white px-4 lg:px-6 py-4 flex items-center justify-between">
        <Link className="flex items-center gap-2" href="#">
          <RocketIcon className="h-6 w-6" />
          <span className="text-xl font-bold">PPC Expert</span>
        </Link>
        <nav className="hidden lg:flex gap-6">
          <Link className="hover:underline" href="#">
            Home
          </Link>
          <Link className="hover:underline" href="#">
            About
          </Link>
          <Link className="hover:underline" href="#">
            Services
          </Link>
          <Link className="hover:underline" href="#">
            Achievements
          </Link>
          <Link className="hover:underline" href="#">
            Contact
          </Link>
        </nav>
        <Button className="lg:hidden">
          Menu
        </Button>
      </header>
      <main className="flex-1">
        <section className="bg-gray-900 text-white py-12 md:py-24 lg:py-32" id="hero">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Unlock Your PPC Potential</h1>
                <p className="text-gray-400 max-w-[600px] text-lg">
                  Discover how our PPC expert can transform your online advertising and drive unparalleled results for
                  your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button>Get a Free Consultation</Button>
                  <Button variant="secondary">Learn More</Button>
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
        <section className="bg-white py-12 md:py-24 lg:py-32" id="about">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Image
                alt="About"
                className="mx-auto rounded-xl"
                height={500}
                src="https://media.istockphoto.com/id/610155916/photo/high-class-mature-man-portrait-at-home.jpg?s=612x612&w=0&k=20&c=j020a5-DXbufblrDh9OycN3rvjtoTbUDKDYxO19FtTg="
                width={500}
                objectFit="cover"
              />
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About the PPC Expert</h2>
                <p className="text-gray-500 max-w-[600px] text-lg">
                  With over a decade of experience in the digital marketing industry, our PPC expert has honed their
                  skills in driving exceptional results for clients across a wide range of industries. From small
                  businesses to enterprise-level organizations, they have a proven track record of delivering measurable
                  success through innovative PPC strategies.
                </p>
                <p className="text-gray-500 max-w-[600px] text-lg">
                  Passionate about the ever-evolving world of online advertising, our PPC expert stays at the forefront
                  of industry trends and best practices, ensuring their clients always have a competitive edge. They are
                  dedicated to providing personalized, data-driven solutions that maximize return on investment and help
                  businesses achieve their marketing goals.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-12 md:py-24 lg:py-32" id="services">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our PPC Services</h2>
              <p className="text-gray-500 max-w-[700px] mx-auto text-lg">
                Our PPC expert offers a comprehensive suite of services to help your business thrive in the digital
                landscape.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <Card className="hover:bg-gray-900 hover:text-white hover:border-gray-300 hover:scale-105 transition duration-300 ease-in-out">
                <CardHeader>
                  <SearchIcon className="h-12 w-12" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Google Ads</h3>
                  <p className="text-gray-500 mt-2">
                    Leverage the power of Googles search engine to reach your target audience and drive qualified
                    leads.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:bg-gray-900 hover:text-white hover:border-gray-300 hover:scale-105 transition duration-300 ease-in-out">
                <CardHeader>
                  <FacebookIcon className="h-12 w-12" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Facebook Ads</h3>
                  <p className="text-gray-500 mt-2">
                    Tap into the vast user base of Facebook and Instagram to deliver highly targeted and engaging ad
                    campaigns.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:bg-gray-900 hover:text-white hover:border-gray-300 hover:scale-105 transition duration-300 ease-in-out">
                <CardHeader>
                  <InstagramIcon className="h-12 w-12" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">TikTok Ads</h3>
                  <p className="text-gray-500 mt-2">
                    Leverage the power of the fastest-growing social media platform to reach a younger, more engaged
                    audience.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:bg-gray-900 hover:text-white hover:border-gray-300 hover:scale-105 transition duration-300 ease-in-out">
                <CardHeader>
                  <LinkedinIcon className="h-12 w-12" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">LinkedIn Ads</h3>
                  <p className="text-gray-500 mt-2">
                    Tap into the professional network of LinkedIn to connect with your target B2B audience and drive
                    high-quality leads.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:bg-gray-900 hover:text-white hover:border-gray-300 hover:scale-105 transition duration-300 ease-in-out">
                <CardHeader>
                  <PieChartIcon className="h-12 w-12" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Analytics & Reporting</h3>
                  <p className="text-gray-500 mt-2">
                    Gain valuable insights into the performance of your PPC campaigns and make data-driven decisions to
                    optimize your results.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:bg-gray-900 hover:text-white hover:border-gray-300 hover:scale-105 transition duration-300 ease-in-out">
                <CardHeader>
                  <GoalIcon className="h-12 w-12" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">PPC Strategy</h3>
                  <p className="text-gray-500 mt-2">
                    Benefit from our experts strategic approach to PPC, tailored to your unique business goals and
                    target audience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-white py-12 md:py-24 lg:py-32" id="achievements">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Achievements</h2>
              <p className="text-gray-500 max-w-[700px] mx-auto text-lg">
                Discover the impressive results our PPC expert has delivered for their clients.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <DollarSignIcon className="h-12 w-12" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-4xl font-bold">$2.5M</h3>
                  <p className="text-gray-500 mt-2">Average increase in client revenue</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <PercentIcon className="h-12 w-12" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-4xl font-bold">78%</h3>
                  <p className="text-gray-500 mt-2">Average increase in client ROI</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <TrophyIcon className="h-12 w-12" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-4xl font-bold">95%</h3>
                  <p className="text-gray-500 mt-2">Client satisfaction rate</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <ThumbsUpIcon className="h-12 w-12" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-4xl font-bold">100+</h3>
                  <p className="text-gray-500 mt-2">Successful PPC campaigns</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>



        <section className="bg-white py-12 md:py-24 lg:py-32" id="testimonials">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Clients Say</h2>
              <p className="text-gray-500 max-w-[700px] mx-auto text-lg">
                Hear from our satisfied clients about the impact our PPC expert has had on their businesses.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardContent>
                  <blockquote className="text-lg font-medium leading-relaxed">
                    Working with the PPC expert has been a game-changer for our business. Their strategic approach and
                    attention to detail have helped us achieve unprecedented results in our online advertising
                    campaigns.
                  </blockquote>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage alt="Jane Doe" src="/placeholder-avatar.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Jane Doe</div>
                      <div className="text-gray-500 text-sm">CEO, Acme Corp</div>
                    </div>
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardContent>
                  <blockquote className="text-lg font-medium leading-relaxed">
                    I was hesitant to invest in PPC advertising, but the PPC experts guidance and expertise have
                    completely changed my perspective. Theyve helped us achieve a remarkable return on our ad spend and
                    consistently drive high-quality leads.
                  </blockquote>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage alt="John Smith" src="/placeholder-avatar.jpg" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">John Smith</div>
                      <div className="text-gray-500 text-sm">Marketing Manager, Widgets Inc</div>
                    </div>
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardContent>
                  <blockquote className="text-lg font-medium leading-relaxed">
                    The PPC experts ability to stay ahead of the curve and implement cutting-edge strategies has been
                    invaluable to our business. Theyve consistently helped us outperform our competitors and achieve
                    our marketing goals.
                  </blockquote>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage alt="Sarah Lee" src="/placeholder-avatar.jpg" />
                      <AvatarFallback>SL</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Sarah Lee</div>
                      <div className="text-gray-500 text-sm">Digital Marketing Director, Acme Solutions</div>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-12 md:py-24 lg:py-32" id="contact">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h2>
                <p className="text-gray-500 max-w-[600px] text-lg">
                  Ready to take your PPC campaigns to the next level? Fill out the form below to schedule a free
                  consultation with our expert.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link className="inline-flex items-center gap-2" href="#">
                    <MailIcon className="h-6 w-6" />
                    <span>info@ppcexpert.com</span>
                  </Link>
                  <Link className="inline-flex items-center gap-2" href="#">
                    <PhoneIcon className="h-6 w-6" />
                    <span>+1 (234) 567-890</span>
                  </Link>
                </div>
              </div>
              <Card>
                <CardContent className="pt-4">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="John Doe" required type="text" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" placeholder="john@example.com" required type="email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="How can we help you?" required />
                    </div>
                    <Button type="submit" variant="secondary">
                      Submit
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white px-4 lg:px-6 py-6">
        <div className="container flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <RocketIcon className="h-6 w-6" />
            <span className="text-xl font-bold">PPC Expert</span>
          </div>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link className="hover:underline" href="#">
              Privacy Policy
            </Link>
            <Link className="hover:underline" href="#">
              Terms of Service
            </Link>
            <Link className="hover:underline" href="#">
              Cookie Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
