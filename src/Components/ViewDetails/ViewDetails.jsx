import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const ViewDetails = () => {

  const [details, setDetails] = useState();
  const { id } = useParams();
  const crafts = useLoaderData();
  console.log(details)

  useEffect(() => {
    const findCraft = crafts.find((craft) => craft._id === id);
    setDetails(findCraft);
  }, [crafts, id]);
  
  const {itemName, subCategory, price,customization, description,image, processingTime,
    rating,stockStatus  }=details || {}
  return (
    <div>
       <Card className="lg:max-w-full mx-2 my-1 rounded-none min-h-[calc(100vh-310px)] shadow-none lg:flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-2 lg:w-2/5 shrink-0 rounded-none"
      >
        <img
          src={image}
          alt={itemName}
          className="h-[400px] md:h-[550px] lg:h-[600px] w-full  object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          {subCategory}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {itemName}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal font-poppins text-justify">
          {description}
        </Typography>

        <div className="font-poppins space-y-2">
          <h2 ><span className="text-black font-bold text-base pr-2">Customization : </span> {customization}</h2>
          <h2 ><span className="text-black font-bold text-base pr-2">Processing Time :</span>  {processingTime}</h2>
          <h2 ><span className="text-black font-bold text-base pr-2">Rating : </span> {rating}</h2>
          <h2 ><span className="text-black font-bold text-base pr-2"> Price : </span>{price}</h2>
          <h2 ><span className="text-black font-bold text-base pr-2"> Stock Status : </span>{stockStatus}</h2>
        </div>
       
      </CardBody>
    </Card>
    </div>
  );
};

export default ViewDetails;