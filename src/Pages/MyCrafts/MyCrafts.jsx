import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import MyCraft from "../../Components/MyCraft/MyCraft";
import { Button } from "@material-tailwind/react";

const MyCrafts = () => {
  const crafts = useLoaderData();
  const { user } = useContext(AuthContext);
  const [filter, setFilter] = useState();
  useEffect(() => {
    const filterCraft = crafts.filter((craft) => craft.email === user.email);
    setFilter(filterCraft);
  }, [crafts, user.email]);

  return (
    <div>
      <div>
        <Button>Filter</Button>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filter?.map((filterItem, idx) => (
            <MyCraft key={idx} filterItem={filterItem}></MyCraft>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCrafts;
