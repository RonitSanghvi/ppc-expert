import Image from 'next/image';

export default function About() {
    return (
        <div className="bg-white py-12 md:py-24 lg:py-32" id="about">
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
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Introduction</h2>
                <p className="text-gray-500 max-w-[600px] text-lg text-justify">
                  I'm <b className='text-black'>Mr. Roberto Laura</b>, a Munich-based digital marketing professional with a focus on 
                  results-driven PPC campaigns. My passion for this field ignited early on, leading me to 
                  launch my own agency at the young age of 24. Since then, I've managed over €5 million in 
                  PPC budgets for clients across various industries. My expertise extends beyond my agency 
                  work, as I also consult for businesses and individuals, leveraging platforms like Upwork 
                  and LinkedIn. 
                </p>
                <p className="text-gray-500 max-w-[600px] text-lg text-justify">
                Currently, I head cpcpoint.net, a valuable resource for PPC insights, and contribute 
                technical content to the esteemed adstage.io publication. Whether you need a skilled PPC 
                expert to manage your campaigns or a seasoned technical writer to craft clear, informative 
                content, I'm here to help. Let's discuss how I can propel your business forward.
                </p>
              </div>
            </div>
          </div>
        </div>
    )
}
