import {
  Button,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddCraft = () => {
  const {user}=useContext(AuthContext)
  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const itemName = form.itemName.value;
    const subCategory = form.subCategory.value;
    const description = form.description.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const image = form.image.value;
    const email = form.email.value;
    const stockStatus = form.stockStatus.value;
    const craft = {
      itemName,
      subCategory,
      description,
      customization,
      processingTime,
      rating,
      price,
      image,
      stockStatus,
      email
    };
    
console.log(craft)
    fetch("https://art-craft-b9a10-server.vercel.app/crafts",{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(craft)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Craft Successfully Added ',
          icon: 'success',
        })
      }
    })
    form.reset()
  };
  return (
    <div className="max-w-7xl mx-auto">
      <form onSubmit={handleAdd} className=" p-8 md:p-20 lg:p-20 rounded-md">
        <div className="space-y-4">
          <div className="md:flex lg:flex gap-2">
            <Input
              name="itemName"
              label="Item Name"
              className="bg-white w-[360px] md:w-full lg:w-full "
              required
            />
           
            <select  name="subCategory"
              className="rounded-md border mt-2 md:mt-0 lg:mt-0 h-10 border-gray-400   bg-white w-[360px] md:w-full lg:w-full ">
              <option disabled selected>
              Subcategory Name
              </option>
              <option>Landscape Painting</option>
              <option>Portrait Drawing</option>
              <option>Watercolor Painting</option>
              <option>Oil Painting</option>
              <option>Charcoal Sketching</option>
              <option>Cartoon Drawing</option>
            </select>
          </div>
          <div>
            <Textarea
              name="description"
              label="Short Description"
              className="bg-white w-[360px] md:w-full lg:w-full"
              required
            />
          </div>
          <div className="md:flex lg:flex gap-2">
            <select  name="customization"
              className="rounded-md border  mb-2 md:mb-0 lg:mb-0 h-10 border-gray-400  bg-white w-[360px] md:w-full lg:w-full ">
              <option disabled selected>
              Customization
              </option>
              <option >Yes</option>
              <option >No</option>
            </select>
            <Input
              name="processingTime"
              label="Processing Time"
              className="bg-white w-[360px] md:w-full lg:w-full"
              required
            />
          </div>
          <div className="md:flex lg:flex space-y-2 md:space-y-0 lg:space-y-0 gap-2">
            <Input name="rating" label="Rating" className="bg-white w-[360px] md:w-full lg:w-full" required />
            <Input name="price" label="Price" className="bg-white w-[360px] md:w-full lg:w-full" required />
          </div>
          <div className="md:flex lg:flex space-y-2 md:space-y-0 lg:space-y-0 gap-2">
            <Input
              name="image"
              label="Photo Url"
              className="bg-white w-[360px] md:w-full lg:w-full"
              required
            />
           
            <select  name="stockStatus"
              className="rounded-md border mt-2 md:mt-0 lg:mt-0 h-10 border-gray-400   bg-white w-[360px] md:w-full lg:w-full ">
              <option disabled selected>
              Stock Status
              </option>
              <option>In stock</option>
              <option>Made to Order</option>
            </select>
          </div>
          <div className="md:flex lg:flex space-y-2 md:space-y-0 lg:space-y-0 gap-2">
            <Input
              name="userName"
              label="User Name"
              className="bg-white w-[360px] md:w-full lg:w-full"
              value={user.displayName}
              readOnly
            />
            <Input
              type="email"
              name="email"
              label="User Email"
              className="bg-white w-[360px] md:w-full lg:w-full"
              value={user.email}
              
            />
          </div>
          <div>
            <Button
              type="submit"
              className=" text-white w-full bg-blue-gray-700"
            >
              Add Craft
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCraft;
