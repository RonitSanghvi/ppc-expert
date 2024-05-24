import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRightIcon } from "./icons";
import { Blogs } from "../data";

export default function Blog(id: any) {
    return (
        <section className="bg-white py-12 md:py-24 lg:py-32" id="blogs">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Blogs</h2>
              <p className="text-gray-500 max-w-[700px] mx-auto text-lg">
                Check out my latest blog posts on magazine adstage.io
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {Blogs.map((blog, index)=>(<Card className="pt-6" key={index}>
                <CardContent>
                  <h3 className="text-xl font-bold">{blog.heading}</h3>
                  <p className="text-gray-500 mt-2 text-justify"> {blog.data} </p>
                  <Link className="inline-flex items-center hover:font-bold gap-2 mt-4 underline" href={blog.url}>
                    Read More
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>))}
              
            </div>
          </div>
        </section>
    )
}