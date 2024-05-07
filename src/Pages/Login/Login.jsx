/* eslint-disable react/no-unescaped-entities */
import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import axios from "axios";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser, googleSignIn, githubSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signInUser(email, password)
      .then((result) => {
        const loggedUser=result.user;
        const user={email}
        
        //get access token
        axios.post('http://localhost:5000/jwt', user,{withCredentials:true})
        .then(res=>{
          if(res.data.success){
            navigate(location?.state ? location.state : "/");
          }
        })
        if (loggedUser) {
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

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser=result.user
        // navigate(location?.state ? location.state : "/");
        if (loggedUser) {
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
  const handleGithubLogin = () => {
    githubSignIn()
      .then((result) => {
        const loggedUser=result.user
        // navigate(location?.state ? location.state : "/");
        if (loggedUser) {
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

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                size="lg"
                name="password"
                label="Password"
                required
              />
              <span
                className="absolute right-2 top-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
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
            <FcGoogle
              onClick={handleGoogleLogin}
              className="text-2xl cursor-pointer"
            />
          </h1>

          <h1>
            <FaGithub
              onClick={handleGithubLogin}
              className="text-2xl cursor-pointer"
            />
          </h1>
        </div>
      </Card>
    </div>
  );
};

export default Login;
