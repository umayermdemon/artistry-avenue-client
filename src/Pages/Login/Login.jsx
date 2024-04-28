/* eslint-disable react/no-unescaped-entities */
import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {
    const { signInUser,googleSignIn,githubSignIn } = useContext(AuthContext);
    const location = useLocation();
    console.log(location)
    const navigate=useNavigate()

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        if (result.user) {

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
            title: "Signed in successfully",
          });
          navigate('/')
        }
      })

      .catch((error) => {
        if (error) {
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
            title: "Please provide valid email & password",
          });
        }
      });
  };

  const handleGoogleLogin=()=>{
    googleSignIn()
    .then((result) => {
      if (result.user) {

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
          title: "Signed in successfully",
        });
        navigate('/')
      }
    })

    .catch((error) => {
      if (error) {
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
          title: "Please provide valid email & password",
        });
      }
    });
};
  const handleGithubLogin=()=>{
   githubSignIn()
    .then((result) => {
      if (result.user) {

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
          title: "Signed in successfully",
        });
        navigate('/')
      }
    })

    .catch((error) => {
      if (error) {
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
          title: "Please provide valid email & password",
        });
      }
    });
};

  return (
    <div>
      <Card
        color="transparent"
        shadow={false}
        className="max-w-full rounded-none min-h-[calc(100vh-300px)] bg-white  items-center  py-4 mx-2"
      >
        <Typography variant="h4" color="blue-gray">
          Login
        </Typography>

        <form
          onSubmit={handleLogIn}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Input type="email" size="lg" label="Your Email" name="email" />

            <Input type="password" size="lg" label="Password" name="password" />
          </div>

          <Button
            type="submit"
            size="lg"
            className="mt-6 bg-[#FFD1E3] text-black"
            fullWidth
          >
            Login
          </Button>

          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account?{" "}
            <Link to="/register" className="font-bold  text-blue-700">
              Register
            </Link>
          </Typography>
        </form>
        <h2 className="text-center font-bold text-black font-poppins mt-16">
          Or Sign Up With
        </h2>
        <hr />

        <div className="flex flex-row gap-6 justify-center items-center mt-6">
          <h1>
            <FcGoogle onClick={handleGoogleLogin} className="text-2xl cursor-pointer" />
          </h1>

          <h1>
            <FaGithub onClick={handleGithubLogin} className="text-2xl cursor-pointer" />
          </h1>
        </div>
      </Card>
    </div>
  );
};

export default Login;
