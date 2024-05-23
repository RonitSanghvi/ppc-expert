"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {MailIcon, PhoneIcon} from "./icons"
import { profiles } from "../data"

export default function GetInTouch() {

  const phoneNumber = "+1 (234) 567-890";

  const handleCopyPhoneNumber = (event: any) => {
    event.preventDefault();
    navigator.clipboard.writeText(phoneNumber).then(() => {
      alert("Phone number copied to clipboard!");
    }, () => {
      alert("Failed to copy phone number.");
    });
  };


    return (
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
                  <Link className="inline-flex items-center gap-2" href={profiles.email}>
                    <MailIcon className="h-6 w-6" />
                    <span>info@ppcexpert.com</span>
                  </Link>
                  <Link className="inline-flex items-center gap-2" href="#" onClick={handleCopyPhoneNumber}>
                    <PhoneIcon className="h-6 w-6" />
                    <span>{phoneNumber}</span>
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
    )
}