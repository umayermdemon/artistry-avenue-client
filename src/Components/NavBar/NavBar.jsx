import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  IconButton,
  MenuItem,
  MenuList,
  Avatar,
  Tooltip,
  Switch,
} from "@material-tailwind/react";
import { Bars2Icon } from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import userImg from "/user.png";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
function ProfileMenu() {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const { displayName, photoURL } = user;
  const handleLogout = () => {
    logOut();

    navigate("/");
  };
  return (
    <Tooltip content={displayName}>
      <Menu>
        <MenuHandler>
          {user.photoURL ? (
            <Avatar
              variant="circular"
              size="sm"
              alt="Profile Image"
              className="cursor-pointer"
              src={photoURL}
            />
          ) : (
            <Avatar
              variant="circular"
              size="sm"
              alt="Profile Image"
              className="cursor-pointer"
              src={userImg}
            />
          )}
        </MenuHandler>
        <MenuList>
          <hr className="my-2 border-blue-gray-50" />
          <MenuItem className="flex items-center gap-2 ">
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V13C0 13.2652 0.105357 13.5196 0.292893 13.7071C0.48043 13.8946 0.734784 14 1 14C1.26522 14 1.51957 13.8946 1.70711 13.7071C1.89464 13.5196 2 13.2652 2 13V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0ZM11.293 9.293C11.1108 9.4816 11.01 9.7342 11.0123 9.9964C11.0146 10.2586 11.1198 10.5094 11.3052 10.6948C11.4906 10.8802 11.7414 10.9854 12.0036 10.9877C12.2658 10.99 12.5184 10.8892 12.707 10.707L15.707 7.707C15.8945 7.51947 15.9998 7.26516 15.9998 7C15.9998 6.73484 15.8945 6.48053 15.707 6.293L12.707 3.293C12.6148 3.19749 12.5044 3.12131 12.3824 3.0689C12.2604 3.01649 12.1292 2.9889 11.9964 2.98775C11.8636 2.9866 11.7319 3.0119 11.609 3.06218C11.4861 3.11246 11.3745 3.18671 11.2806 3.2806C11.1867 3.3745 11.1125 3.48615 11.0622 3.60905C11.0119 3.73194 10.9866 3.86362 10.9877 3.9964C10.9889 4.12918 11.0165 4.2604 11.0689 4.3824C11.1213 4.50441 11.1975 4.61475 11.293 4.707L12.586 6H5C4.73478 6 4.48043 6.10536 4.29289 6.29289C4.10536 6.48043 4 6.73478 4 7C4 7.26522 4.10536 7.51957 4.29289 7.70711C4.48043 7.89464 4.73478 8 5 8H12.586L11.293 9.293Z"
                fill="#90A4AE"
              />
            </svg>
            <Typography
              onClick={handleLogout}
              variant="small"
              className="font-medium"
            >
              Sign Out
            </Typography>
          </MenuItem>
        </MenuList>
      </Menu>
    </Tooltip>
  );
}

function NavList() {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex  items-center  gap-96">
      <div>
        <ul className="mt-2 mb-4  flex flex-col gap-6 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center text-black">
          <NavLink to="/">
            <Typography className="font-medium  font-poppins  text-base">
              Home
            </Typography>
          </NavLink>

          <NavLink to="/allArt">
            <Typography className="font-medium  font-poppins text-base">
              All Art & craft Items
            </Typography>
          </NavLink>

          <NavLink to="/addCraft">
            <Typography className="font-medium  font-poppins text-base">
              Add Craft Item
            </Typography>
          </NavLink>

          <NavLink to="/myCraft">
            <Typography className="font-medium  font-poppins text-base">
              My Art & Craft List
            </Typography>
          </NavLink>
        </ul>
      </div>

      <div className="hidden lg:block ">
        <div className="flex flex-row gap-2">
          <Switch />
          {user ? (
            <ProfileMenu />
          ) : (
            <div>
              <NavLink to="/login">
                <Button size="sm" variant="text">
                  <span className="text-[#0B2B4F] text-xs md:text-sm lg:text-sm">
                    Log In
                  </span>
                </Button>
              </NavLink>
              <span>/</span>
              <NavLink to="/register">
                <Button size="sm" variant="text">
                  <span className="text-[#0B2B4F] text-xs md:text-sm lg:text-sm">
                    Register
                  </span>
                </Button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const NavBar = () => {
  const { user } = useContext(AuthContext);
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <div className=" w-full sticky  top-0 z-50 p-2 ">
      <Navbar className="max-w-full rounded-none px-2 lg:px-24 py-1  md:py-4 lg:py-6 lg:pl-4">
        <div className="relative flex items-center justify-between text-[#0B2B4F]">
          <IconButton
            size="sm"
            color="blue-gray"
            variant="text"
            onClick={toggleIsNavOpen}
            className=" mr-2 lg:hidden"
          >
            <Bars2Icon className="h-6 w-6" />
          </IconButton>

          <Typography
            as="a"
            href="#"
            className="mr-4 ml-2 lg:ml-16 font-poppins cursor-pointer py-1.5 font-bold text-base md:text-2xl lg:text-2xl text-[#0B2B4F] "
          >
            Artistry Avenue
          </Typography>

          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="block lg:hidden">
            <div className="flex flex-row gap-2">
              <Switch />
              {user ? (
                <ProfileMenu />
              ) : (
                <div className="flex flow-row">
                  <NavLink to="/login">
                    <Button size="sm" variant="text">
                      <span className="text-[#0B2B4F] text-xs md:text-sm lg:text-sm">
                        Log In
                      </span>
                    </Button>
                  </NavLink>
                  <span>/</span>
                  <NavLink to="/register">
                    <Button size="sm" variant="text">
                      <span className="text-[#0B2B4F] text-xs md:text-sm lg:text-sm">
                        Register
                      </span>
                    </Button>
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </div>
        <MobileNav open={isNavOpen} className="overflow-scroll">
          <NavList />
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default NavBar;
