import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { education } from "../data";
import Link from "next/link";

export default function Education(id: any) {
    return (
        <section className="bg-gray-100 py-12 md:py-24 lg:py-32" id="education">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">PPC Certificates</h2>
              <p className="text-gray-500 max-w-[700px] mx-auto text-lg">
                I also took and passed various PPC courses.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {education.map((education, index)=>(
              <Link href={education.url} key={index}>
                <Card className="hover:shadow-2xl hover:scale-105">
                  <CardHeader>
                    <education.icon className="h-12 w-12" />
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-xl font-bold">{education.degree}</h3>
                    <p className="text-gray-500 mt-2">{education.details}</p>
                  </CardContent>
                </Card>
              </Link>
              ))}
              
            </div>
          </div>
        </section>
    )
}