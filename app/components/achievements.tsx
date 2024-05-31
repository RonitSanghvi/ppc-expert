import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Achievements as data } from "../data"
const Achievements = (id: any) => {
    return(
        <section className="bg-white py-12 md:py-24 lg:py-32" id="achievements">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Achievements</h2>
              <p className="text-gray-500 max-w-[700px] mx-auto text-lg">
                Discover the impressive results that myself and my team of PPC expert have delivered for their clients.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {data.map((data,index)=>(<Card key={index}>
                <CardContent className="pt-10">
                  <h3 className="text-4xl font-bold">{data.heading}</h3>
                  <p className="text-gray-500 mt-2">{data.details}</p>
                </CardContent>
              </Card>))}
            </div>
          </div>
        </section>

    )
}

export default Achievements