import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const CraftSection = () => {
  const [allArts, setAllArts] = useState([]);
  const {user}=useContext(AuthContext)
  console.log(user,allArts)

  useEffect(() => {
    fetch("http://localhost:5000/crafts")
      .then((res) => res.json())
      .then((data) => setAllArts(data));
  }, []);
  // const [filter, setFilter] = useState();
  // console.log(filter)

  // useEffect(() => {
  //   const filterCraft = allArts.filter((craft) => craft.email === user.email);
  //   setFilter(filterCraft);
  // }, [allArts,user.email]);
  
  // const {itemName, subCategory, price,customization, description,image, processingTime,
  //   rating,stockStatus  }=details || {}
  return (
    <div>
      
    </div>
  );
};

export default CraftSection;