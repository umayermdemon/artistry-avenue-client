import { Carousel, Typography } from "@material-tailwind/react";

const Banner = () => {
  return (
    <div className="mx-2">
      <Carousel transition={{ duration: 1.5}} >
        <div className="relative h-full w-full">
          <img
            src="https://i.ibb.co/0tht1kS/Banner1.jpg"
            alt="image 1"
            className=" w-full h-[250px] md:h-[300px] lg:h-[800px] object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-xl md:text-4xl lg:text-5xl font-poppins" 
              >
               Discover Your Creativity
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 text-xs md:text-sm lg:text-base font-poppins"
              >
                Unleash your imagination with our curated collection of art supplies and craft materials. From vibrant paints to intricate beads, find everything you need to bring your artistic visions to life.
              </Typography>
             
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="https://i.ibb.co/Gks3qwy/Banner2.jpg"
            alt="image 2"
            className=" w-full h-[250px] md:h-[300px] lg:h-[800px] object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-xl md:text-4xl lg:text-5xl font-poppins" 
              >
               Crafting Memories, Crafting Joy
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 text-xs md:text-sm lg:text-base font-poppins"
              >
               Create unforgettable moments with our handpicked selection of crafting essentials. Whether you are a seasoned crafter or just starting out, explore our wide range of quality products designed to inspire and delight.
              </Typography>
              
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="https://i.ibb.co/p2SXnV6/Banner3.jpg"
            alt="image 3"
            className=" w-full h-[250px] md:h-[300px] lg:h-[800px] object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-xl md:text-4xl lg:text-5xl font-poppins" 
              >
               Artistry Unveiled
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 text-xs md:text-sm lg:text-base font-poppins"
              >
               Experience the beauty of self-expression through our exquisite assortment of artistry tools. Dive into a world of colors, textures, and possibilities, and let your creativity soar to new heights with every stroke and stitch.
              </Typography>
              
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
