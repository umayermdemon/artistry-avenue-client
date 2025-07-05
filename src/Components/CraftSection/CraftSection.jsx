import { useEffect, useState } from "react";
import CraftCard from "../CraftCard/CraftCard";
const CraftSection = () => {
  const [allArts, setAllArts] = useState([]);
  const url="https://art-craft-b9a10-server.vercel.app/crafts"

  useEffect(() => {
  
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllArts(data));
  }, []);

  return (
    <div className="bg-white mx-2 py-1"> 
      <div>
        <h1 className="text-3xl font-bold font-poppins text-center my-4 text-black">Craft Items</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 max-w-full m-2">
        {allArts?.slice(0, 6).map((item, idx) => (
          <CraftCard key={idx} item={item}></CraftCard>
        ))}
      </div>
    </div>
  );
};

export default CraftSection;
