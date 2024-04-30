import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import MyCraft from "../../Components/MyCraft/MyCraft";
import { Spinner } from "@material-tailwind/react";

const MyCrafts = () => {
  const crafts = useLoaderData();
  const { user,loader } = useContext(AuthContext);
  if(loader){
    <Spinner/>
  }
  const [filter, setFilter] = useState([]);
  const [craft, setCraft]=useState(filter)
  useEffect(() => {
    const filterCraft = crafts.filter((craft) => craft.email === user.email);
    setFilter(filterCraft);
    setCraft(filterCraft)
  }, [crafts, user.email]);

  return (
      <div>
      <div className="text-center mr-4 mt-2">
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn btn-outline m-1">
           Customization
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-gray-100 rounded-box w-24"
          >
            <li><a>Yes</a></li>
            <li><a>No</a></li>
          </ul>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-full m-2">
          {craft?.map((filterItem, idx) => (
            <MyCraft key={idx} filterItem={filterItem} craft={craft} setCraft={setCraft} ></MyCraft>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCrafts;
