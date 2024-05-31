import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Services as data } from "../data";

const Services = (id: any) => {
  return (
    <section className="bg-gray-100 py-12 md:py-16 lg:py-20" id="services">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My PPC Services</h2>
          <p className="text-gray-500 max-w-[700px] mx-auto text-lg">
            Through my agency CPCpoint, me and my team offer a comprehensive suite of PPC services to help your business thrive.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {data.map((service, index) => (
            <Card
              key={index}
              className="hover:bg-gray-900 hover:text-white hover:border-gray-300 hover:scale-105 transition duration-300 ease-in-out"
            >
              <CardHeader>
                <service.icon className="h-12 w-12" />
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-bold">{service.heading}</h3>
                <p className="text-gray-500 mt-2">{service.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;