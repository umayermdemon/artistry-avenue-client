import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import PropTypes from 'prop-types'
import { Spinner } from "@material-tailwind/react";
import { AuthContext } from "../Provider/AuthProvider";


const PrivateRoute = ({children}) => {

  const {user,loader}=useContext(AuthContext);

  const location=useLocation()

  if(loader){
    return <Spinner className="flex mx-auto my-auto"/>
  }

  if(user){
    return children
  }

  return <Navigate state={location.pathname} to='/login'></Navigate>;
};

PrivateRoute.propTypes={
  children:PropTypes.node
}

export default PrivateRoute;