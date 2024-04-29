import { Button, Card, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllArts = () => {
  const [allArts, setAllArts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/crafts")
      .then((res) => res.json())
      .then((data) => setAllArts(data));
  }, []);
  const TABLE_HEAD = ["Item Name", "Sub-Category", "Price", ""];

  return (
    <div>
      <Card className="h-full max-w-full mx-2 overflow-scroll lg:overflow-auto">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    color="blue-gray"
                    className="font-bold font-poppins text-sm md:text-base lg:text-base text-blue-800 leading-none "
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allArts.map(({ itemName, subCategory, price, _id }, index) => {
              const isLast = index === allArts.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={itemName}>
                  <td className={classes}>
                    <Typography
                      color="blue-gray"
                      className="font-normal text-sm md:text-base lg:text-base"
                    >
                      {itemName}
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography
                      color="blue-gray"
                      className="font-normal text-sm md:text-base lg:text-base"
                    >
                      {subCategory}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      color="blue-gray"
                      className="font-normal text-sm md:text-base lg:text-base"
                    >
                      {price}
                    </Typography>
                  </td>
                  <td
                    className={`${classes} bg-blue-gray-50/50 flex justify-center `}
                  >
                    <Link to={`/viewDetails/${_id}`}>
                      <Button className="bg-[#FFD1E3] text-black font-medium font-poppins">
                        View Details
                      </Button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default AllArts;
