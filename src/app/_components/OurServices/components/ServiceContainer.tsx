import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ServicesContainer({ service, index }: any) {
  const isEven = index % 2 === 0;

  return (
    <div className="w-full min-h-screen flex items-center">
      <div className="container mx-auto grid md:grid-cols-2 gap-8">
        <div 
          className={`flex flex-col items-start gap-[42px] ${
            isEven ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          {/* Title and Description */}
          <div className="flex flex-col gap-[36px] order-1">
            <h1
              className={`text-3xl md:text-[36px] font-[300px] ${
                service.text ? service.text : "text-gray-900"
              }`}
            >
              {service?.title}
            </h1>
            <p
              className={`${
                service.text ? service.text : "text-gray-600"
              } font-[400] text-[18px] max-w-md`}
            >
              {service?.description}
            </p>
          </div>

          {/* Video for mobile view */}
          <div className="md:hidden order-2 w-full flex justify-center">
            <video
              className="w-full h-[335px] object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={service?.video} type="video/mp4" />
            </video>
          </div>

          {/* Service List */}
          <div className="w-full md:max-w-[254px] order-3">
            {service?.list?.map((item: string, index: number) => (
              <div
                key={index}
                className={`cursor-pointer py-[12px] transition-colors border-b ${
                  service.text ? service.text : ""
                } border-gray-200`}
              >
                {item}
              </div>
            ))}
          </div>

          <Button
            onClick={service?.onclick}
            variant="outline"
            className="bg-white shadow-none min-w-[240px] min-h-[52px] font-[400] flex items-center justify-center hover:bg-blue-950 hover:text-white order-4"
          >
            VIEW ALL
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Video for desktop view */}
        <div 
          className={`hidden md:flex w-full justify-center ${
            isEven ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <video
            className="w-full lg:w-[570px] h-[530px] object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={service?.video} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}