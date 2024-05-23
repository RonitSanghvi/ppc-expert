import { CardHeader, CardContent, Card } from "@/components/ui/card"
const Achievements = () => {
    return(
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
                <CardContent className="pt-10">
                  <h3 className="text-4xl font-bold">$5M</h3>
                  <p className="text-gray-500 mt-2">Manage over 5 Million Dollars of PPC in EURO budget over the years.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-10">
                  <h3 className="text-4xl font-bold">78%</h3>
                  <p className="text-gray-500 mt-2">Average increase in client ROI</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-10">
                  <h3 className="text-4xl font-bold">95%</h3>
                  <p className="text-gray-500 mt-2">Client satisfaction rate</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-10">
                  <h3 className="text-4xl font-bold">100+</h3>
                  <p className="text-gray-500 mt-2">Successful PPC campaigns</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

    )
}

export default Achievements