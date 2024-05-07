import {
  Timeline,
  TimelineBody,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  Typography,
} from "@material-tailwind/react";

const AboutSection = () => {
  return (
    <div className="max-w-7xl mx-auto mb-4">
      <div className="mb-4 text-center font-rubik ">
        <h1 className="font-bold text-5xl text-[#0E385D] border-b-2 border-green-200 px-2 hover:px-8  py-2 mb-4 inline-block" >About Us</h1>
        <p className="text-[#0E385D] font-medium" >
          WELCOME TO OUR Real Estate COMPANY
        </p>
      </div>
      <div className=" flex flex-col lg:flex-row gap-12 pt-4">
        <div className="mx-2 md:mx-4 lg:mx-auto">
          <img src="https://i.ibb.co/p2SXnV6/Banner3.jpg" alt="" className="rounded-xl"  />
        </div>
        <div className="mx-2 md:mx-4 lg:mx-auto">
          <Timeline>
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader className="h-3">
                <TimelineIcon />
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="leading-none font-rubik"
                  data-aos="fade-left" data-aos-duration='1000'
                >
                  About Our Company
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography
                  variant="small"
                  color="gary"
                  className="font-normal text-gray-600 font-rubik"
                  data-aos="zoom-out" data-aos-duration='2000'
                  
                >
                  Learn about our company mission, values, and commitment to excellence in real estate. Discover how we strive to provide exceptional service and personalized solutions to meet your property needs.
                </Typography>
              </TimelineBody>
            </TimelineItem>
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader className="h-3">
                <TimelineIcon />
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="leading-none font-rubik"
                  data-aos="fade-left" data-aos-duration='1000'
                >
                  Terms & Conditions
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography
                  variant="small"
                  color="gary"
                  className="font-normal text-gray-600 font-rubik"
                  data-aos="zoom-out" data-aos-duration='2000'
                >
                  Familiarize yourself with our terms and conditions to ensure a smooth and transparent transaction process. From legal requirements to payment procedures, we outline the guidelines for engaging with our real estate services.
                </Typography>
              </TimelineBody>
            </TimelineItem>
            <TimelineItem>
              <TimelineHeader className="h-3">
                <TimelineIcon />
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="leading-none font-rubik"
                  data-aos="fade-left" data-aos-duration='1000'
                >
                  Our Specialty
                </Typography>
              </TimelineHeader>
              <TimelineBody>
                <Typography
                  variant="small"
                  color="gary"
                  className="font-normal text-gray-600 font-rubik"
                  data-aos="zoom-out" data-aos-duration='2000'
                >
                  Explore our areas of expertise and discover why clients choose us for their real estate needs. From luxury properties to investment opportunities, we specialize in matching clients with properties that exceed their expectations. Experience the difference with our personalized approach to real estate.
                </Typography>
              </TimelineBody>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
