import {
  Button,
  Card,
  Checkbox,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate=useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const password = form.password.value;
    const condition = form.terms.checked;

    if (!condition) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "warning",
        title: "Invalid password format",
      });
      return;
    } 
    else if (password.length < 6) {
     const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "warning",
        title: "Invalid password format",
      });
      return;
    } 
    else if (!/[A-Z]/.test(password)) {
     const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "warning",
        title: "Invalid password format",
      });
      return;
    } 
    else if (!/[a-z]/.test(password)) {
     const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "warning",
        title: "Invalid password format",
      });
      return;
    }
    createUser(email, password)
      .then((result) => {
        console.log(result.user)
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "success",
            title: "Successfully registered",
          });
          updateProfile(result.user,{
            displayName:name, photoURL:photoUrl
          })
          .then(
              navigate('/')
          )
          .catch(error=>{
            console.error(error)
          })
        })
     
      .catch((error) => console.error(error));
    form.reset();
  };

  return (
    <div>
      <Card
        color="transparent"
        shadow={false}
        className="max-w-full rounded-none min-h-[calc(100vh-300px)] bg-white  items-center  py-4 mx-2"
      >
        <Typography variant="h4" color="blue-gray">
          Register
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form
          onSubmit={handleRegister}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Input size="lg" label="Your Name" name="name" required />

            <Input size="lg" label="Your Email" name="email" required />

            <Input size="lg" name="photoUrl" label="PhotoUrl" required />
            <Input
              type="password"
              size="lg"
              name="password"
              label="Password"
              required
            />
          </div>
          <Checkbox
            name="terms"
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button
            type="submit"
            size="lg"
            className="mt-6 bg-[#FFD1E3] text-black"
            fullWidth
          >
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to="/login" className="font-bold  text-blue-700">
              {" "}
              Log In
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Register;
