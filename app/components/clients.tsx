import { CardContent, Card, CardFooter } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"


export default function Clients() {
    return (
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
    )
}